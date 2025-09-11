import Patient from "../models/patientModels.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const registerPatient = async (req, res) => {
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
        emergencyPhone
    } = req.body;

    const exist = await Patient.findOne({ email });
    if (exist) {
        return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
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
            emergencyPhone
        });

        res.status(201).json({ message: "Patient registered successfully", patient: newPatient });
    } catch (error) {
        res.status(500).json({ message: "Error registering patient", error });
    }
};
