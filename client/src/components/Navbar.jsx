import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Home, Info, Phone, Settings } from 'lucide-react';




const Navbar = () => {

  const navigate = useNavigate();
  return (
  <>
    <div className=" bg-transparent flex h-25 ms-7">
      
      <h2 onClick={()=>navigate('/')} className='text-4xl font-bold mt-8 ms-10 font-serif cursor-pointer text-indigo-900 '>MyHealthFile</h2>
       <div className="flex justify-end ps-60 font-medium gap-13  text-[18px] items-center">
       <Link to={"/"} className='hover:underline hover:text-indigo-900'> <Home className='relative top-[22px] end-6 text-indigo-800 ' size={18} />HOME</Link>
       <Link to={"about"} className='hover:underline hover:text-indigo-900 '><Info className='relative top-[22px] end-6 text-indigo-800' size={18} />ABOUT</Link>
       <Link to={"/contact"} className='hover:underline hover:text-indigo-900'><Phone className='relative top-[22px] end-6 text-indigo-800' size={18} />CONTACT</Link>
       <Link to={"/service"} className='hover:underline hover:text-indigo-900'><Settings className='relative top-[22px] end-6 text-indigo-800' size={18} />SERVICE</Link>
       <button onClick={()=>navigate('/register')} className='  text-black  border-2 border-indigo-400 py-1 px-3 font-bold font-serif cursor-pointer mt-4 relative end-6 rounded-full text-center hover:bg-indigo-600 hover:text-white '> 👨‍⚕️DoctorPanel</button>
       
       <button onClick={()=>navigate('/register')} className=' bg-indigo-600 text-white px-6 py-2 font-serif cursor-pointer rounded-full font-light hidden md:block ms-15 mt-3 hover:scale-110 transition duration-300 ease-in-out shadow-md hover:shadow-lg'>Create Account</button>
       </div>   
     </div>
     <hr className='w-[92.2%]  ms-17'/>
  </>
  )
}

export default Navbar