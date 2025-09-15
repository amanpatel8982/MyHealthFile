import Doctor from "../models/doctorModels.js";
import bcrypt from "bcryptjs";

export const registerDoctor = async (req, res) => {
  try {
    const {
      fullName,
      dob,
      email,
      phone,
      password,
      gender,
      role,
      specialization,
      experience,
      registrationNumber,
      clinic,
      address,
      city,
      pincode,
      aadharNumber,
    } = req.body;

    const files = req.files || {};
    const profilePic = files.profilePic?.[0]?.path || null;
    const aadhar = files.aadhar?.[0]?.path || null;
    const pan = files.pan?.[0]?.path || null;
    const license = files.license?.[0]?.path || null;

    // ✅ Required field validation based on schema
    if (!fullName || !dob || !email || !phone || !password || !gender) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    // ✅ Check for existing doctor
    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(400).json({ message: "Doctor with this email already exists." });
    }

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create doctor
    const newDoctor = await Doctor.create({
      fullName,
      dob,
      email,
      phone,
      password: hashedPassword,
      gender,
      role,
      specialization,
      experience,
      registrationNumber,
      clinic,
      address,
      city,
      pincode,
      aadharNumber,
      profilePic,
      aadhar,
      pan,
      license,
    });

    return res.status(201).json({
      message: "Doctor registered successfully ✅",
      doctor: newDoctor,
    });
  } catch (error) {
    console.error("❌ RegisterDoctor Error:", error);
    return res.status(500).json({
      message: "Error registering doctor",
      error: error.message,
      stack: error.stack,
    });
  }
};
