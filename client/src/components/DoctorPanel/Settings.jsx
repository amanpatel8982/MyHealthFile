import React, { useState } from "react";
import {
  FiUser,
  FiLock,
  FiBell,
  FiGlobe,
  FiCreditCard,
  FiLogOut,
} from "react-icons/fi";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { key: "profile", label: "Profile", icon: <FiUser /> },
    { key: "account", label: "Account", icon: <FiGlobe /> },
    { key: "security", label: "Security", icon: <FiLock /> },
    { key: "notifications", label: "Notifications", icon: <FiBell /> },
    { key: "billing", label: "Billing", icon: <FiCreditCard /> },
    { key: "logout", label: "Logout", icon: <FiLogOut /> },
  ];

  return (
    <div className="flex gap-8">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-white shadow-xl rounded-2xl p-6">
        <h2 className="text-lg font-bold mb-4">⚙️ Settings</h2>
        <ul className="space-y-3">
          {tabs.map((tab) => (
            <li key={tab.key}>
              <button
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl font-medium transition 
                  ${
                    activeTab === tab.key
                      ? "bg-indigo-600 text-white shadow-md"
                      : "hover:bg-indigo-100 text-gray-700"
                  }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content */}
      <div className="flex-1 bg-white shadow-xl rounded-2xl p-8">
        {activeTab === "profile" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">👤 Profile Settings</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border px-4 py-3 rounded-lg"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full border px-4 py-3 rounded-lg"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Phone</label>
                <input
                  type="text"
                  placeholder="Enter phone"
                  className="w-full border px-4 py-3 rounded-lg"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Specialization</label>
                <input
                  type="text"
                  placeholder="Eg: Cardiologist"
                  className="w-full border px-4 py-3 rounded-lg"
                />
              </div>
              <div className="col-span-2">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700">
                  Save Profile
                </button>
              </div>
            </form>
          </div>
        )}

        {activeTab === "account" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">🌍 Account Settings</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block mb-1 font-medium">Language</label>
                <select className="w-full border px-4 py-3 rounded-lg">
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Spanish</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 font-medium">Timezone</label>
                <select className="w-full border px-4 py-3 rounded-lg">
                  <option>GMT +5:30 (India)</option>
                  <option>GMT +0 (UK)</option>
                  <option>GMT -5 (USA)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">🔐 Security Settings</h2>
            <form className="space-y-4 max-w-md">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full border px-4 py-3 rounded-lg"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full border px-4 py-3 rounded-lg"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full border px-4 py-3 rounded-lg"
              />
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700">
                Update Password
              </button>
            </form>
          </div>
        )}

        {activeTab === "notifications" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">🔔 Notifications</h2>
            <div className="space-y-4">
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked /> Email Notifications
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked /> SMS Alerts
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" /> Push Notifications
              </label>
            </div>
          </div>
        )}

        {activeTab === "billing" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">💳 Billing</h2>
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <p className="font-medium">Active Plan: Premium</p>
              <p className="text-sm text-gray-600">Next Billing: 15 Oct 2025</p>
            </div>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700">
              Update Payment Method
            </button>
          </div>
        )}

        {activeTab === "logout" && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">🚪 Logout</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to log out from Doctor Panel?
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg shadow hover:bg-red-700">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;
