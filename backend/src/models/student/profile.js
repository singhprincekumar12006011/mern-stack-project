import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    enrollmentNumber: {
      type: String,
      required: true,
      unique: true,
    },
    personalDetails: {
      firstName: {
        type: String,
        required: true,
        trim: true,
      },
      lastName: {
        type: String,
        required: true,
        trim: true,
      },
      gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true,
      },
      dob: {
        type: Date,
        required: true,
      },
      guardian: {
        fatherName: { type: String, required: true },
        fatherOccupation: { type: String, required: true },
        fatherPhone: { type: String, required: true },
        motherName: { type: String, required: true },
        motherOccupation: { type: String, required: true },
        motherPhone: { type: String, required: true },
      },
      bloodGroup: {
        type: String,
        required: true,
      },
      nationality: {
        type: String,
        required: true,
      },
      profilePic: {
        type: String,
        required: true,
      },
    },
    contactDetails: {
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
      },
      phone: {
        type: String,
        required: true,
        unique: true,
        match: [/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"],
      },
      permanentAddress: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true },
        zipCode: { type: String, required: true },
      },
      currentAddress: {
        street: { type: String, default: "" },
        city: { type: String, default: "" },
        state: { type: String, default: "" },
        country: { type: String, default: "" },
        zipCode: { type: String, default: "" },
      },
    },

    education: [
      {
        schoolName: { type: String, required: true },
        degree: { type: String, required: true },
        fieldOfStudy: { type: String, required: true },
        board: { type: String, required: true },
        grade: {
          type: {
            type: String,
            enum: ["CGPA", "Percentage"],
            required: true,
          },
          value: {
            type: Number,
            required: true,
          },
        },
        totalMarks: { type: Number, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date },
      },
    ],
    documents: {
      aadhar: {
        type: String,
        required: true,
      },
      aadharPhoto: {
        type: String,
        required: true,
      },
      pan: {
        type: String,
        required: true,
      },
      panPhoto: {
        type: String,
        required: true,
      },
      passport: {
        type: String,
      },
      passportPhoto: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);
export default Student;
