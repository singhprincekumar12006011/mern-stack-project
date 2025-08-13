import user from "../models/userModel.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import transporter from "../config/nodemailer.js";

// ✅ Signup with OTP
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({ success: false, message: "All fields are required" });
        }

        const existUser = await user.findOne({ email });
        if (existUser) {
            return res.json({ success: false, message: "Email already in use" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const otp = crypto.randomInt(100000, 999999).toString();
        const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

        const newUser = new user({
            name,
            email,
            password: hashPassword,
            isVerified: false,
            otp,
            otpExpiry,
        });

        await newUser.save();

        try {
            await transporter.sendMail({
                from: process.env.SENDER_EMAIL,
                to: email,
                subject: "Verify your email",
                html: `<p>Your OTP is <b>${otp}</b>. It will expire in 10 minutes.</p>`,
            });

            console.log(`OTP sent successfully to ${email}: ${otp}`);
            return res.json({ success: true, message: "OTP sent to email. Please verify." });

        } catch (emailError) {
            console.error('Email sending failed:', emailError);
            await user.findByIdAndDelete(newUser._id);
            return res.status(500).json({
                success: false,
                message: "Failed to send OTP email. Please try again."
            });
        }

    } catch (error) {
        console.error('Registration error:', error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

// ✅ Verify OTP
export const verifyOtp = async (req, res) => {
    try {
        const { email, otp } = req.body;

        if (!email || !otp) {
            return res.json({ success: false, message: "Email and OTP are required" });
        }

        const userData = await user.findOne({ email });
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        if (userData.otp !== otp) {
            return res.json({ success: false, message: "Invalid OTP" });
        }

        if (userData.otpExpiry < new Date()) {
            return res.json({ success: false, message: "OTP expired" });
        }

        userData.isVerified = true;
        userData.otp = undefined;
        userData.otpExpiry = undefined;

        await userData.save();

        const token = jwt.sign({ id: userData._id }, process.env.JWT_SECRET, {
          expiresIn: "7d",
        })

        return res.json({ 
          success: true,
          message: "Email verified successfully",
          token,
          user
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

// ✅ Resend OTP
export const resendOtp = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.json({ success: false, message: "Email is required" });
        }

        const userData = await user.findOne({ email });
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        if (userData.isVerified) {
            return res.json({ success: false, message: "User already verified" });
        }

        const otp = crypto.randomInt(100000, 999999).toString();
        const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

        userData.otp = otp;
        userData.otpExpiry = otpExpiry;

        await userData.save();

        try {
            await transporter.sendMail({
                from: process.env.BREVO_USER,
                to: email,
                subject: "Your new OTP",
                html: `<p>Your OTP is <b>${otp}</b>. It will expire in 10 minutes.</p>`,
            });

            console.log(`New OTP sent successfully to ${email}: ${otp}`);
            return res.json({ success: true, message: "New OTP sent to email" });

        } catch (emailError) {
            console.error('Email sending failed:', emailError);
            return res.status(500).json({
                success: false,
                message: "Failed to send OTP email. Please try again."
            });
        }

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

// ✅ Login
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.json({ success: false, message: "Email and password are required" });
        }

        const userData = await user.findOne({ email });
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, userData.password);
        if (!isMatch) {
            return res.json({ success: false, message: "Invalid credentials" });
        }

        if (!userData.isVerified) {
            return res.json({ success: false, message: "Please verify your email first" });
        }

        const token = jwt.sign({ id: userData._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        return res.json({
            success: true,
            message: "Login successful",
            token,
            user: { id: userData._id, name: userData.name, email: userData.email },
        });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};