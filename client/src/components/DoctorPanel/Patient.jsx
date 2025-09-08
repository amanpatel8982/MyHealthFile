import React, { useState } from "react";
import { FiSearch, FiEye, FiEdit, FiTrash2 } from "react-icons/fi";

const Patient = () => {
  const [patients] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      age: 32,
      gender: "Male",
      contact: "9876543210",
      condition: "Diabetes",
      lastVisit: "2025-09-01",
      totalVisits: 5,
      status: "Under Treatment",
    },
    {
      id: 2,
      name: "Priya Verma",
      age: 28,
      gender: "Female",
      contact: "9123456780",
      condition: "Fever",
      lastVisit: "2025-08-20",
      totalVisits: 2,
      status: "Recovered",
    },
    {
      id: 3,
      name: "Arjun Patel",
      age: 45,
      gender: "Male",
      contact: "9988776655",
      condition: "Hypertension",
      lastVisit: "2025-09-05",
      totalVisits: 8,
      status: "Critical",
    },
  ]);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Patients</h1>
        <div className="relative w-72">
          <FiSearch className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search patients..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <p className="text-gray-500">Total Patients</p>
          <h3 className="text-2xl font-bold">{patients.length}</h3>
        </div>
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <p className="text-gray-500">Recovered</p>
          <h3 className="text-2xl font-bold">
            {patients.filter((p) => p.status === "Recovered").length}
          </h3>
        </div>
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <p className="text-gray-500">Critical Cases</p>
          <h3 className="text-2xl font-bold">
            {patients.filter((p) => p.status === "Critical").length}
          </h3>
        </div>
      </div>

      {/* Patients Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-indigo-600 text-white text-left">
              <th className="p-3">Name</th>
              <th className="p-3">Age</th>
              <th className="p-3">Gender</th>
              <th className="p-3">Contact</th>
              <th className="p-3">Condition</th>
              <th className="p-3">Last Visit</th>
              <th className="p-3">Total Visits</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient.id} className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">{patient.name}</td>
                <td className="p-3">{patient.age}</td>
                <td className="p-3">{patient.gender}</td>
                <td className="p-3">{patient.contact}</td>
                <td className="p-3">{patient.condition}</td>
                <td className="p-3">{patient.lastVisit}</td>
                <td className="p-3 text-center">{patient.totalVisits}</td>
                <td
                  className={`p-3 font-semibold ${
                    patient.status === "Recovered"
                      ? "text-green-600"
                      : patient.status === "Critical"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {patient.status}
                </td>
                <td className="p-3 flex gap-3">
                  <button className="text-blue-600 hover:text-blue-800">
                    <FiEye />
                  </button>
                  <button className="text-green-600 hover:text-green-800">
                    <FiEdit />
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patient;
