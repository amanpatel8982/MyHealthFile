import React from "react";
import { FiCalendar, FiClock, FiUser, FiCheckCircle, FiXCircle } from "react-icons/fi";

const Appointments = () => {
  const appointments = [
    {
      id: 1,
      patient: "John Doe",
      date: "2025-09-10",
      time: "10:30 AM",
      status: "Upcoming",
    },
    {
      id: 2,
      patient: "Alice Smith",
      date: "2025-09-06",
      time: "03:00 PM",
      status: "Completed",
    },
    {
      id: 3,
      patient: "Robert Brown",
      date: "2025-09-04",
      time: "12:00 PM",
      status: "Cancelled",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Upcoming":
        return "text-indigo-600 bg-indigo-100";
      case "Completed":
        return "text-green-600 bg-green-100";
      case "Cancelled":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Appointments</h1>
      <p className="text-gray-600 mb-6">
        Manage all patient appointments from here.
      </p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border rounded-lg overflow-hidden shadow">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left"><FiUser className="inline mr-1" /> Patient</th>
              <th className="px-4 py-2 text-left"><FiCalendar className="inline mr-1" /> Date</th>
              <th className="px-4 py-2 text-left"><FiClock className="inline mr-1" /> Time</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((a, index) => (
              <tr
                key={a.id}
                className={`border-t ${index % 2 === 0 ? "bg-gray-50" : ""}`}
              >
                <td className="px-4 py-2">{a.patient}</td>
                <td className="px-4 py-2">{a.date}</td>
                <td className="px-4 py-2">{a.time}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 text-sm rounded-full font-medium ${getStatusColor(
                      a.status
                    )}`}
                  >
                    {a.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {a.status === "Upcoming" ? (
                    <button className="bg-indigo-600 text-white px-3 py-1 rounded-lg shadow hover:bg-indigo-700 transition">
                      Reschedule
                    </button>
                  ) : a.status === "Completed" ? (
                    <button className="bg-green-600 text-white px-3 py-1 rounded-lg shadow hover:bg-green-700 transition">
                      View
                    </button>
                  ) : (
                    <button className="bg-red-500 text-white px-3 py-1 rounded-lg shadow hover:bg-red-600 transition">
                      Cancelled
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Appointment Button */}
      <div className="mt-6">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
          + Add Appointment
        </button>
      </div>
    </div>
  );
};

export default Appointments;
