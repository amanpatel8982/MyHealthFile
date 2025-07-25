import React from 'react'

const Hero = () => {
  return (
    <>
      <div className=' h-160 w-351 m-6 ms-17 bg-indigo-500 '>
       
        <div className=" text-white px-20 py-40 flex flex-col md:flex-row items-center justify-between">
          
          <div className="md:w-1/2 w-full mb-10 md:mb-0">

            <div className="text-6xl relative font-sans bottom-25 font-bold text-white leading-snug">
             <div className="flex flex-wrap ">
               {"Your Health,".split("").map((char, i) => (
                 <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                   {char === " " ? "\u00A0" : char}
                 </span>
                ))}
             </div>
             <div className="flex flex-wrap">
               {"Digitally Secured".split("").map((char, i) => (
                 <span key={i} className="letter" style={{ animationDelay: `${(i + 15) * 0.05}s` }}>
                   {char === " " ? "\u00A0" : char}
                 </span>
               ))}
             </div>
           </div>



              <p className="text-lg relative bottom-12">
                 Store, access and share your medical records securely with
                  MyHealthFile.
              </p>
              <ul className=" space-y-2 text-lg relative bottom-7  list-disc list-inside">
                  <li>Access your reports anytime, anywhere</li>
                  <li>Share files securely with your doctor</li>
                  <li>Track your health history in one place</li>
                  <li>Download reports instantly in PDF format</li>
               </ul>

              <button className="bg-white  border-3 border-black-950  text-blue-800 mt-7 cursor-pointer px-9 py-3 rounded-full font-semibold hover:scale-110 transition duration-300 ease-in-out shadow-md hover:shadow-lg">
                Get Started
               </button>
          </div>

          <div className='relative flex items-center justify-center md-justify-end md:items-end h-[319px] top-26'>
            <img
              src="doctor.png"
              className=" w-full md-relative  rounded-lg  top-20"
             />
            </div>

        </div>
      </div>
    </>
  )
}

export default Hero