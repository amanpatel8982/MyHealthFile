import { FaUserMd, FaFileAlt, FaSignOutAlt, FaUserPlus, FaChartBar, FaCog } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navItems = [
    { icon: <FaChartBar />, label: "Dashboard", path: "/dashboard" },
    { icon: <FaUserPlus />, label: "Patients", path: "/patients" },
    { icon: <FaFileAlt />, label: "Documents", path: "/documents" },
    { icon: <FaUserMd />, label: "Profile", path: "/profile" },
    { icon: <FaCog />, label: "Settings", path: "/settings" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-gradient-to-b from-indigo-800 to-indigo-600 text-white shadow-xl flex flex-col">
      <div className="p-6 text-2xl font-bold tracking-wide border-b border-indigo-400">Doctor Panel</div>
      

      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-2 rounded-lg transition-all duration-200 hover:bg-indigo-500/80 ${
                    isActive ? "bg-indigo-500" : ""
                  }`
                }
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-md font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-4 py-4 border-t border-indigo-400">
        <button className="w-full flex items-center justify-start gap-3 px-4 py-2 rounded-lg hover:bg-red-500 transition duration-150">
          <FaSignOutAlt className="text-xl" />
          <span className="text-md font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
