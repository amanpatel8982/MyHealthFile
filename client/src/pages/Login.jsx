import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { HiOutlineMail } from 'react-icons/hi';
import { IoEye, IoEyeOff } from 'react-icons/io5';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    // Handle login logic here (Firebase/Auth)
    setError('');
    console.log('Logging in...', email, password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-white">
      <div className="grid grid-cols-1 relative bottom-8 md:grid-cols-2 shadow-2xl rounded-2xl bg-white w-full max-w-5xl overflow-hidden">

        {/* Left Section */}
        <div className="bg-blue-50 p-10 hidden md:flex flex-col justify-center items-center text-center">
          <img src="login.svg" alt="smart forms" className="w-3/4 mb-6" />
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Smarter Login Experience</h2>
          <ul className="text-sm text-blue-800 space-y-2 text-left">
            <li>✓ Secured authentication</li>
            <li>✓ Easy login via Gmail</li>
            <li>✓ Fast, mobile-ready design</li>
          </ul>
        </div>

        {/* Right Section - Login */}
        <div className="p-8 md:p-14">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Welcome Back!</h2>
          <p className="text-sm text-gray-600 mb-6">Sign in to your doctor account</p>

          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Email Address *</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700 font-medium">Password *</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                />
                <span
                  className="absolute right-3 top-2.5 cursor-pointer text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
                </span>
              </div>
            </div>

            <div className="flex justify-end text-sm mb-4">
              <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              <HiOutlineMail className="mr-2" size={20} /> Log In
            </button>

            <div className="flex items-center gap-2 my-4">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="text-sm text-gray-500">OR</span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>

            <button
              type="button"
              className="flex items-center justify-center w-full border border-gray-300 py-2 rounded-md hover:shadow-md transition"
            >
              <FcGoogle className="mr-2" size={20} /> Sign In with Google
            </button>

            <p className="text-center text-sm text-gray-600 mt-6">
              New to MyHealthFile? <a href="#" className="text-blue-600 hover:underline">Sign up here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
