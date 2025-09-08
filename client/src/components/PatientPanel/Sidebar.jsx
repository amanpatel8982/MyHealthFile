import React from "react";
import {
  FiHome,
  FiFileText,
  FiBell,
  FiMessageSquare,
  FiCalendar,
  FiBarChart2,
  FiHelpCircle,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

const Sidebar = ({ setActive, active }) => {
  const menu = [
    { key: "dashboard", label: "Dashboard", icon: <FiHome /> },
    { key: "appointments", label: "Appointments", icon: <FiCalendar /> },
    { key: "chat", label: "Chat with Doctor", icon: <FiMessageSquare /> },
    { key: "reports", label: "My Reports", icon: <FiBarChart2 /> },
    { key: "prescriptions", label: "Prescriptions", icon: <FiFileText /> },
    { key: "notifications", label: "Notifications", icon: <FiBell /> },
    { key: "support", label: "Support", icon: <FiHelpCircle /> },
    { key: "settings", label: "Settings", icon: <FiSettings /> },
  ];

  return (
    <div className="bg-green-900 text-white h-screen w-64 flex flex-col shadow-lg">
      {/* Logo */}
      <div className="p-6 text-2xl font-bold text-center border-b border-green-800">
        Patient<span className="text-green-400">Panel</span>
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
                    ? "bg-green-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-green-500 hover:text-white"
                }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>

      {/* Footer with Logout */}
      <div className="p-4 border-t border-green-800 text-center text-sm text-gray-300 flex flex-col gap-2">
        <button
          onClick={() => setActive("logout")}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition"
        >
          <FiLogOut /> Logout
        </button>
        <span className="text-gray-400">© 2025 MyHealthFile</span>
      </div>
    </div>
  );
};

export default Sidebar;
