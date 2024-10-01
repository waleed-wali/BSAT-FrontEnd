import React from 'react';

const ChatBot = ({ messages, input, setInput, handleSendMessage }) => {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/4 bg-gray-800 text-white min-h-screen p-5 space-y-4">
        {/* Left Sidebar Content */}
      </div>
      <div className="w-3/4 bg-gray-100 flex flex-col">
        <div className="bg-white p-4 shadow">
          <h1 className="text-2xl font-semibold">Chat with Us</h1>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {messages?.map((message, index) => (
              <div key={index} className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`${message.from === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"} p-3 rounded-lg max-w-xs`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-4 flex">
          <input
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
