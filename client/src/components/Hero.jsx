import React from 'react'

const Hero = () => {
  return (
    <>
      <div className=' h-160 w-351 m-6 ms-17 bg-indigo-800 '>
       
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


// import React from "react";

// const Hero = () => {
//   return (
//     <section className="bg-indigo-800 w-full overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
//         <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

//           {/* LEFT CONTENT */}
//           <div className="w-full md:w-1/2 text-white">

//             {/* Animated Heading */}
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
//               <div className="flex flex-wrap">
//                 {"Your Health,".split("").map((char, i) => (
//                   <span
//                     key={i}
//                     className="letter inline-block"
//                     style={{ animationDelay: `${i * 0.05}s` }}
//                   >
//                     {char === " " ? "\u00A0" : char}
//                   </span>
//                 ))}
//               </div>
//               <div className="flex flex-wrap">
//                 {"Digitally Secured".split("").map((char, i) => (
//                   <span
//                     key={i}
//                     className="letter inline-block"
//                     style={{ animationDelay: `${(i + 15) * 0.05}s` }}
//                   >
//                     {char === " " ? "\u00A0" : char}
//                   </span>
//                 ))}
//               </div>
//             </h1>

//             {/* Description */}
//             <p className="text-base sm:text-lg text-indigo-100 mb-6">
//               Store, access and share your medical records securely with
//               <span className="font-semibold text-white"> MyHealthFile</span>.
//             </p>

//             {/* Points */}
//             <ul className="space-y-2 text-sm sm:text-base text-indigo-100 list-disc list-inside mb-8">
//               <li>Access your reports anytime, anywhere</li>
//               <li>Share files securely with your doctor</li>
//               <li>Track your health history in one place</li>
//               <li>Download reports instantly in PDF format</li>
//             </ul>

//             {/* CTA */}
//             <button className="bg-white text-indigo-800 px-8 py-3 rounded-full font-semibold transition transform hover:scale-105 hover:shadow-lg">
//               Get Started
//             </button>
//           </div>

//           {/* RIGHT IMAGE */}
//           <div className="w-full md:w-1/2 flex justify-center md:justify-end">
//             <img
//               src="/doctor.png"
//               alt="Doctor illustration"
//               className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] object-contain drop-shadow-xl"
//             />
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
