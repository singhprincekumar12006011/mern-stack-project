import express from "express";
import {
  createAdmission,
  getAdmission,
  deleteAdmission,
  updateAdmission,
} from "../controllers/admissionStudentController.js";

const router = express.Router();

router.post("/", createAdmission).get("/", getAdmission);
router.delete("/:id", deleteAdmission).put("/:id", updateAdmission);


export default router;