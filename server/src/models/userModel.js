import mongoose from "mongoose";


  const userSchema = new mongoose.Schema({
    fullName:{type: String , required: true},
    dob:{type: String , required: true},
    gender:{type: String , required: true},
    bloodGroup:{type: String , required: true},
    phone:{type: String , required: true},
    email:{type: String , required: true, unique:true},
    address:{type: String , required: true},
    conditions:{type: String , required: true},
    allergies:{type: String , required: true},
    medications:{type: String , required: true},
    emergencyName:{type: String , required: true},
    emergencyRelation:{type: String , required: true},
    emergencyPhone:{type: String , required: true},
  },
  {timestamps:true}
);

const User = mongoose.model("User", userSchema);// User name ka mongoodb ka collection  bnega

export default User;

