import express from 'express';

import { registerPatient ,LoginPatient } from '../controllers/patientController.js';
import { Protect } from '../middlewares/authmiddleware.js';


const router = express.Router();

router.post("/register" ,Protect, registerPatient);
router.post("/login" , LoginPatient);


export default  router;

