import Doctor from "../models/doctorModels.js";
import bcrypt from "bcryptjs";

export const registerDoctor = async (req, res) => {
  try {
    console.log("➡️ Incoming Body:", req.body);
    console.log("➡️ Incoming Files:", req.files);

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

    const files = req.files || {};
    const profilePicPath = files.profilePic?.[0]?.path || null;
    const aadharPath = files.aadhar?.[0]?.path || null;
    const panPath = files.pan?.[0]?.path || null;
    const licensePath = files.license?.[0]?.path || null;

    // ✅ Validation
  if (
  !fullName ||
  !dob ||
  !email ||
  !phone ||
  !password ||
  !gender ||
  !specialization ||
  !experience ||
  !registrationNumber ||
  !clinic ||
  !address ||
  !city ||
  !pincode ||
  !aadharNumber ||
  !profilePicPath ||
  !aadharPath ||
  !panPath ||
  !licensePath
) {
  return res
    .status(400)
    .json({ message: "Please fill all required fields." });
}


    // ✅ Check if Doctor Already Exists
    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res
        .status(400)
        .json({ message: "Doctor with this email already exists." });
    }

    // ✅ Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create Doctor
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
      profilePic: profilePicPath,
      aadhar: aadharPath,
      pan: panPath,
      license: licensePath,
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
      stack: error.stack, // 👈 debugging ke liye
    });
  }
};
