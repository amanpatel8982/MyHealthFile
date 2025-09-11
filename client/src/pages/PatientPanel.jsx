import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Patient Panel Components
import Sidebar from "../components/PatientPanel/Sidebar.jsx";
import Chat from "../components/PatientPanel/Chat.jsx";
import Dashboard from "../components/PatientPanel/Dashboard.jsx";
import Notifications from "../components/PatientPanel/Notifications.jsx";
import Appointments from "../components/PatientPanel/Appointments.jsx";
import Reports from "../components/PatientPanel/Reports.jsx";
import Settings from "../components/PatientPanel/Settings.jsx";
import Support from "../components/PatientPanel/Support.jsx";

const PatientPanel = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-[#F8FAFF]">
      {/* Sidebar */}
      <Sidebar
        setActive={setActive}
        active={active}
        className="h-screen w-[18vw] bg-gradient-to-b from-green-600 to-green-800 text-white shadow-lg"
      />

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
              className="px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="relative p-2 rounded-full hover:bg-gray-100">
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              🔔
            </button>
            <button className="relative p-2 rounded-full hover:bg-gray-100">
              ✉️
            </button>
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-green-500">
              <img
                src="https://via.placeholder.com/150"
                alt="Patient Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {active === "dashboard" && <Dashboard />}
          {active === "appointments" && <Appointments />}
          {active === "chat" && <Chat />}
          {active === "reports" && <Reports />}
          {active === "notifications" && <Notifications />}
          {active === "settings" && <Settings />}
          {active === "support" && <Support />}
        </div>
      </div>
    </div>
  );
};

export default PatientPanel;
