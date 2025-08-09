import React, { use } from 'react';
import { useNavigate } from 'react-router-dom';


const Step2_ProfessionalDetails = ({ formData, setFormData, handleNext, handleBack }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-14">
      <h2 className="text-2xl font-semibold mb-4 text-center text-blue-700">Step 2: Professional Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Specialization</label>
          <input
            type="text"
            placeholder="e.g. Cardiologist"
            value={formData?.specialization || ''}
            onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
            className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Years of Experience</label>
          <input
            type="number"
            placeholder="e.g. 5"
            value={formData?.experience || ''}
            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
            className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Medical Registration Number</label>
          <input
            type="text"
            placeholder="e.g. DMC123456"
            value={formData?.registrationNumber || ''}
            onChange={(e) => setFormData({ ...formData, registrationNumber: e.target.value })}
            className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Hospital/Clinic Name</label>
          <input
            type="text"
            placeholder="e.g. Apollo Hospital"
            value={formData?.clinic || ''}
            onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
            className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
        onClick={() => navigate("/register/doctor/step-1")}
          className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
        >
          Back
        </button>

        <button
          onClick={() => navigate("/register/doctor/step-3")}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2_ProfessionalDetails;
