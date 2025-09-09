import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, "Student name is required"] 
  },
  email: { 
    type: String, 
    required: [true, "Email is required"] 
  },
  phone: { 
    type: String, 
    required: [true, "Phone number is required"] 
  },
  address: { 
    type: String, 
    required: [true, "Address is required"] 
  },
  qualification: { 
    type: String, 
    required: [true, "Qualification is required"] 
  },
  program: { 
    type: String, 
    required: [true, "Program is required"] 
  }
}, { timestamps: true }); // adds createdAt & updatedAt automatically

const AdmissionStudent = mongoose.model("AdmissionStudent", studentSchema);

export default AdmissionStudent;
