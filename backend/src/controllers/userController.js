import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!email || !name || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }

    const isMatch = await User.findOne({ email });
    if (isMatch) {
      return res.status(400).json({
        success: false,
        message: "User already exist!",
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashPassword,
      role,
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "User created successfully!",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server error.",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ✅ Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }

    // ✅ Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }

    // ✅ Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid password!",
      });
    }

    // ✅ Generate JWT token
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // ✅ Send success response
    res.status(200).json({
      success: true,
      message: "Login successful!",
      token,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error!",
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const data = await User.find();
    if (!data) {
      return res.status(404).json({
        success: false,
        message: "No data found.",
      });
    }
    res.status(200).json({
      success: true,
      message: "Data get successfully!",
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // 1️⃣ Validate ID presence
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "User ID is required!",
      });
    }

    // 2️⃣ Check if user exists
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found!",
      });
    }

    // 3️⃣ Delete the user
    await User.findByIdAndDelete(id);

    // 4️⃣ Send success response
    return res.status(200).json({
      success: true,
      message: "User deleted successfully!",
    });

  } catch (error) {
    console.error("❌ Error deleting user:", error.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
      error: error.message,
    });
  }
};

