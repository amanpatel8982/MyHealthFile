import React from 'react'

const Service = () => {
  return (
    <>
    <div>
 <section class="bg-white py-20 px-4 md:px-20 text-gray-800">
  <div class="max-w-7xl mx-auto">

    <div class="text-center mb-16">
     
      <div className=" text-5xl font-extrabold text-blue-700 items-center justify-between font-serif mb-14 animate-bounce">
               {"Explore Our Services".split("").map((char, i) => (
                 <span key={i} className="letter" style={{ animationDelay: `${(i + 10) * 0.05}s` }}>
                   {char === " " ? "\u00A0" : char}
                 </span>
                ))}
             </div>
      <p class="text-lg text-gray-600">
        Whether you're a doctor or a patient, MyHealthFile brings everything you need into one secure, smart platform.
      </p>
    </div>

    <h3 class="text-2xl font-bold text-blue-700 mb-6">🩺 For Doctors</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">

      <div class="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h4 class="text-xl font-semibold text-blue-800 mb-2">Patient Record Access</h4>
        <p>Doctors can view complete health profiles, reports, and medical history of assigned patients.</p>
      </div>

      <div class="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h4 class="text-xl font-semibold text-blue-800 mb-2">Digital Prescription</h4>
        <p>Create and send signed prescriptions directly to patients — safely and instantly.</p>
      </div>

      <div class="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h4 class="text-xl font-semibold text-blue-800 mb-2">Live Appointment Dashboard</h4>
        <p>Manage appointments, view schedules, and track patient flow in real-time.</p>
      </div>

      <div class="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h4 class="text-xl font-semibold text-blue-800 mb-2">Upload Test Reports</h4>
        <p>Upload lab reports, X-rays, and medical files with secure assignment to patient profiles.</p>
      </div>

      <div class="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h4 class="text-xl font-semibold text-blue-800 mb-2">Doctor Profile Control</h4>
        <p>Edit professional profile, availability hours, and manage your credentials online.</p>
      </div>

      <div class="bg-blue-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h4 class="text-xl font-semibold text-blue-800 mb-2">Secure Doctor-Patient Chat</h4>
        <p>Communicate with patients using encrypted messaging (optional feature).</p>
      </div>
    </div>

    <h3 class="text-2xl font-bold text-blue-700 mb-6">👨‍👩‍👧 For Patients & Families</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div class="bg-green-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h4 class="text-xl font-semibold text-green-800 mb-2">Health Record Storage</h4>
        <p>Save all your medical files securely with 24/7 access from anywhere.</p>
      </div>

      <div class="bg-green-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h4 class="text-xl font-semibold text-green-800 mb-2">Consult Your Doctor</h4>
        <p>Book appointments and share reports directly with your doctor anytime.</p>
      </div>

      <div class="bg-green-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h4 class="text-xl font-semibold text-green-800 mb-2">Track Family Health</h4>
        <p>Manage records of your children, parents, or spouse from one account.</p>
      </div>

      <div class="bg-green-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h4 class="text-xl font-semibold text-green-800 mb-2">Emergency Info Access</h4>
        <p>Grant access to critical health data during emergencies.</p>
      </div>

      <div class="bg-green-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h4 class="text-xl font-semibold text-green-800 mb-2">Appointment Notifications</h4>
        <p>Get reminders for visits, prescriptions, and test follow-ups.</p>
      </div>

      <div class="bg-green-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
        <h4 class="text-xl font-semibold text-green-800 mb-2">Health Insights</h4>
        <p>Generate simple charts and reports to track your overall health trends.</p>
      </div>
    </div>

    
    <div class="mt-20 text-center bg-blue-100 py-10 px-8 rounded-xl">
      <h3 class="text-2xl font-bold text-blue-800 mb-3">Your Smart Health Companion Awaits</h3>
      <p class="text-gray-700 mb-5">MyHealthFile is your all-in-one solution for modern digital healthcare. Create your account today.</p>
      <a href="/signup" class="inline-block bg-blue-700 text-white py-3 px-6 rounded-full hover:bg-blue-800 transition">Create Free Account</a>
    </div>
  </div>
</section>


    </div>
    
    </>
  )
}

export default Service