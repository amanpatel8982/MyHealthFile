import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Home,
  Info,
  Phone,
  Settings,
  SquareChevronDown,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <nav className="w-full bg-transparent px-6 md:px-16 py-4">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <h2
            onClick={() => navigate("/")}
            className="text-2xl md:text-4xl font-bold font-serif cursor-pointer text-indigo-900"
          >
            MyHealthFile
          </h2>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10 text-[17px] font-medium">
            <Link to="/" className="flex items-center gap-1 hover:text-indigo-900">
              <Home size={18} /> Home
            </Link>

            <Link to="/about" className="flex items-center gap-1 hover:text-indigo-900">
              <Info size={18} /> About
            </Link>

            <Link to="/contact" className="flex items-center gap-1 hover:text-indigo-900">
              <Phone size={18} /> Contact
            </Link>

            <Link to="/service" className="flex items-center gap-1 hover:text-indigo-900">
              <Settings size={18} /> Service
            </Link>

            {/* DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 hover:text-indigo-900"
              >
                <SquareChevronDown size={18} /> Panel
              </button>

              {dropdownOpen && (
                <div className="absolute top-8 left-0 w-44 bg-white shadow-lg rounded-lg z-50">
                  <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">
                    Doctor Panel
                  </Link>
                  <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">
                    Patient Panel
                  </Link>
                </div>
              )}
            </div>

            {/* CTA */}
            <button
              onClick={() => navigate("/chooseRole")}
              className="bg-indigo-600 text-white px-6 py-2 rounded-full font-serif hover:scale-105 transition shadow-md"
            >
              Create Account
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden mt-6 bg-white rounded-xl shadow-lg p-6 space-y-4 text-center">
            <Link onClick={() => setMenuOpen(false)} to="/" className="block">Home</Link>
            <Link onClick={() => setMenuOpen(false)} to="/about" className="block">About</Link>
            <Link onClick={() => setMenuOpen(false)} to="/contact" className="block">Contact</Link>
            <Link onClick={() => setMenuOpen(false)} to="/service" className="block">Service</Link>

            <details className="cursor-pointer">
              <summary className="flex justify-center items-center gap-1">
                Panel <SquareChevronDown size={16} />
              </summary>
              <div className="mt-2 space-y-2">
                <Link to="/login" className="block">Doctor Panel</Link>
                <Link to="/login" className="block">Patient Panel</Link>
              </div>
            </details>

            <button
              onClick={() => navigate("/chooseRole")}
              className="w-full bg-indigo-600 text-white py-2 rounded-full mt-4"
            >
              Create Account
            </button>
          </div>
        )}
      </nav>

      <hr className="w-full border-gray-200" />
    </>
  );
};

export default Navbar;
