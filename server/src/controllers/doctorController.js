import Doctor from "../models/doctorModels.js";
import bcrypt from "bcryptjs";
import genToken from "../utils/auth.js";

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

    
    if (!fullName || !dob || !email || !phone || !password || !gender) {
      return res.status(400).json({ message: "Missing required fields." });
    }

 
    const existingDoctor = await Doctor.findOne({ email });
    if (existingDoctor) {
      return res.status(400).json({ message: "Doctor with this email already exists." });
    }

   
    const hashedPassword = await bcrypt.hash(password, 10);

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

export const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("all fleids Required");
      error.statusCode = 400;
      return next(error);
    }

    const user = await Doctor.findOne({ email });
    if (!user) {
      const error = new Error("User Not Registered");
      error.statusCode = 400;
      return next(error);
    }

    const isVerified = await bcrypt.compare(password, user.password);// Password ko verify kr rha hai

    if (!isVerified) {
      const error = new Error("Invalid Username or Password");
      error.statusCode = 401;
      return next(error);
    }

    genToken(user._id, res); // Token generate kr rha hai aur response me bhej rha hai

    res
      .status(200)
      .json({ message: `Welcome Back ${user.fullName}`, data: user });
  } catch (error) {
    next(error);
  }
};

