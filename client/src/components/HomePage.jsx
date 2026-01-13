import React from "react";

const HomePage = () => {
  return (
    <div className="w-full overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-blue-200 via-white to-blue-400 py-20 md:py-36 px-6 md:px-24 text-center text-gray-900">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in tracking-tight leading-tight">
          Empowering{" "}
          <span className="text-blue-700">Digital Healthcare</span>
        </h1>

        <p className="text-base sm:text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed animate-slide-up">
          MyHealthFile helps families, professionals, and doctors connect to a
          smarter, safer way of managing health. All your records in one place —
          anytime, anywhere.
        </p>

        <div className="mt-10">
          <a
            href="/signup"
            className="inline-block bg-blue-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow hover:bg-blue-800 hover:scale-105 transition duration-300"
          >
            Create Free Account
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-20 md:py-32 px-6 md:px-24">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-blue-900">
          Explore Our Key Features
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              title: "👨‍⚕️ Doctor Dashboard",
              desc: "Smart panel to manage appointments, patient histories, prescriptions & more — powered by AI.",
            },
            {
              title: "🗂️ Family Vault",
              desc: "Secure digital locker for all health documents of your entire family — accessible from anywhere.",
            },
            {
              title: "📅 Auto Reminders",
              desc: "Never miss a checkup or vaccination again. Get smart alerts tailored to your health profile.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 shadow-lg rounded-xl border-t-4 border-blue-600 bg-gradient-to-b from-white to-blue-50 hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                {item.title}
              </h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-blue-100 py-20 md:py-32 px-6 md:px-24 text-gray-900 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
          About <span className="text-blue-700">MyHealthFile</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl max-w-5xl mx-auto leading-relaxed">
          Our mission is to simplify and modernize healthcare access across India.
          From booking appointments to sharing prescriptions, everything is now
          just a click away. We're not just a platform — we're a movement toward
          connected, intelligent care for every Indian household.
        </p>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-20 md:py-32 px-6 md:px-24 text-gray-800">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center">
          Healthcare Services That Matter
        </h2>

        <div className="grid gap-10 md:grid-cols-3">
          {[
            {
              title: "💻 Virtual Consultation",
              desc: "Instant video consultation with certified specialists 24/7 from the comfort of your home.",
            },
            {
              title: "📝 e-Prescriptions",
              desc: "Doctors issue safe, valid e-prescriptions that are saved to your family vault automatically.",
            },
            {
              title: "📊 Health Insights",
              desc: "Track vitals, trends, and risk indicators with real-time analytics backed by medical AI.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <h4 className="text-lg sm:text-xl font-bold mb-3">
                {item.title}
              </h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-20 md:py-32 px-6 md:px-24 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Let’s Build Better Health Together
        </h2>
        <p className="text-base sm:text-lg mb-10 max-w-3xl mx-auto">
          Have ideas, questions, or feedback? We’re always listening. Contact us
          and let’s transform healthcare for the better.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-900 font-bold px-10 py-3 sm:px-12 sm:py-4 rounded-full hover:bg-blue-100 transition"
        >
          Contact Us
        </a>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-20 md:py-32 px-6 md:px-24 text-gray-900 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16">
          Words From Our Users
        </h2>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="bg-blue-50 p-8 sm:p-10 rounded-xl shadow-md">
            <p className="italic mb-4">
              “This platform has transformed how we manage our child’s
              vaccinations and prescriptions. Everything’s in one place!”
            </p>
            <p className="font-semibold text-blue-800">
              – Meera Sharma, Chandigarh
            </p>
          </div>

          <div className="bg-blue-50 p-8 sm:p-10 rounded-xl shadow-md">
            <p className="italic mb-4">
              “I’m a general physician and I’ve saved hours every week using
              MyHealthFile. Intuitive and effective.”
            </p>
            <p className="font-semibold text-blue-800">
              – Dr. Rakesh Menon, Kochi
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-6 text-sm">
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
          <div>
            <h4 className="text-white text-lg font-bold mb-3">
              About MyHealthFile
            </h4>
            <p>
              India’s digital healthcare companion — connecting people,
              families, and professionals for better wellness.
            </p>
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

        <p className="text-center text-gray-500 mt-10">
          © 2025 MyHealthFile. Built with ❤️ in India.
        </p>
      </footer>

    </div>
  );
};

export default HomePage;
