import Doctor from "../models/doctorModels";
import bcrypt from "bcryptjs";

export const registerDoctor = async (req, res) => {
    const {
        fullName,
        dob,
        email,
        phone,
        password,
        gender,
        specialization,
        experience,
        registrationNumber,
        clinic,
        address,
        city,
        pincode,
        aadharNumber,
    } = req.body;

    // Validate Required Fields
    if (!fullName || !dob || !email || !phone || !password || !gender || !specialization || !experience || !registrationNumber || !clinic || !address || !city || !pincode || !aadharNumber) {
        return res.status(400).json({ message: "Please fill all required fields." });
    }

    try {
        // Check if Doctor Already Exists
        const existingDoctor = await Doctor.findOne({ email });
        if (existingDoctor) {
            return res.status(400).json({ message: "Doctor with this email already exists." });
        }

        // Hash Password
        
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create New Doctor
        const newDoctor = await Doctor.create({
            fullName,
            dob,
            email,
            phone,
            password: hashedPassword,
            gender,
            specialization,
            experience,
            registrationNumber,
            clinic,
            address,
            city,
            pincode,
            aadharNumber,
        });
        res.status(201).json({ message: "Doctor registered successfully", doctor: newDoctor });
    } catch (error) {
        res.status(500).json({ message: "Error registering doctor", error });
    }
};
