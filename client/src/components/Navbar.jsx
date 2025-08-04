import { useState,React } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Home, Info, Phone, Settings,SquareChevronDown } from 'lucide-react';




const Navbar = () => {

  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
  <>
    <div className=" bg-transparent flex h-25 ms-7">
      
      <h2 onClick={()=>navigate('/')} className='text-4xl font-bold mt-8 ms-10 font-serif cursor-pointer text-indigo-900 '>MyHealthFile</h2>
       <div className="flex justify-end ps-60 font-medium gap-13  text-[18px] items-center">
       <Link to={"/"} className='hover:underline hover:text-indigo-900'> <Home className='relative top-[22px] end-6 text-indigo-800 ' size={18} />HOME</Link>
       <Link to={"about"} className='hover:underline hover:text-indigo-900 '><Info className='relative top-[22px] end-6 text-indigo-800' size={18} />ABOUT</Link>
       <Link to={"/contact"} className='hover:underline hover:text-indigo-900'><Phone className='relative top-[22px] end-6 text-indigo-800' size={18} />CONTACT</Link>
       <Link to={"/service"} className='hover:underline hover:text-indigo-900'><Settings className='relative top-[22px] end-6 text-indigo-800' size={18} />SERVICE</Link>

       <div className='relative'>
        <button
       onClick={() => setDropdownOpen(!dropdownOpen)}
       onMouseEnter={() => setDropdownOpen(true)}
       onMouseLeave={() => setDropdownOpen(false)}
       className='hover:underline hover:text-indigo-900'
       
       ><SquareChevronDown className='relative top-[22px] end-6 text-indigo-800' size={18} />PANEL
       </button>
       {dropdownOpen && (
            <div
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              className="absolute top-10 left-0 w-44 bg-white shadow-lg rounded-lg z-50"
            >
              <Link to="/login" className="block px-4 py-2 hover:bg-gray-100">Doctor Panel</Link>
              <Link to="/patientpanel" className="block px-4 py-2 hover:bg-gray-100">Patient Panel</Link>
            </div>
          )}
       </div>


    
       
<button
  onClick={() => navigate('/chooseRole')}
className=' bg-indigo-600 text-white px-6 py-2 font-serif cursor-pointer rounded-full font-light ms-43 hidden md:block  mt-3 hover:scale-110 transition duration-300 ease-in-out shadow-md hover:shadow-lg'
>
  Create Account
</button>       </div>   
     </div>
     <hr className='w-[92.2%]  ms-17'/>
  </>
  )
}

export default Navbar