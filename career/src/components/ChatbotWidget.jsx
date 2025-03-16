import React, { useState, useEffect } from "react";
import Chatbot from "./Chatbot";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

//   // Auto-popup the chatbot after 3 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsOpen(true);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Button with Custom Design */}
      {!isOpen && (
        <button
          className="bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center space-x-2
                    hover:bg-blue-700 transition-all"
          onClick={() => setIsOpen(true)}
        >
          <span>💬 Chat with Nest</span>
        </button>
      )}

      {/* Chatbot Window (Auto-Popup Enabled) */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-[500px] h-[500px] bg-gray-900 text-white border border-gray-700 rounded-lg shadow-xl flex flex-col">
          {/* Header */}
          <div className="p-4 bg-gray-800 flex justify-between items-center border-b border-gray-700">
            <h2 className="text-lg font-semibold">AI Chat Assistant</h2>
            <button className="text-white hover:text-gray-400" onClick={() => setIsOpen(false)}>✖</button>
          </div>

          {/* Chatbot Component */}
          <Chatbot />
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;