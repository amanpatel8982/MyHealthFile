// src/pages/PatientRegistration.jsx
import React, { useState } from "react";

const PatientRegister = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    phone: "",
    email: "",
    address: "",
    conditions: "",
    allergies: "",
    medications: "",
    emergencyName: "",
    emergencyRelation: "",
    emergencyPhone: "",
   
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Patient Registered Successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-4xl p-10">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
          🏥 Patient Registration
        </h1>
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Personal Information */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Personal Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" name="fullName" placeholder="Full Name" className="border rounded-lg p-3 w-full" onChange={handleChange} />
              <input type="date" name="dob" className="border rounded-lg p-3 w-full" onChange={handleChange} />
              <select name="gender" className="border rounded-lg p-3 w-full" onChange={handleChange}>
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <select name="bloodGroup" className="border rounded-lg p-3 w-full" onChange={handleChange}>
                <option value="">Select Blood Group</option>
                <option>A+</option><option>A-</option><option>B+</option><option>B-</option>
                <option>O+</option><option>O-</option><option>AB+</option><option>AB-</option>
              </select>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <input type="tel" name="phone" placeholder="Phone Number" className="border rounded-lg p-3 w-full" onChange={handleChange} />
              <input type="email" name="email" placeholder="Email Address" className="border rounded-lg p-3 w-full" onChange={handleChange} />
              <textarea name="address" placeholder="Full Address" className="border rounded-lg p-3 w-full md:col-span-2" onChange={handleChange}></textarea>
            </div>
          </div>

          {/* Medical Details */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Medical Details</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <input type="text" name="conditions" placeholder="Existing Conditions" className="border rounded-lg p-3 w-full" onChange={handleChange} />
              <input type="text" name="allergies" placeholder="Allergies" className="border rounded-lg p-3 w-full" onChange={handleChange} />
              <input type="text" name="medications" placeholder="Current Medications" className="border rounded-lg p-3 w-full" onChange={handleChange} />
            </div>
          </div>

          {/* Emergency Contact */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Emergency Contact</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <input type="text" name="emergencyName" placeholder="Name" className="border rounded-lg p-3 w-full" onChange={handleChange} />
              <input type="text" name="emergencyRelation" placeholder="Relation" className="border rounded-lg p-3 w-full" onChange={handleChange} />
              <input type="tel" name="emergencyPhone" placeholder="Phone Number" className="border rounded-lg p-3 w-full" onChange={handleChange} />
            </div>
          </div>

         

          {/* Submit */}
          <div className="text-center">
            <button type="submit" className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-all">
              Register Patient
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default PatientRegister;
