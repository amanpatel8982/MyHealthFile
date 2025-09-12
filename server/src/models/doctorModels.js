import mongoose  from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    // Personal & Account Info
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      // unique: true,
      // lowercase: true,
      // trim: true,
      // match: [
      //   /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      //   'Please fill a valid email address',
      // ],
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      // unique: true,
      // trim: true,
    },
  
    password: {
      type: String,
      required: [true, 'Password is required'],
      // minlength: 6,
    },
    dob: {
      type: Date,
      required: [true, 'Date of birth is required'],
    },
    gender: {
      type: String,
      required: [true, 'Gender is required'],
      // enum: ['Male', 'Female', 'Other'],
    },
    role: {
      type: String,
      // default: 'Doctor',
    },
    
    // Professional Details
    specialization: {
      type: String,
    
    },
    experience: {
      type: Number,
     
    },
    registrationNumber: {
      type: String,
    
      // unique: true,
    },
    clinic: {
      type: String,
    },

    // Address Details
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    pincode: {
      type: String,
    },

    // Identity
    aadharNumber: {
        type: String,
     
        // unique: true,
    },

    profilePic: {
      type: String, // URL from Cloudinary or path on server
    },
    aadhar: {
      type: String, // URL or path
    },
    pan: {
      type: String, // URL or path
    },
    license: {
      type: String, // URL or path
   
    },

    // Account Status for Admin Verification
   
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;