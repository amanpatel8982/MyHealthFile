import React from 'react'
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import DoctorPanel from './pages/DoctorPanel';
import Login from './pages/Login';
import ChooseRole from './pages/ChooseRole';
import DoctorRegister from './pages/DoctorRegister';
import PatientRegister from './pages/PatientRegister';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster />
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} /> 
              <Route path="/service" element={<Service />} /> 
              <Route path="/login" element={<Login />} />
              <Route path="/doctorpanel" element={<DoctorPanel />} />
              <Route path="/chooserole" element={<ChooseRole />} />
              <Route path="/doctorRegister" element={<DoctorRegister />} />
              <Route path="/patientRegister" element={<PatientRegister />} />

           

          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App