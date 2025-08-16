import React from 'react';

const Sidebar = ({ setActive }) => {
  return (
    <div className="bg-blue-950 h-[87.5vh] w-[30vw] ms-17">
      <div className="text-white font-serif m-7 ">
        <ul className="text-2xl grid gap-6">
          <li onClick={() => setActive("dashboard")} className=" bg-indigo-600 text-white px-6 py-2 cursor-pointer rounded-full font-light   hover:scale-110 transition duration-300 ease-in-out shadow-md hover:shadow-lg">Dashboard</li>
          <li onClick={() => setActive("patient")} className=" bg-indigo-600 text-white px-6 py-2 cursor-pointer rounded-full font-light   hover:scale-110 transition duration-300 ease-in-out shadow-md hover:shadow-lg">Patient</li>
          <li onClick={() => setActive("prescriptions")} className=" bg-indigo-600 text-white px-6 py-2 cursor-pointer rounded-full font-light   hover:scale-110 transition duration-300 ease-in-out shadow-md hover:shadow-lg">Prescriptions</li>
          <li onClick={() => setActive("notifications")} className=" bg-indigo-600 text-white px-6 py-2 cursor-pointer rounded-full font-light   hover:scale-110 transition duration-300 ease-in-out shadow-md hover:shadow-lg">Notifications</li>
          <li onClick={() => setActive("chat")} className=" bg-indigo-600 text-white px-6 py-2 cursor-pointer rounded-full font-light   hover:scale-110 transition duration-300 ease-in-out shadow-md hover:shadow-lg">Chat</li>
          <li onClick={() => setActive("appointments")} className=" bg-indigo-600 text-white px-6 py-2 cursor-pointer rounded-full font-light   hover:scale-110 transition duration-300 ease-in-out shadow-md hover:shadow-lg">Appointments</li>
          <li onClick={() => setActive("reports")} className=" bg-indigo-600 text-white px-6 py-2 cursor-pointer rounded-full font-light   hover:scale-110 transition duration-300 ease-in-out shadow-md hover:shadow-lg">Reports</li>
          <li onClick={() => setActive("support")} className=" bg-indigo-600 text-white px-6 py-2 cursor-pointer rounded-full font-light   hover:scale-110 transition duration-300 ease-in-out shadow-md hover:shadow-lg">Support</li>
          <li onClick={() => setActive("settings")} className=" bg-indigo-600 text-white px-6 py-2 cursor-pointer rounded-full font-light   hover:scale-110 transition duration-300 ease-in-out shadow-md hover:shadow-lg">Settings</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
