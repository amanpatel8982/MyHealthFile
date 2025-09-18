import express from 'express';
import { registerPatient , Login} from '../controllers/patientController.js';


const router = express.Router();

router.post("/register" , registerPatient);
router.post("/login",Login);


export default  router;

