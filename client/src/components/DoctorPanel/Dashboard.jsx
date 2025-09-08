import React, { useState } from "react";
import Sidebar from "./Sidebar.jsx";
import { FiSearch } from "react-icons/fi";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const DoctorPanel = () => {
  const [active, setActive] = useState("dashboard");

  // Chart Data
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Patients",
        data: [300, 600, 800, 500, 700, 900, 650],
        borderColor: "#6366f1",
        backgroundColor: "rgba(99, 102, 241, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Hallo, Dr. Alice</h1>
            <p className="text-gray-500">Save the person who needs your help!</p>
          </div>
          <img
            src="https://via.placeholder.com/40"
            alt="profile"
            className="w-12 h-12 rounded-full border"
          />
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <FiSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Banner Card */}
        <div className="bg-gradient-to-r from-indigo-500 to-blue-400 text-white p-6 rounded-xl shadow mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">The next training schedule</h2>
            <p className="text-sm opacity-90">
              Medical training with Dr. Richard
            </p>
            <button className="mt-3 bg-white text-indigo-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100">
              Add to Schedule
            </button>
          </div>
          <div className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-bold shadow">
            Oct 12, 2022
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-gray-500">Total Patients</p>
            <h3 className="text-2xl font-bold">831</h3>
            <p className="text-green-500 text-sm">+25% than last week</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-gray-500">Recovered</p>
            <h3 className="text-2xl font-bold">627</h3>
            <p className="text-green-500 text-sm">+25% than last week</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <p className="text-gray-500">Operations</p>
            <h3 className="text-2xl font-bold">199</h3>
            <p className="text-orange-500 text-sm">+25% than last week</p>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-4">Statistics Patient</h2>
          <Line data={data} />
        </div>
      </div>
    </div>
  );
};

export default DoctorPanel;
