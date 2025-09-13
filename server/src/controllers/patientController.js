import Patient from "../models/patientModels.js";
import bcrypt from "bcryptjs";
import genToken from "../utils/auth.js";
import JWT from "jsonwebtoken";


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

export const LoginPatient = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("all fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const user = await User.findOne({ email });
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
