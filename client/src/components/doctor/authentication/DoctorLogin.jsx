
import React, { useState } from "react";
import { FaUserMd, FaLock } from "react-icons/fa";
import { toast } from "react-toastify";
import {useNavigate } from "react-router-dom";

const DoctorLogin = () => {
      const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("All fields are required!");
      return;
    }
    // Simulate login
    toast.success("Logged in successfully!");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-md w-[360px] space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-blue-600">Doctor Login</h2>

        <div className="flex items-center border rounded-md px-3 py-2">
          <FaUserMd className="text-gray-400 mr-2" />
          <input
            type="email"
            placeholder="Email"
            className="w-full outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex items-center border rounded-md px-3 py-2">
          <FaLock className="text-gray-400 mr-2" />
          <input
            type="password"
            placeholder="Password"
            className="w-full outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={()=>navigate('/DoctorPanel')}
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700"
        >
          Log In
        </button>

        <p className="text-center text-sm text-gray-500 hover:underline cursor-pointer">
          Forgot Password?
        </p>
      </form>
    </div>
  );
};

export default DoctorLogin;
