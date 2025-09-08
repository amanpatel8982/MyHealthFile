import React from "react";
import {
  FiHome,
  FiUsers,
  FiFileText,
  FiBell,
  FiMessageSquare,
  FiCalendar,
  FiBarChart2,
  FiHelpCircle,
  FiSettings,
} from "react-icons/fi";

const Sidebar = ({ setActive, active }) => {
  const menu = [
    { key: "dashboard", label: "Dashboard", icon: <FiHome /> },
    { key: "patient", label: "Patients", icon: <FiUsers /> },
    { key: "prescriptions", label: "Prescriptions", icon: <FiFileText /> },
    { key: "notifications", label: "Notifications", icon: <FiBell /> },
    { key: "chat", label: "Chat", icon: <FiMessageSquare /> },
    { key: "appointments", label: "Appointments", icon: <FiCalendar /> },
    { key: "reports", label: "Reports", icon: <FiBarChart2 /> },
    { key: "support", label: "Support", icon: <FiHelpCircle /> },
    { key: "settings", label: "Settings", icon: <FiSettings /> },
  ];

  return (
    <div className="bg-blue-950 text-white h-screen w-64 flex flex-col  shadow-lg">
      {/* Logo */}
      <div className="p-6 text-2xl font-bold text-center border-b border-blue-800">
        Doctor<span className="text-indigo-400">Panel</span>
      </div>

      {/* Menu */}
      <ul className="flex-1 p-4 space-y-3">
        {menu.map((item) => (
          <li key={item.key}>
            <button
              onClick={() => setActive(item.key)}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-300 
                ${
                  active === item.key
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-indigo-500 hover:text-white"
                }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="p-4 border-t border-blue-800 text-center text-sm text-gray-400">
        © 2025 Doctorly
      </div>
    </div>
  );
};

export default Sidebar;
