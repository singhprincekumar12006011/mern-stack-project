import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: ''
    },
    age: {
        type: Number,
        default: null
    },
    height: {
        type: Number, // in cm
        default: null
    },
    weight: {
        type: Number, // in kg
        default: null
    }
}, {
    timestamps: true
})


const Profile = mongoose.model("Profile", profileSchema);
export default Profile;