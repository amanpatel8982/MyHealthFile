import { useState } from "react";
import { motion } from "framer-motion";
// Note: Make sure you have a working `api.js` file at this path
import api from "../config/api"; 
// Note: Make sure you have `react-icons` installed (`npm install react-icons`)
import { FaUserMd, FaFileUpload } from "react-icons/fa";

export default function DoctorRegistration() {
  const [step, setStep] = useState(1);

  // ✅ FIX 1: All string fields initialized to "" to prevent "uncontrolled" warning.
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    aadharNumber: "",
    password: "", // Added password to state
    specialization: "",
    experience: "",
    registrationNumber: "",
    clinic: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    aadhar: null,
    pan: null,
    license: null,
    profilePic: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // ✅ FIX 2: Validation Function to check required fields on each step
  const validateStep = () => {
    switch (step) {
      case 1:
        if (!formData.fullName || !formData.dob || !formData.gender || !formData.aadharNumber) {
          alert("Please fill all Personal Information fields.");
          return false;
        }
        return true;
      case 2:
        if (!formData.specialization || !formData.experience || !formData.registrationNumber) {
          alert("Please fill all Professional Details.");
          return false;
        }
        return true;
      case 3:
        if (!formData.email || !formData.phone || !formData.password || !formData.address || !formData.city || !formData.pincode) {
          alert("Please fill all Contact & Account Information fields.");
          return false;
        }
        return true;
      // case 4:
      //   if (!formData.profilePic || !formData.aadhar || !formData.pan || !formData.license) {
      //     alert("All document uploads (Profile Pic, Aadhar, PAN, License) are required.");
      //     return false;
      //   }
      //   return true;
      default:
        return true;
    }
  };

  const nextStep = () => {
    // Call validation before proceeding
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Form Data:", formData);
    
    // Final validation before submitting
    if (!validateStep()) return;

    const dataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      // Important: only append value if it's not null/undefined
      if (value) { 
        dataToSend.append(key, value);
      }
    });

    try {
      await api.post("/doctor/register", dataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      ;
      alert("Doctor Registered Successfully! Please wait for admin approval. 🎉");
    } catch (error) {
      console.error("Registration Error:", error);
      const errorMessage = error.response?.data?.message || "Registration Failed! Please check your details and try again.";
      alert(errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <motion.div
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl font-bold text-center text-blue-700 flex items-center justify-center gap-3">
          <FaUserMd /> Doctor Registration
        </h1>

        <div className="w-full bg-gray-200 rounded-full h-2 mt-6 mb-6">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{ width: `${(step / 5) * 100}%` }}
          ></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <motion.div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="border rounded-lg p-3" required />
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="border rounded-lg p-3 text-gray-500" required />
                <select name="gender" value={formData.gender} onChange={handleChange} className="border rounded-lg p-3" required>
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <input name="aadharNumber" placeholder="Aadhar Number" value={formData.aadharNumber} onChange={handleChange} className="border rounded-lg p-3" required />
              </div>
            </motion.div>
          )}

          {step === 2 && (
             <motion.div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Professional Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="specialization" placeholder="Specialization" value={formData.specialization} onChange={handleChange} className="border rounded-lg p-3" required />
                <input type="number" name="experience" placeholder="Experience (in years)" value={formData.experience} onChange={handleChange} className="border rounded-lg p-3" required />
                <input name="registrationNumber" placeholder="Medical Registration No." value={formData.registrationNumber} onChange={handleChange} className="border rounded-lg p-3" required />
                <input name="clinic" placeholder="Clinic/Hospital Name" value={formData.clinic} onChange={handleChange} className="border rounded-lg p-3" />
              </div>
            </motion.div>
          )}
          
          {step === 3 && (
            <motion.div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Contact & Account Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border rounded-lg p-3" required />
                <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="border rounded-lg p-3" required />
                <input type="password" name="password" placeholder="Create Password" value={formData.password} onChange={handleChange} className="border rounded-lg p-3" required minLength="6" />
                <input name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} className="border rounded-lg p-3" required />
                <textarea name="address" placeholder="Full Address" value={formData.address} onChange={handleChange} className="border rounded-lg p-3 md:col-span-2" rows="3" required></textarea>
                <input name="city" placeholder="City" value={formData.city} onChange={handleChange} className="border rounded-lg p-3 md:col-span-2" required />
              </div>
            </motion.div>
          )}

          {step === 4 && (
             <motion.div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Document Uploads</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <FileInput name="profilePic" label="Upload Profile Pic *" fileName={formData.profilePic?.name} onChange={handleChange} required />
                <FileInput name="aadhar" label="Upload Aadhar *" fileName={formData.aadhar?.name} onChange={handleChange} required />
                <FileInput name="pan" label="Upload PAN *" fileName={formData.pan?.name} onChange={handleChange} required />
                <FileInput name="license" label="Upload License *" fileName={formData.license?.name} onChange={handleChange} required />
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Review & Submit</h2>
              <p className="text-gray-600">Please review your information and click Submit to complete your registration.</p>
            </motion.div>
          )}

          <div className="flex justify-between mt-8">
            {step > 1 ? (<button type="button" onClick={prevStep} className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-400">← Previous</button>) : (<div></div>)}
            {step < 5 && (<button type="button" onClick={nextStep} className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">Next →</button>)}
            {step === 5 && (<button type="submit" className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700">Submit</button>)}
          </div>
        </form>
      </motion.div>
    </div>
  );
}

// Helper component for better file input UI
const FileInput = ({ name, label, fileName, onChange, required }) => (
  <label className="flex flex-col items-center justify-center p-4 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50">
    <FaFileUpload />
    <span className="text-blue-600 font-semibold">{label}</span>
    {fileName ? (<span className="text-green-500 text-sm mt-1">{fileName}</span>) : (<span className="text-gray-500 text-sm mt-1">No file chosen</span>)}
    <input type="file" name={name} onChange={onChange} hidden required={required} />
  </label>
);

