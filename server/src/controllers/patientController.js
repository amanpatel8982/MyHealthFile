import Patient from "../models/patientModels.js";
import bcrypt from "bcryptjs";
import genToken from "../utils/auth.js";


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


export const Login = async (req, res, next) => {
  try{
    const {email, password} = req.body;

    if(!email || !password) 
    {
      const error = new error("all fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const user = await Patient.findOne({email});

    if(!user)
    {
      const error = new Error("User Not Registered");
      error.statusCode = 400;
      return next(error);
    }

    const isVerified = await bcrypt.compare(password, user.password);

    if(!isVerified)
    {
      const error = new Error("Invalid Username or password");
      error.statusCode = 401;
      return next(error);
    }

    genToken(user._id, res);

    res.status(200).json({message:`Welcome Back ${user.fullName}`, data: user});

  } catch (error)
  {
     next(error)
  }
};