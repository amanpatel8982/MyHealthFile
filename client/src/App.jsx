import React from 'react'
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Register from './pages/Register';
import DoctorPanel from './pages/DoctorPanel';


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
              <Route path="/register" element={<Register />} />
              <Route path="/doctorpanel" element={<DoctorPanel />} />

          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App