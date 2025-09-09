import AdmissionStudent from "../models/admissionStudentModel.js"

export const createAdmission = async(req, res) => {
    try {
        const student = new AdmissionStudent(req.body);
        await student.save();
        res.json({
            success : true,
            message : "Student created successfully",
            data : student

        })
    } catch (error) {
        console.log(error);
        res.json({
            success : false,
            message : "Something went wrong",
            error : error.message
        })
    }
}

export const getAdmission = async(req, res) => {
    try {
        const student = await AdmissionStudent.find();
        res.json({
            success : true,
            message : "Students fetched successfully",
            data : student
        })
    } catch (error) {
        console.log(error);
        res.json({
            success : false,
            message : "Something went wrong",
            error : error.message
        })
    }
}


export const deleteAdmission = async(req, res) => {
    try {

        let student = await AdmissionStudent.findById(req.params.id);
        if(!student){
            return res.json({
                success : false,
                message : "Student not found"
            })
        }
        // const student = await AdmissionStudent.findByIdAndDelete(req.params.id);

        student = await AdmissionStudent.findByIdAndDelete(req.params.id);
        res.json({
            success : true,
            message : "Student deleted successfully",
            data : student
        })
    } catch (error) {
        console.log(error);
        res.json({
            success : false,
            message : "Something went wrong",
            error : error.message
        })
    }
}


export const updateAdmission = async(req, res) => {
    
}

