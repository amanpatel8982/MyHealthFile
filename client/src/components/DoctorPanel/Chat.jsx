import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

const Chat = () => {
  // Dummy patients
  const patients = [
    { id: 1, name: "John Doe", lastMessage: "Thank you doctor!" },
    { id: 2, name: "Alice Smith", lastMessage: "Should I continue meds?" },
    { id: 3, name: "Robert Brown", lastMessage: "Feeling better today." },
  ];

  // Chat state
  const [selectedPatient, setSelectedPatient] = useState(patients[0]);
  const [messages, setMessages] = useState([
    { sender: "patient", text: "Hello doctor, I’m not feeling well." },
    { sender: "doctor", text: "Don’t worry, tell me your symptoms." },
    { sender: "patient", text: "Fever and cough since yesterday." },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { sender: "doctor", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <div className="flex h-[85vh] bg-gray-100 rounded-xl shadow">
      {/* Patients List */}
      <div className="w-1/3 border-r bg-white rounded-l-xl overflow-y-auto">
        <h2 className="text-lg font-bold p-4 border-b">Patients</h2>
        {patients.map((p) => (
          <div
            key={p.id}
            onClick={() => setSelectedPatient(p)}
            className={`p-4 cursor-pointer hover:bg-indigo-100 ${
              selectedPatient.id === p.id ? "bg-indigo-50" : ""
            }`}
          >
            <p className="font-semibold">{p.name}</p>
            <p className="text-sm text-gray-500 truncate">{p.lastMessage}</p>
          </div>
        ))}
      </div>

      {/* Chat Window */}
      <div className="flex flex-col flex-1 bg-gray-50 rounded-r-xl">
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between bg-white rounded-tr-xl">
          <h2 className="font-bold">{selectedPatient.name}</h2>
          <span className="text-sm text-gray-500">Online</span>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 space-y-3 overflow-y-auto">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === "doctor" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-xs shadow ${
                  msg.sender === "doctor"
                    ? "bg-indigo-600 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="p-4 border-t flex items-center gap-3 bg-white rounded-b-xl">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
          />
          <button
            onClick={handleSend}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-700 transition"
          >
            <FiSend /> Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
