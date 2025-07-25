import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="bg-white min-h-screen py-12 px-4 sm:px-10 lg:px-24">
         <div className=" text-5xl font-extrabold text-blue-700 text-center font-serif mb-14">
               {"Let’s Talk".split("").map((char, i) => (
                 <span key={i} className="letter" style={{ animationDelay: `${(i + 10) * 0.05}s` }}>
                   {char === " " ? "\u00A0" : char}
                 </span>
                ))}
             </div>

      <p className="text-gray-700 text-center text-lg max-w-5xl mx-auto mb-20">
        Whether you need help, want to give feedback, or wish to collaborate —
        we’re always happy to hear from you. Our support team is here to ensure
        you have the best experience using MyHealthFile. We’re more than a
        platform — we’re your healthcare partner. Reach out. Let’s talk.
        Together, we can make your health journey smoother and smarter.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Why People Trust Us */}
        <div className="bg-white rounded-xl shadow-[0_10px_50px_rgba(84,_76,_255,_7)] hover:shadow-red-900 p-6">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">Why People Trust Us</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              ✅ <span className="ml-2">100% Encrypted Health Records</span>
            </li>
            <li className="flex items-start">
              ✅ <span className="ml-2">Doctor & Patient Friendly UI</span>
            </li>
            <li className="flex items-start">
              ✅ <span className="ml-2">Realtime Health Status Sharing</span>
            </li>
            <li className="flex items-start">
              ✅ <span className="ml-2">Backed by Hospitals & Clinics</span>
            </li>
          </ul>
        </div>

        {/* Still have questions? */}
        <div className="bg-white rounded-xl shadow-[0_10px_50px_rgba(84,_76,_255,_1)] hover:shadow-red-900 p-6">
          <h3 className="text-xl font-semibold text-blue-700 mb-3">Still have questions?</h3>
          <p className="text-gray-600 mb-4">
            Check out our Help Center for quick answers or drop us a message through
            the form on the next page. We usually reply within 24 hours.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>How to upload prescriptions?</li>
            <li>Is my data encrypted?</li>
            <li>Can doctors access reports directly?</li>
            <li>How to reset password?</li>
          </ul>
        </div>
      </div>
    </div>

<section className="bg-[#f0f4f9] py-24 px-6 md:px-24">
  <div className="max-w-6xl mx-auto">

    {/* Section Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-blue-800">Connect With Our Team</h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
        We’re always ready to listen. Whether you need assistance, have a suggestion, or want to collaborate — feel free to reach out to us.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-16 items-start">

      {/* Contact Details */}
      <div className="space-y-10">
        <div>
          <h4 className="text-2xl font-semibold text-blue-700 mb-2 ">📩 Email Support</h4>
          <hr  className='w-48 '/>
          <p className="text-gray-700 text-md">Send us your questions and we’ll get back within 24 hours.</p>
          <p className="text-blue-800 font-medium mt-2">contact@myhealthfile.com</p>
        </div>

        <div>
          <h4 className="text-2xl font-semibold text-blue-700 mb-2">📞 Call Us</h4>
          <p className="text-gray-700 text-md">Available Monday to Saturday, 9AM to 6PM</p>
          <p className="text-blue-800 font-medium mt-2">+91 98765 43210</p>
        </div>

        <div>
          <h4 className="text-2xl font-semibold text-blue-700 mb-2">🏢 Office Location</h4>
          <p className="text-gray-700 text-md">Minal mall , 4th floor, RICR BHOPAL, (M.P.) India</p>
        </div>

        <div>
          <h4 className="text-2xl font-semibold text-blue-700 mb-2">💬 Social Channels</h4>
          <p className="text-gray-700">Follow us on Instagram, LinkedIn, and Twitter for updates.</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-2xl shadow-xl p-10 md:p-12">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" placeholder="you@example.com" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea rows="5" placeholder="Type your message here..." className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>

          <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition duration-300">
            Submit Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


<section className="bg-white py-24 px-6 md:px-24">
  <div className="max-w-6xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-800">Support & Help Center</h2>
      <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
        Find answers to common questions, guides to help you get started, and ways to contact us quickly if you need support.
      </p>
    </div>

    {/* FAQs */}
    <div className="grid md:grid-cols-2 gap-12 mb-16">
      {[
        { q: "How do I create an account?", a: "Click on the 'Create Account' button on the homepage and fill in your details. You’ll receive a verification email shortly after." },
        { q: "Is my health data secure?", a: "Absolutely. All records are encrypted and stored securely using industry-standard protocols." },
        { q: "Can I connect my doctor?", a: "Yes. Invite your doctor using the app. They can then access records you've shared securely." },
        { q: "I forgot my password. What now?", a: "Go to the login page, click on 'Forgot Password', and follow the steps to reset it." },
      ].map((faq, index) => (
        <div key={index}>
          <h4 className="text-xl font-semibold text-blue-700 mb-2">{faq.q}</h4>
          <p className="text-gray-700">{faq.a}</p>
        </div>
      ))}
    </div>

    {/* Extra Help */}
    <div className="bg-blue-50 rounded-xl p-8 md:p-12 text-center shadow-md">
      <h3 className="text-2xl font-bold text-blue-700 mb-4">Still Need Help?</h3>
      <p className="text-gray-700 mb-6 max-w-xl mx-auto">
        If your question isn’t listed, you can always contact our support team. We’re happy to help!
      </p>
      <a href="/contact" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
        Go to Contact Page
      </a>
    </div>

  </div>
</section>




    </>
  )
}

export default Contact