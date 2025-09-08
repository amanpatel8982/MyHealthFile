import React from "react";
import { FiFileText, FiUser, FiCalendar, FiDownload } from "react-icons/fi";

const Reports = () => {
  const reports = [
    {
      id: 1,
      patient: "John Doe",
      report: "Blood Test",
      date: "2025-09-05",
      status: "Available",
    },
    {
      id: 2,
      patient: "Alice Smith",
      report: "X-Ray Chest",
      date: "2025-09-03",
      status: "Pending",
    },
    {
      id: 3,
      patient: "Robert Brown",
      report: "MRI Brain",
      date: "2025-08-29",
      status: "Reviewed",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "text-green-600 bg-green-100";
      case "Pending":
        return "text-yellow-600 bg-yellow-100";
      case "Reviewed":
        return "text-blue-600 bg-blue-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      <p className="text-gray-600 mb-6">
        View and manage all patient medical reports here.
      </p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border rounded-lg overflow-hidden shadow">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">
                <FiUser className="inline mr-1" /> Patient
              </th>
              <th className="px-4 py-2 text-left">
                <FiFileText className="inline mr-1" /> Report
              </th>
              <th className="px-4 py-2 text-left">
                <FiCalendar className="inline mr-1" /> Date
              </th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r, index) => (
              <tr
                key={r.id}
                className={`border-t ${index % 2 === 0 ? "bg-gray-50" : ""}`}
              >
                <td className="px-4 py-2">{r.patient}</td>
                <td className="px-4 py-2">{r.report}</td>
                <td className="px-4 py-2">{r.date}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 text-sm rounded-full font-medium ${getStatusColor(
                      r.status
                    )}`}
                  >
                    {r.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {r.status === "Available" ? (
                    <button className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-1 rounded-lg shadow hover:bg-indigo-700 transition">
                      <FiDownload /> Download
                    </button>
                  ) : (
                    <button className="bg-gray-300 text-gray-700 px-3 py-1 rounded-lg cursor-not-allowed">
                      Not Available
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Upload New Report */}
      <div className="mt-6">
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
          + Upload Report
        </button>
      </div>
    </div>
  );
};

export default Reports;
