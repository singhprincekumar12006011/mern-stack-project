import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      unique: true,
    },
    password: { type: String, required: [true, "Password is required"] },
    role: {
      type: String,
      enum: ["student", "teacher", "admin"],
      required: [true, "Role is required"],
    },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    isVerified: { type: Boolean, default: false },
    otp: { type: String },
    otpExpiry: { type: Date }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
