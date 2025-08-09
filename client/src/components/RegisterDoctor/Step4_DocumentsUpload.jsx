import React from 'react';
import { useNavigate } from 'react-router-dom';

const Step4_DocumentUpload = ({ formData, setFormData, handleNext, handleBack }) => {
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-center text-blue-700">Step 4: Document Uploads</h2>

      <div className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Aadhar Card (PDF or Image)</label>
          <input
            type="file"
            name="aadhar"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="w-full"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">PAN Card (PDF or Image)</label>
          <input
            type="file"
            name="pan"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="w-full"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Medical License Certificate</label>
          <input
            type="file"
            name="license"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="w-full"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Profile Picture</label>
          <input
            type="file"
            name="profilePic"
            accept=".jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
         onClick={() => navigate("/register/doctor/step-3")}
          className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
        >
          Back
        </button>

        <button
          onClick={() => navigate("/register/doctor/step-5")}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step4_DocumentUpload;
