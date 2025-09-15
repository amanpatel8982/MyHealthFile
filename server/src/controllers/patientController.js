import Patient from "../models/patientModels.js";
import bcrypt from "bcryptjs";


export const registerPatient = async (req, res, next) => {
  try {
    const {
      fullName,
      dob,
      gender,
      bloodGroup,
      phone,
      email,
      password,
      address,
      conditions,
      allergies,
      medications,
      emergencyName,
      emergencyRelation,
      emergencyPhone,
    } = req.body;

    // Check if patient already exists
    const exist = await Patient.findOne({ email });
    if (exist) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new patient
    const newPatient = await Patient.create({
      fullName,
      dob,
      gender,
      bloodGroup,
      phone,
      email,
      password: hashedPassword,
      address,
      conditions,
      allergies,
      medications,
      emergencyName,
      emergencyRelation,
      emergencyPhone,
    });

    res.status(201).json({
      message: "Patient registered successfully",
      patient: newPatient,
    });
  } catch (error) {
    next(error); // consistent error handling
  }
};

