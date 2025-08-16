import React from 'react';
import { useState} from "react";
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
    <>
     <div className="flex">
        <Sidebar setActive={setActive}  className="h-[90vh] w-[20vw]"/>
        <div className="w-full ">
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

    </>
  );
}

export default DoctorPanel;


