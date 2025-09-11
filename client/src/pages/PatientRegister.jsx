import { useState } from "react";
import { motion } from "framer-motion";
import { FaUserPlus } from "react-icons/fa";
import api from "../config/api"; // Make sure this path is correct

export default function PatientRegister() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    conditions: "",
    allergies: "",
    medications: "",
    emergencyName: "",
    emergencyRelation: "",
    emergencyPhone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Form Data:", formData);
    try {
      // Your API call to register the patient
      await api.post("/patient/register", formData);
      alert("Patient Registered Successfully! 🎉");
      // Optionally reset form or redirect user
    } catch (error) {
      console.error("Registration Error:", error);
      alert("Registration Failed! Please try again.");
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
          <FaUserPlus /> Patient Registration
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
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
                  className="border rounded-lg p-3 text-gray-500"
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
                <select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={handleChange}
                  className="border rounded-lg p-3"
                >
                  <option value="">Select Blood Group</option>
                  <option>A+</option><option>A-</option>
                  <option>B+</option><option>B-</option>
                  <option>O+</option><option>O-</option>
                  <option>AB+</option><option>AB-</option>
                </select>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Contact & Account Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="border rounded-lg p-3"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border rounded-lg p-3"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Create Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border rounded-lg p-3"
                />
                 <textarea
                  name="address"
                  placeholder="Full Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="border rounded-lg p-3 md:col-span-2"
                  rows="3"
                ></textarea>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Medical Details
              </h2>
              <div className="grid grid-cols-1 gap-4">
                <input
                  name="conditions"
                  placeholder="Existing Medical Conditions (e.g., Diabetes, Hypertension)"
                  value={formData.conditions}
                  onChange={handleChange}
                  className="border rounded-lg p-3"
                />
                <input
                  name="allergies"
                  placeholder="Allergies (e.g., Peanuts, Penicillin)"
                  value={formData.allergies}
                  onChange={handleChange}
                  className="border rounded-lg p-3"
                />
                <input
                  name="medications"
                  placeholder="Current Medications"
                  value={formData.medications}
                  onChange={handleChange}
                  className="border rounded-lg p-3"
                />
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Emergency Contact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  name="emergencyName"
                  placeholder="Contact Name"
                  value={formData.emergencyName}
                  onChange={handleChange}
                  className="border rounded-lg p-3"
                />
                <input
                  name="emergencyRelation"
                  placeholder="Relation (e.g., Spouse, Parent)"
                  value={formData.emergencyRelation}
                  onChange={handleChange}
                  className="border rounded-lg p-3"
                />
                <input
                  type="tel"
                  name="emergencyPhone"
                  placeholder="Contact Phone"
                  value={formData.emergencyPhone}
                  onChange={handleChange}
                  className="border rounded-lg p-3"
                />
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-xl font-semibold text-gray-700 mb-4">
                Review & Submit
              </h2>
              <p className="text-gray-600">
                Please review your information before submitting. Click the Submit
                button to complete your registration.
              </p>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            {step > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-400"
              >
                ← Previous
              </button>
            ) : (
              // Empty div to keep "Next" button on the right
              <div></div>
            )}
            
            {step < 5 && (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
              >
                Next →
              </button>
            )}

            {step === 5 && (
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
              >
                Submit Registration
              </button>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
}