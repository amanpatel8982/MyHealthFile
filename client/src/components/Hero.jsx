import React from 'react';

const Hero = () => {
  return (
    <div className="bg-indigo-800 px-6 sm:px-12 md:px-24 py-16 sm:py-24 md:py-32 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Text */}
        <div className="md:w-1/2 w-full">
          {/* Animated Heading */}
          <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            <div className="flex flex-wrap">
              {"Your Health,".split("").map((char, i) => (
                <span key={i} className="inline-block animate-fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap">
              {"Digitally Secured".split("").map((char, i) => (
                <span key={i} className="inline-block animate-fade-in" style={{ animationDelay: `${(i + 15) * 0.05}s` }}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl mb-4">
            Store, access and share your medical records securely with MyHealthFile.
          </p>

          {/* Features List */}
          <ul className="list-disc list-inside space-y-2 text-base sm:text-lg mb-6">
            <li>Access your reports anytime, anywhere</li>
            <li>Share files securely with your doctor</li>
            <li>Track your health history in one place</li>
            <li>Download reports instantly in PDF format</li>
          </ul>

          {/* Button */}
          <button className="bg-white text-indigo-800 border-2 border-black px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold shadow-md hover:scale-110 hover:shadow-lg transition transform duration-300">
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          <img
            src="doctor.png"
            alt="Doctor"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
