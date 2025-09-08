import React from "react";
import { FiBell, FiCheckCircle, FiAlertCircle, FiCalendar } from "react-icons/fi";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: "appointment",
      message: "New appointment booked with John Doe",
      time: "10 mins ago",
      icon: <FiCalendar className="text-indigo-600" />,
    },
    {
      id: 2,
      type: "report",
      message: "Patient Alice Smith’s blood test report is ready",
      time: "1 hour ago",
      icon: <FiCheckCircle className="text-green-600" />,
    },
    {
      id: 3,
      type: "reminder",
      message: "Follow-up with Robert Brown scheduled tomorrow",
      time: "5 hours ago",
      icon: <FiBell className="text-yellow-500" />,
    },
    {
      id: 4,
      type: "alert",
      message: "Critical alert: Emergency patient in ICU",
      time: "1 day ago",
      icon: <FiAlertCircle className="text-red-600" />,
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Notifications</h1>
      <p className="text-gray-600 mb-6">
        Stay updated with the latest alerts, reminders, and updates.
      </p>

      <div className="space-y-4">
        {notifications.map((note) => (
          <div
            key={note.id}
            className="flex items-start gap-4 p-4 bg-white rounded-xl shadow hover:shadow-md transition"
          >
            {/* Icon */}
            <div className="text-2xl">{note.icon}</div>

            {/* Message */}
            <div>
              <p className="text-gray-800 font-medium">{note.message}</p>
              <p className="text-gray-500 text-sm">{note.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Clear All Button */}
      <div className="mt-6">
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition">
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Notifications;
