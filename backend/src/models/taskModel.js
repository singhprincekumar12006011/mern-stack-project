import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    date : {
        type : Date,
        required :true
    },
    type : {
        type : String,
        required : true
    },
    link : {
        type : String
    },
    description : {
        type : String,
        required : true
    },
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    createdFor : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    remarks : {
        type : String,
    },
    reminder : {
        type : Date
    }
}, {timestamps: true })


const Task = mongoose.model('Task', taskSchema);
export default Task;