import { useState } from "react";
import { motion } from "framer-motion";
import { FaUserMd, FaFileUpload } from "react-icons/fa";

export default function DoctorRegister() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    aadharNumber: "",
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

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      dataToSend.append(key, value);
    });

    try {
      // Replace with your API call
      // await api.post("/doctor/register", dataToSend);
      alert("Doctor Registered Successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Registration Failed!");
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

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mt-6 mb-6">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all"
            style={{ width: `${(step / 5) * 100}%` }}
          ></div>
        </div>

        {/* Steps */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="border rounded-lg p-3"
                />
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="border rounded-lg p-3"
                />
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="border rounded-lg p-3"
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <input
                  name="aadharNumber"
                  placeholder="Aadhar Number"
                  value={formData.aadharNumber}
                  onChange={handleChange}
                  className="border rounded-lg p-3"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Professional Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="specialization"
                  placeholder="Specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  className="border rounded-lg p-3"
                />
                <input
                  name="experience"
                  placeholder="Experience (in years)"
                  value={formData.experience}
                  onChange={handleChange}
                  className="border rounded-lg p-3"
                />
                <input
                  name="registrationNumber"
                  placeholder="Medical Registration No."
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  className="border rounded-lg p-3"
                />
                <input
                  name="clinic"
                  placeholder="Clinic/Hospital Name"
                  value={formData.clinic}
                  onChange={handleChange}
                  className="border rounded-lg p-3"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border rounded-lg p-3"
                />
                <input
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border rounded-lg p-3"
                />
                <input
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="border rounded-lg p-3 md:col-span-2"
                />
                <input
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="border rounded-lg p-3"
                />
                <input
                  name="pincode"
                  placeholder="Pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className="border rounded-lg p-3"
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Document Uploads
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <FaFileUpload /> Upload Aadhar
                  <input type="file" name="aadhar" onChange={handleChange} hidden />
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <FaFileUpload /> Upload PAN
                  <input type="file" name="pan" onChange={handleChange} hidden />
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <FaFileUpload /> Upload License
                  <input type="file" name="license" onChange={handleChange} hidden />
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <FaFileUpload /> Upload Profile Pic
                  <input type="file" name="profilePic" onChange={handleChange} hidden />
                </label>
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Review & Submit
              </h2>
              <p className="text-gray-600">
                Please review your information and click Submit to complete your
                registration.
              </p>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                ← Previous
              </button>
            )}
            {step < 5 && (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg"
              >
                Next →
              </button>
            )}
            {step === 5 && (
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-lg"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
}
``