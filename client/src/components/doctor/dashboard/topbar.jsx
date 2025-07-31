// doctor-panel/dashboard/topbar.jsx
import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="ml-64 bg-white shadow-md flex justify-between items-center px-6 py-4">
      <h1 className="text-xl font-semibold text-gray-800">Welcome, Doctor</h1>
      <div className="flex items-center space-x-6">
        <FaBell className="text-gray-600 text-xl cursor-pointer" />
        <div className="flex items-center space-x-2">
          <FaUserCircle className="text-2xl text-gray-600" />
          <span className="text-gray-700 font-medium">Dr. Patel</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
