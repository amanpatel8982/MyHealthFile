import React from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
      const navigate = useNavigate();
  return (
    <div>
      <div className="h-160 flex items-center justify-center bg-white px-4">
  <div className="bg-white shadow-[0_10px_50px_rgba(84,_76,_255,_0.7)] rounded-xl p-8 w-full max-w-md">
    <h2 className="text-3xl flex items-center justify-center font-serif font-semibold text-gray-800 mb-2">Login</h2>

    <form>
     

    

      <div className="mb-4">
        <label className="block font-serif text-sm text-gray-700 mb-1" htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border-2 font-serif rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-serif mb-1" htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 border-2 font-serif rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-500 hover:bg-indigo-600 font-serif text-white py-2 rounded-md font-medium transition duration-300"
      >
        Login
      </button>

      <p className="text-sm text-gray-500 mt-4 text-center font-serif">
        Create an new account? <a href="#" onClick={()=>navigate('/register')}  className="text-indigo-600 hover:underline  hover:font-bold">Click here</a>
      </p>
    </form>
  </div>
</div>

    </div>
  )
}

export default Login