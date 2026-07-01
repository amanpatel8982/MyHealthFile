import Patient from "../models/patientModels.js";
import Doctor from "../models/doctorModels.js";
import bcrypt from "bcryptjs";
import genToken from "../utils/auth.js";

export const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Search in Patient collection
    let user = await Patient.findOne({ email });
    let role = "PATIENT";

    // If not found, search in Doctor collection
    if (!user) {
      user = await Doctor.findOne({ email });
      role = "DOCTOR";
    }

    // User not found
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not registered",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    // Generate JWT Token
    const token = genToken(user._id, res);

    // Send response
    res.status(200).json({
      success: true,
      message: `Welcome Back ${user.fullName}`,
      token,
      user: {
        ...user.toObject(),
        role,
      },
    });

  } catch (error) {
    next(error);
  }
};