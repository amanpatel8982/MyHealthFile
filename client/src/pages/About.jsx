import React from 'react'

const About = () => {
  return (
    <>
<section className="bg-white py-20 px-6 md:px-24 text-gray-800">
  <div className="max-w-7xl mx-auto space-y-16">

    {/* Section Heading */}

    <div className="text-center">
       <div className=" text-5xl font-extrabold text-blue-700 items-center justify-between font-serif mb-14">
               {"About Us".split("").map((char, i) => (
                 <span key={i} className="letter" style={{ animationDelay: `${(i + 10) * 0.05}s` }}>
                   {char === " " ? "\u00A0" : char}
                 </span>
                ))}
             </div>
     
      <p className="text-lg  max-w-3xl font-serif text-black mx-auto">
        MyHealthFile is a modern, secure platform designed to make managing your medical records simple, fast, and accessible. We bring the future of healthcare to your fingertips.
      </p>
    </div>

    {/* Company Mission & Vision */}
    <div className="grid md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-3xl font-serif font-bold text-blue-600 mb-4">Our Mission</h3>
        <p className="text-md text-black font-serif leading-relaxed">
          Our mission is to remove the barriers in accessing medical data. We believe that every individual should have full control  over their health records — anytime, anywhere.
          Whether you are at home, traveling, or visiting a doctor, your entire health history should follow you — digitally, securely, and instantly.
        </p>
      </div>
      <div>
        <h3 className="text-3xl font-serif font-bold text-blue-600 mb-4">Our Vision</h3>
        <p className="text-md text-black font-serif leading-relaxed">
          We envision a world where hospitals, doctors, and patients are connected through a seamless digital ecosystem.
          MyHealthFile aims to be the bridge between patients and modern healthcare — eliminating paperwork and delays, and building a new standard of trust and technology.
        </p>
      </div>
    </div>

    {/* Features Section */}
    <div className="py-20">
  <h3 className="text-4xl font-bold  font-serif text-center text-blue-700 mb-12">
    Our Core Values
  </h3>
  <div className="grid md:grid-cols-3 gap-10">

    <div className="bg-white rounded-xl p-6 shadow-[0_10px_50px_rgba(84,_76,_255,_0.7)] hover:shadow-orange-300 transition">
      <div className="text-3xl text-blue-600 mb-4">💡</div>
      <h4 className="text-xl  font-semibold mb-2">Innovation in Healthcare</h4>
      <p className="text-gray-600 text-sm">
        We believe in using the latest technology to simplify, secure, and enhance your medical experience.
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-[0_10px_50px_rgba(84,_76,_255,_0.7)] hover:shadow-blue-600 transition">
      <div className="text-3xl text-blue-600 mb-4">🤝</div>
      <h4 className="text-xl font-semibold mb-2">Patient First</h4>
      <p className="text-gray-600 text-sm">
        Everything we build is with you in mind — your convenience, your safety, and your peace of mind.
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-[0_10px_50px_rgba(84,_76,_255,_0.7)] hover:shadow-red-600">
      <div className="text-3xl text-blue-600 mb-4">🔐</div>
      <h4 className="text-xl font-semibold mb-2">Data Security</h4>
      <p className="text-gray-600 text-sm">
        Your medical records are encrypted, safe, and accessible only to you and those you trust.
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-[0_10px_50px_rgba(84,_76,_255,_0.7)] hover:shadow-fuchsia-900">
      <div className="text-3xl text-blue-600 mb-4">⚙️</div>
      <h4 className="text-xl font-semibold mb-2">Simple & Powerful Tools</h4>
      <p className="text-gray-600 text-sm">
        Upload, organize, search, and share — all in a few taps, without confusion or complexity.
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-[0_10px_50px_rgba(84,_76,_255,_0.7)] hover:shadow-green-300">
      <div className="text-3xl text-blue-600 mb-4">🌐</div>
      <h4 className="text-xl font-semibold mb-2">Global Accessibility</h4>
      <p className="text-gray-600 text-sm">
        Access your health data from anywhere in the world, on any device, at any time.
      </p>
    </div>

    <div className="bg-white rounded-xl p-6 shadow-[0_10px_50px_rgba(84,_76,_255,_0.7)] hover:shadow-black">
      <div className="text-3xl text-blue-600 mb-4">💬</div>
      <h4 className="text-xl font-semibold mb-2">Real Human Support</h4>
      <p className="text-gray-600 text-sm">
        We’re not just a platform. We’re a team of real people who care about your healthcare journey.
      </p>
    </div>

  </div>
</div>


    {/* Trust Section */}
   <div className="bg-blue-100 rounded-xl p-10 text-center mt-16">
  <h4 className="text-2xl md:text-3xl  font-bold text-gray-900 mb-4">
    Your Health, Our Responsibility
  </h4>
  <p className="text-md text-gray-700 max-w-3xl mx-auto mb-6 leading-relaxed">
    At MyHealthFile, we don’t just store data — we protect your health journey. Every record, prescription, and report is organized, secure, and always within your reach. 
    <br /><br />
    Whether you're booking appointments, reviewing old test results, or sharing reports with your doctor, our platform gives you full control — without the chaos of paper files.
  </p>
  
</div>


  </div>
</section>




<section className="bg-gray-50 px-6 md:px-24 py-20">
  <div className="max-w-7xl mx-auto space-y-16">

    {/* Our Vision */}
    <div className="text-center">
      <h3 className="text-4xl font-serif font-bold text-blue-600 mb-4">Our Vision</h3>
      <p className="text-lg  text-gray-900 max-w-3xl mx-auto">
        We aim to bridge the gap between patients and healthcare providers by creating a digital-first ecosystem.
        With MyHealthFile, your medical journey is streamlined, paperless, and always with you — no matter where you go.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid md:grid-cols-3 gap-10 text-left">
      <div className="bg-white p-6 rounded-lg shadow-[0_10px_50px_rgba(84,_76,_255,_0.7)] hover:shadow-orange-300 duration-300">
        <h4 className="text-xl font-semibold text-blue-600 mb-2">📁 Centralized Records</h4>
        <p className="text-gray-700 text-sm">Store all medical files in one place — prescriptions, reports, and documents.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-[0_10px_50px_rgba(84,_76,_255,_0.7)] hover:shadow-fuchsia-600 duration-300">
        <h4 className="text-xl font-semibold text-blue-600 mb-2">🔒 Top-Grade Security</h4>
        <p className="text-gray-700 text-sm">End-to-end encryption ensures complete confidentiality of your records.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-[0_10px_50px_rgba(84,_76,_255,_0.7)] hover:shadow-green-300 duration-300">
        <h4 className="text-xl font-semibold text-blue-600 mb-2">🕒 24x7 Access</h4>
        <p className="text-gray-700 text-sm">Access your records from any device, at any time — from anywhere.</p>
      </div>
    </div>

    {/* Call to Action */}
    <div className="text-center pt-12">
      <h4 className="text-3xl  font-bold font-serif mb-4 text-gray-900">Join Thousands Who Trust MyHealthFile</h4>
      <p className="text-gray-950 mb-6">Start managing your medical records the smart way.</p>
      <a
        href="/register"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition"
      >
        Create Your Free Account
      </a>
    </div>
  </div>
</section>




    </>
  )
}

export default About