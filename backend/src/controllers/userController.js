import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import transporter from "../config/nodemailer.js";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  try {
    const { name, email, phone, password, role } = req.body;
    if (!name || !email || !phone || !password || !role) {
      return res.json({
        success: false,
        message: "All fields are required",
      });
    }
    const exist = await User.findOne({
      $or: [{ email: email }, { phone: phone }],
    });
    if (exist) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      role,
      status: "active",
    });

    await newUser.save();
    res.json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (!users) {
      return res.json({
        success: false,
        message: "No data found",
      });
    }
    res.json({
      success: true,
      message: "Users fetched successfully",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }
    res.json({
      success: true,
      message: "User fetched successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }
    user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({
      success: true,
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }
    user = await User.findByIdAndDelete(req.params.id);
    res.json({
      success: true,
      message: "User deleted successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const changePassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.json({
        success: false,
        message: "Please provide your registered email",
      });
    }

    const exist = await User.findOne({ email });
    if (!exist) {
      return res.json({ success: false, message: "User not found" });
    }

    // Generate OTP
    const otp = crypto.randomInt(100000, 999999).toString();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

    // Save OTP
    exist.otp = otp;
    exist.otpExpiry = otpExpiry;
    await exist.save();

    // Send email
    await transporter.sendMail({
      from: "princetn2002@gmail.com",
      to: email,
      subject: "Password Reset OTP",
      html: `<h1>Your OTP for password reset is: ${otp}</h1>`,
    });

    console.log(`OTP sent successfully to ${email}: ${otp}`);
    return res.json({
      success: true,
      message: "OTP sent to email. Please verify.",
    });
  } catch (error) {
    console.error("Error in changePassword:", error);
    res.json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const verifyPasswordOTP = async (req, res) => {
  try {
    const { email, otp, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    if (user.otp !== otp) {
      return res.json({
        success: false,
        message: "Invalid OTP",
      });
    }

    if (user.otpExpiry < Date.now()) {
      return res.json({
        success: false,
        message: "OTP expired",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.otp = undefined;
    user.otpExpiry = undefined;

    await user.save();

    return res.json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // 2. Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // 3. Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // 4. Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // 5. Send response
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      role: user.role,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};