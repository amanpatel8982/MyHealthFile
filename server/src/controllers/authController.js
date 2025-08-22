import User from "../models/userModel.js";
import bcrypt from "bcrypt";


export const PatientRegister = async (req, res, next)=> {
    try {
        const { fullName,
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
    emergencyPhone,} = req.body;

    if(
    !fullName ||
    !dob ||
    !gender ||
    !bloodGroup ||
    !phone ||
    !email ||
    !password||
    !address ||
    !conditions ||
    !allergies ||
    !medications ||
    !emergencyName ||
    !emergencyRelation ||
    !emergencyPhone
    )
    {
        const error = new Error("All fields are required");
        error.StatusCode = 400;
        return next(error);
    }

    const existingUser = await User.findOne({ email});
    if(existingUser){
        const error = new Error("Email already Registered.");
        error.StatusCode=409;
        return next(error);
    }

    const hashPassword = await bcrypt.hash(password,10);

    const newUser = await User.create({
    fullName,
    dob,
    gender,
    bloodGroup,
    phone,
    email,
    password:hashPassword,
    address,
    conditions,
    allergies,
    medications,
    emergencyName,
    emergencyRelation,
    emergencyPhone,
    });
    res.status(200).json({message: "User Registration Successful", data:newUser});
}
     catch (error)
    {
      next(error);        
    }
};