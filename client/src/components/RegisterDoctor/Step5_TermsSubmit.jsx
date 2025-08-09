import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step5_TermsAndSubmit = ({ formData, handleBack, handleSubmit }) => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const onSubmit = () => {
    if (!agreed) {
      alert('Please agree to the terms and conditions.');
      return;
    }
    handleSubmit(); // submit to backend or handle final logic
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-center text-blue-700">Step 5: Terms & Submit</h2>

      <div className="bg-gray-100 p-4 rounded text-sm text-gray-700 mb-4 h-48 overflow-y-scroll border border-gray-300">
        <p>
          By submitting this registration, I hereby confirm that the information provided is accurate to the best of my
          knowledge. I agree to share my professional credentials for verification. I understand that my profile is
          subject to review and approval by the admin.
        </p>
        <p className="mt-4">
          I also agree to comply with the platform’s privacy policies and terms of service. I take full responsibility
          for the authenticity of the documents provided.
        </p>
      </div>

      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="agree"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="agree" className="text-sm text-gray-700">
          I agree to the terms and conditions above.
        </label>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate("/register/doctor/step-4")}
          className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
        >
          Back
        </button>

        <button
          onClick={onSubmit}
          className={`px-6 py-2 rounded text-white ${
            agreed ? 'bg-green-600 hover:bg-green-700' : 'bg-green-400 cursor-not-allowed'
          }`}
          disabled={!agreed}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step5_TermsAndSubmit;
