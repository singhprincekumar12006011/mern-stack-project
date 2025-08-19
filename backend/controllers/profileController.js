import Profile from '../models/profileModel.js';
import jwt from "jsonwebtoken";

const getUserIdFromToken = (req) => {
  try {
    // ✅ Correct way to read header
    const authHeader = req.headers["authorization"];
    if (!authHeader) return null;

    const token = authHeader.split(" ")[1];
    if (!token) return null;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.id;
  } catch (error) {
    console.error("Error in getUserIdFromToken:", error.message);
    return null; // just return null, don’t use res here
  }
};

export const saveProfile = async (req, res) => {
  try {
    const userId = getUserIdFromToken(req);

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized or token is missing",
      });
    }

    const { phoneNumber, address, age, height, weight } = req.body;

    let profile = await Profile.findOne({ userId });

    if (profile) {
      if (phoneNumber !== undefined) profile.phoneNumber = phoneNumber;
      if (address !== undefined) profile.address = address;
      if (age !== undefined) profile.age = age;
      if (height !== undefined) profile.height = height;
      if (weight !== undefined) profile.weight = weight;

      await profile.save();

      return res.json({
        success: true,
        message: "Profile Updated Successfully",
        profile,
      });
    } else {
      const newProfile = new Profile({
        userId,
        phoneNumber: phoneNumber || "",
        address: address || "",
        age: age || null,
        height: height || null,
        weight: weight || null,
      });

      await newProfile.save();

      return res.json({
        success: true,
        message: "Profile Created Successfully",
        profile: newProfile,
      });
    }
  } catch (error) {
    console.error("Save profile error:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getProfile = async (req, res) => {
  try {
    const userId = getUserIdFromToken(req);

    if (!userId) {
      return res.status(401).json({ success: false, message: "Invalid or missing token" });
    }

    const profile = await Profile.findOne({ userId });

    if (!profile) {
      return res.json({
        success: false,
        message: "Profile not found",
      });
    }

    return res.json({
      success: true,
      message: "Profile retrieved successfully",
      profile,
    });
  } catch (error) {
    console.error("Get profile error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
