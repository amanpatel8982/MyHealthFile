import express from "express";
import { registerDoctor } from "../controllers/doctorController.js";
//import upload from "../middlewares/multerConfig.js"; // multer config
import multer from "multer";

const router = express.Router();

const upload  = multer();

// multiple file fields handle karne ke liye
router.post(
  "/register",
  upload.fields([
    { name: "profilePic", maxCount: 1 },
    { name: "aadhar", maxCount: 1 },
    { name: "pan", maxCount: 1 },
    { name: "license", maxCount: 1 },
  ]),
  registerDoctor
);

export default router;
