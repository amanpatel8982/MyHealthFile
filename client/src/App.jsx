import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import DoctorPanel from './pages/DoctorPanel';
import Login from './pages/Login';
import ChooseRole from './pages/ChooseRole';
import DoctorRegister from './pages/DoctorRegister';
import PatientRegister from './pages/PatientRegister';
import PatientPanel from './pages/PatientPanel';

const AppContent = () => {
  const location = useLocation();

  // jaha navbar hide karna hai un paths ki list
  const hideNavbarPaths = ["/doctorpanel"];

  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      <Toaster />
      {!shouldHideNavbar && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/service" element={<Service />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/chooserole" element={<ChooseRole />} />
        <Route path="/doctorRegister" element={<DoctorRegister />} />
        <Route path="/patientRegister" element={<PatientRegister />} />
        <Route path="/doctorpanel" element={<DoctorPanel />} />
        <Route path="/patientpanel" element={<PatientPanel />} />
      </Routes>
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App;
