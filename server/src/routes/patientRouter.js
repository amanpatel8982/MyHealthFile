import express from "express";
import { PatientRegister } from "../controllers/authController.js";


const router = express.Router();


router.post("/register",PatientRegister);



export default router;