import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserMd, FaUserInjured } from 'react-icons/fa';

const ChooseRole = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-200 to-white px-4 py-12">
      <div className="max-w-5xl relative bottom-8 w-full bg-white shadow-xl rounded-2xl p-8 md:p-14">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
          Create Your Account
        </h2>
        <p className="text-center text-gray-600 mb-12">Choose your role to continue</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Doctor Card */}
          <div
            onClick={() => navigate('/register-doctor')}
            className="cursor-pointer transition-all duration-300 transform hover:scale-105 bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl flex flex-col items-center text-center"
          >
            <FaUserMd className="text-blue-700 mb-4" size={50} />
            <h3 className="text-xl font-semibold text-blue-800">I am a Doctor</h3>
            <p className="text-sm text-gray-600 mt-2">Register to manage patients, schedule appointments, and access medical dashboards.</p>
          </div>

          {/* Patient Card */}
          <div
            onClick={() => navigate('/register-patient')}
            className="cursor-pointer transition-all duration-300 transform hover:scale-105 bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl flex flex-col items-center text-center"
          >
            <FaUserInjured className="text-green-700 mb-4" size={50} />
            <h3 className="text-xl font-semibold text-green-800">I am a Patient</h3>
            <p className="text-sm text-gray-600 mt-2">Register to book appointments, view medical history, and connect with doctors.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseRole;
