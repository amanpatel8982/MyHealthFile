import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    // Personal Information
    fullName: { type: String, required: true },
    dob: { type: Date, required: true }, // You can change to Date if needed
    gender: { type: String, required: true },
    bloodGroup: { type: String, required: true },

    // Contact & Account Details
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },

    // Medical Details
    conditions: { type: String, required: true },
    allergies: { type: String, required: true },
    medications: { type: String, required: true },

    // Emergency Contact
    emergencyName: { type: String, required: true },
    emergencyRelation: { type: String, required: true },
    emergencyPhone: { type: String, required: true },
  },
  { timestamps: true }
);

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
