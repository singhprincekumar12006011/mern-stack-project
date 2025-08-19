import mongoose from "mongoose";

const userDetailSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Capitalized model name convention
      required: true,
      unique: true, // One detail record per user
      index: true, // Makes lookups faster
    },
    address: {
      type: String,
      required: true,
      trim: true, // Removes leading/trailing spaces
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    countryCode: {
      type: String,
      required: true,
      trim: true,
      uppercase: true, // Always store like '+91'
    },
    age: {
      type: Number,
      required: true,
      min: 1,
      max: 120,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"],
    },
    height: {
      type: Number,
      required: true,
      min: 30, // cm
      max: 300,
    },
    weight: {
      type: Number,
      required: true,
      min: 1,
      max: 500,
    },
    plan: {
      type: String,
      required: true,
      enum: ["Basic", "Pro", "Standard", "Premium"],
    },
    expireOn: {
      type: Date,
      required: true,
    },
    joiningDate: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // ✅ Automatically adds createdAt & updatedAt
  }
);

export default mongoose.model("UserDetail", userDetailSchema);
