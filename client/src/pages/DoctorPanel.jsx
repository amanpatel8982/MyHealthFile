import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/DoctorPanel/Sidebar.jsx";
import Chat from "../components/DoctorPanel/Chat.jsx";
import Dashboard from "../components/DoctorPanel/Dashboard.jsx";
import Notifications from "../components/DoctorPanel/Notifications.jsx";
import Patient from "../components/DoctorPanel/Patient.jsx";
import Prescriptions from "../components/DoctorPanel/Prescriptions.jsx";
import Appointments from "../components/DoctorPanel/Appointments.jsx";
import Reports from "../components/DoctorPanel/Reports.jsx";
import Settings from "../components/DoctorPanel/Settings.jsx";
import Support from "../components/DoctorPanel/Support.jsx";

const DoctorPanel = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-[#F8FAFF]">
      {/* Sidebar */}
      <Sidebar setActive={setActive} active={active} className="h-screen w-[18vw] bg-gradient-to-b from-blue-600 to-blue-800 text-white shadow-lg" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="flex items-center justify-between bg-white shadow px-6 py-4 sticky top-0 z-10">
          <h2 className="text-xl font-semibold text-gray-700 capitalize">
            {active}
          </h2>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="relative p-2 rounded-full hover:bg-gray-100">
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              🔔
            </button>
            <button className="relative p-2 rounded-full hover:bg-gray-100">
              ✉️
            </button>
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-blue-500">
              <img
                src="https://via.placeholder.com/150"
                alt="Doctor Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {active === "chat" && <Chat />}
          {active === "dashboard" && <Dashboard />}
          {active === "notifications" && <Notifications />}
          {active === "patient" && <Patient />}
          {active === "prescriptions" && <Prescriptions />}
          {active === "appointments" && <Appointments />}
          {active === "reports" && <Reports />}
          {active === "settings" && <Settings />}
          {active === "support" && <Support />}
        </div>
      </div>
    </div>
  );
};

export default DoctorPanel;
