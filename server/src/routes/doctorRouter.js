import express from "express";
import { registerDoctor } from "../controllers/doctorController.js";

import multer from "multer";

const router = express.Router();

const upload  = multer();



const cpUpload = upload.fields([
  { name: 'aadhar', maxCount: 1 },
  { name: 'pan', maxCount: 1 },
  { name: 'license', maxCount: 1 },
  { name: 'profilePic', maxCount: 1 }
]);

router.post("/register", cpUpload, registerDoctor);

export default router;
