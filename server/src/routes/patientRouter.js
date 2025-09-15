import express from 'express';

import { registerPatient } from '../controllers/patientController.js';
import { Protect } from '../middlewares/authmiddleware.js';


const router = express.Router();

router.post("/register" ,Protect, registerPatient);


export default  router;

