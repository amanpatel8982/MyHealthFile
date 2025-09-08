import React from "react";
import { FiHelpCircle, FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";

const Support = () => {
  const faqs = [
    {
      q: "How can I reset my password?",
      a: "Go to settings > account > reset password. You will receive an email with further instructions.",
    },
    {
      q: "How do I update my profile information?",
      a: "Navigate to settings and update your personal information from there.",
    },
    {
      q: "How can I contact technical support?",
      a: "You can reach us through the form below or call our support line directly.",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <FiHelpCircle /> Support
      </h1>
      <p className="text-gray-600 mb-6">
        Need help? Check FAQs or contact our support team.
      </p>

      {/* FAQs */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-white shadow rounded-lg p-4 border-l-4 border-indigo-600"
            >
              <p className="font-medium text-gray-800">{f.q}</p>
              <p className="text-gray-600 text-sm mt-1">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Options */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 shadow rounded-lg text-center">
          <FiMail className="text-indigo-600 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold">Email Support</h3>
          <p className="text-sm text-gray-600">support@doctorly.com</p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg text-center">
          <FiPhone className="text-indigo-600 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold">Call Us</h3>
          <p className="text-sm text-gray-600">+91 98765 43210</p>
        </div>
        <div className="bg-white p-6 shadow rounded-lg text-center">
          <FiMessageSquare className="text-indigo-600 text-3xl mx-auto mb-3" />
          <h3 className="font-semibold">Live Chat</h3>
          <p className="text-sm text-gray-600">Chat with our support team</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-lg font-semibold mb-3">Send us a message</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
          />
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
