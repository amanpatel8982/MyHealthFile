import React from 'react';

const HomePage = () => {
  return (
    <>
    <div>
    

<section classNameName="bg-gradient-to-br from-blue-200 via-white to-blue-400 py-36  w-[92.2%]  ms-17 px-6 md:px-32 text-center text-gray-900">
  <h1 className="text-6xl md:text-7xl font-extrabold mb-6  mt-20 animate-fade-in text-center tracking-tight leading-tight">Empowering <span className="text-blue-700">Digital Healthcare</span></h1>
  <p className="text-2xl max-w-4xl mx-auto leading-relaxed animate-slide-up">MyHealthFile helps families, professionals, and doctors connect to a smarter, safer way of managing health. All your records in one place — anytime, anywhere.</p>
  <div className="mt-10">
    <a href="/signup" className="bg-blue-700 text-white px-10 py-4 rounded-full ms-160 text-lg font-semibold shadow hover:bg-blue-800 hover:scale-105 transition  transform duration-300">Create Free Account</a>
  </div>
</section>

<section className="bg-white py-32 px-6 md:px-32">
  <h2 className="text-5xl font-bold text-center mb-20 text-blue-900">Explore Our Key Features</h2>
  <div className="grid md:grid-cols-3 gap-12 text-gray-800">
    <div className="p-8 shadow-lg rounded-xl border-t-4 border-blue-600 bg-gradient-to-b from-white to-blue-50 hover:shadow-2xl transition-transform transform hover:-translate-y-2">
      <h3 className="text-2xl font-bold mb-4">👨‍⚕️ Doctor Dashboard</h3>
      <p>Smart panel to manage appointments, patient histories, prescriptions & more — powered by AI.</p>
    </div>
    <div className="p-8 shadow-lg rounded-xl border-t-4 border-blue-600 bg-gradient-to-b from-white to-blue-50 hover:shadow-2xl transition-transform transform hover:-translate-y-2">
      <h3 className="text-2xl font-bold mb-4">🗂️ Family Vault</h3>
      <p>Secure digital locker for all health documents of your entire family — accessible from anywhere.</p>
    </div>
    <div className="p-8 shadow-lg rounded-xl border-t-4 border-blue-600 bg-gradient-to-b from-white to-blue-50 hover:shadow-2xl transition-transform transform hover:-translate-y-2">
      <h3 className="text-2xl font-bold mb-4">📅 Auto Reminders</h3>
      <p>Never miss a checkup or vaccination again. Get smart alerts tailored to your health profile.</p>
    </div>
  </div>
</section>


<section className="bg-blue-100 w-[92.2%]  ms-17 py-32 px-6 md:px-32 text-gray-900">
  <h2 className="text-5xl font-bold mb-12 text-center">About <span className="text-blue-700">MyHealthFile</span></h2>
  <p className="text-xl leading-relaxed max-w-5xl mx-auto text-center">Our mission is to simplify and modernize healthcare access across India. From booking appointments to sharing prescriptions, everything is now just a click away. We're not just a platform — we're a movement toward connected, intelligent care for every Indian household.</p>
</section>

<section className="bg-white py-32 px-6 md:px-32 text-gray-800">
  <h2 className="text-5xl font-bold mb-16 text-center">Healthcare Services That Matter</h2>
  <div className="grid md:grid-cols-3 gap-12">
    <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
      <h4 className="text-xl font-bold mb-3">💻 Virtual Consultation</h4>
      <p>Instant video consultation with certified specialists 24/7 from the comfort of your home.</p>
    </div>
    <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
      <h4 className="text-xl font-bold mb-3">📝 e-Prescriptions</h4>
      <p>Doctors issue safe, valid e-prescriptions that are saved to your family vault automatically.</p>
    </div>
    <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
      <h4 className="text-xl font-bold mb-3">📊 Health Insights</h4>
      <p>Track vitals, trends, and risk indicators with real-time analytics backed by medical AI.</p>
    </div>
  </div>
</section>


<section className="bg-blue-900 w-[92.2%]  ms-17 text-white py-32 px-6 md:px-32 text-center">
  <h2 className="text-5xl font-bold mb-6">Let’s Build Better Health Together</h2>
  <p className="text-lg mb-10 max-w-3xl mx-auto">Have ideas, questions, or feedback? We’re always listening. Contact us and let’s transform healthcare for the better.</p>
  <a href="/contact" className="bg-white text-blue-900 font-bold px-12 py-4 rounded-full hover:bg-blue-100 transition">Contact Us</a>
</section>


<section className="bg-white py-32 px-6 md:px-32 text-gray-900 text-center">
  <h2 className="text-5xl font-bold mb-20">Words From Our Users</h2>
  <div className="grid md:grid-cols-2 gap-12">
    <div className="bg-blue-50 p-10 rounded-xl shadow-md">
      <p className="italic text-lg mb-4">“This platform has transformed how we manage our child’s vaccinations and prescriptions. Everything’s in one place!”</p>
      <p className="font-semibold text-blue-800">– Meera Sharma, Chandigarh</p>
    </div>
    <div className="bg-blue-50 p-10 rounded-xl shadow-md">
      <p className="italic text-lg mb-4">“I’m a general physician and I’ve saved hours every week using MyHealthFile. Intuitive and effective.”</p>
      <p className="font-semibold text-blue-800">– Dr. Rakesh Menon, Kochi</p>
    </div>
  </div>
</section>


<footer className="bg-gray-900 text-gray-300 py-20 w-[92.2%]  ms-17 px-6 text-sm">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
    <div>
      <h4 className="text-white text-lg font-bold mb-3">About MyHealthFile</h4>
      <p>India’s digital healthcare companion — connecting people, families, and professionals for better wellness.</p>
    </div>
    <div>
      <h4 className="text-white font-semibold mb-2">Quick Links</h4>
      <ul className="space-y-1">
        <li><a href="/" className="hover:underline">🏠 Home</a></li>
        <li><a href="/about" className="hover:underline">📘 About</a></li>
        <li><a href="/services" className="hover:underline">🧰 Services</a></li>
        <li><a href="/contact" className="hover:underline">📞 Contact</a></li>
      </ul>
    </div>
    <div>
      <h4 className="text-white font-semibold mb-2">Connect With Us</h4>
      <p>Instagram | LinkedIn | YouTube</p>
    </div>
  </div>
  <p className="text-center text-gray-500 mt-12">© 2025 MyHealthFile. Built with ❤️ in India.</p>
</footer>


      
    </div>
      
    </>
  );
}

export default HomePage;
