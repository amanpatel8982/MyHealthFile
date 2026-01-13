import React from "react";

const About = () => {
  return (
    <>
      {/* ABOUT HERO */}
      <section className="bg-white py-16 sm:py-20 px-6 md:px-24 text-gray-800">
        <div className="max-w-7xl mx-auto space-y-16">

          {/* HEADING */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif text-blue-700 mb-8">
              {"About Us".split("").map((char, i) => (
                <span
                  key={i}
                  className="letter"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h1>

            <p className="text-base sm:text-lg max-w-3xl mx-auto text-gray-800 font-serif">
              MyHealthFile is a modern, secure platform designed to make managing
              your medical records simple, fast, and accessible. We bring the
              future of healthcare to your fingertips.
            </p>
          </div>

          {/* MISSION & VISION */}
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-blue-600 mb-4">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-gray-800 font-serif leading-relaxed">
                Our mission is to remove the barriers in accessing medical data.
                We believe that every individual should have full control over
                their health records — anytime, anywhere. Whether you are at
                home, traveling, or visiting a doctor, your entire health
                history should follow you — digitally, securely, and instantly.
              </p>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-blue-600 mb-4">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-gray-800 font-serif leading-relaxed">
                We envision a world where hospitals, doctors, and patients are
                connected through a seamless digital ecosystem. MyHealthFile
                aims to eliminate paperwork and delays while building a new
                standard of trust and technology.
              </p>
            </div>
          </div>

          {/* CORE VALUES */}
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold font-serif text-center text-blue-700 mb-12">
              Our Core Values
            </h3>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: "💡", title: "Innovation in Healthcare", desc: "We use the latest technology to simplify and enhance medical experiences." },
                { icon: "🤝", title: "Patient First", desc: "Everything we build focuses on your convenience, safety, and peace of mind." },
                { icon: "🔐", title: "Data Security", desc: "Your medical records are encrypted and accessible only to you." },
                { icon: "⚙️", title: "Simple & Powerful Tools", desc: "Upload, organize, and share records effortlessly." },
                { icon: "🌐", title: "Global Accessibility", desc: "Access your health data anywhere, anytime, on any device." },
                { icon: "💬", title: "Real Human Support", desc: "A real team that genuinely cares about your healthcare journey." },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-[0_10px_50px_rgba(84,_76,_255,_0.4)] hover:shadow-blue-300 transition"
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TRUST */}
          <div className="bg-blue-100 rounded-xl p-8 sm:p-10 text-center">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Your Health, Our Responsibility
            </h4>
            <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
              At MyHealthFile, we don’t just store data — we protect your health
              journey. Every record, prescription, and report is organized,
              secure, and always within your reach.
            </p>
          </div>

        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="bg-gray-50 px-6 md:px-24 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto space-y-16">

          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-serif font-bold text-blue-600 mb-4">
              Our Vision
            </h3>
            <p className="text-base sm:text-lg text-gray-900 max-w-3xl mx-auto">
              We aim to bridge the gap between patients and healthcare providers
              by creating a digital-first ecosystem that’s always with you —
              wherever you go.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              { title: "📁 Centralized Records", desc: "Store prescriptions, reports, and documents in one place." },
              { title: "🔒 Top-Grade Security", desc: "End-to-end encryption ensures confidentiality." },
              { title: "🕒 24x7 Access", desc: "Access your records anytime, anywhere." },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-[0_10px_50px_rgba(84,_76,_255,_0.4)] hover:shadow-blue-300 transition"
              >
                <h4 className="text-lg font-semibold text-blue-600 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-10">
            <h4 className="text-2xl sm:text-3xl font-bold font-serif mb-4">
              Join Thousands Who Trust MyHealthFile
            </h4>
            <p className="text-gray-700 mb-6">
              Start managing your medical records the smart way.
            </p>
            <a
              href="/register"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full text-base sm:text-lg hover:bg-blue-700 transition"
            >
              Create Your Free Account
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
