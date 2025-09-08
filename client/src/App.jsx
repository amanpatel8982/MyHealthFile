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
import Step1_PersonalInfo from './components/RegisterDoctor/Step1_PersonalInfo';
import Step2_ProfessionalDetails from './components/RegisterDoctor/Step2_ProfessionalDetails';
import Step3_ContactInfo from './components/RegisterDoctor/Step3_ContactInfo';
import Step4_DocumentsUpload from './components/RegisterDoctor/Step4_DocumentsUpload';
import Step5_TermsSubmit from './components/RegisterDoctor/Step5_TermsSubmit';
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
        <Route path="/register/doctor/step-1" element={<Step1_PersonalInfo />} />
        <Route path="/register/doctor/step-2" element={<Step2_ProfessionalDetails />} /> 
        <Route path="/register/doctor/step-3" element={<Step3_ContactInfo />} />
        <Route path="/register/doctor/step-4" element={<Step4_DocumentsUpload />} />
        <Route path="/register/doctor/step-5" element={<Step5_TermsSubmit />} /> 
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
