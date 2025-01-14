// import React, { useState } from "react";
// import axios from "axios";

// const ChatBot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");

//   const handleSendMessage = async () => {
//     if (!input.trim()) return;

//     const userMessage = { role: "user", text: input };
//     setMessages([...messages, userMessage]);
//     setInput("");
//     const key =
//       "sk-myhealthservice-7Yu3lSkLyEdgKzz2jVk9T3BlbkFJHjUH1MnA5GelR0QlVvZV";

//     try {
//       // Call OpenAI API
//       const gptResponse = await axios.post(
//         "https://api.openai.com/v1/chat/completions",
//         {
//           model: "gpt-3.5-turbo",
//           messages: [
//             { role: "system", content: "You are a helpful chatbot." },
//             ...messages.map((msg) => ({ role: msg.role, content: msg.text })),
//             { role: "user", content: input },
//           ],
//           temperature: 0.7,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${key}`,
//           },
//         }
//       );

//       const gptMessage = {
//         role: "assistant",
//         text: gptResponse.data.choices[0].message.content.trim(),
//       };
//       setMessages((prev) => [...prev, gptMessage]);
//     } catch (error) {
//       console.error(
//         "Error generating chat response:",
//         error.response ? error.response.data : error.message
//       );
//     }
//   };

//   return (
//     <div className="flex">
//       <div className="w-[100%] bg-gray-100 flex flex-col">
//         <div className="bg-white p-4 shadow">
//           <h1 className="text-2xl font-semibold">Chat with Us</h1>
//         </div>
//         <div className="flex-1 p-4 overflow-y-auto">
//           <div className="space-y-4 ">
//             {messages.map((message, index) => (
//               <div
//                 key={index}
//                 className={`flex ${
//                   message.role === "user" ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`${
//                     message.role === "user"
//                       ? "bg-teal-600 text-white"
//                       : "bg-gray-300 text-black"
//                   } p-3 rounded-lg max-w-xs`}
//                 >
//                   {message.text}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className=" h-[460px] ">
//           <div className=" p-4  h-full   flex items-end ">
//             <input
//               type="text"
//               className="flex-1   py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 "
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Type your message..."
//             />
//             <button
//               className="bg-teal-600 ml-1a text-white px-4 py-3 rounded-r-lg "
//               onClick={handleSendMessage}
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatBot;









/////        Updated `ChatBot.jsx` file with the New Code       /////






import React, { useState } from "react";
import axios from "axios";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");
    const key = "sk-myhealthservice-7Yu3lSkLyEdgKzz2jVk9T3BlbkFJHjUH1MnA5GelR0QlVvZV";

    try {
      const gptResponse = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful chatbot. Only respond to SEO-related queries in a maximum of 5 sentences. Provide information specifically matching the user's SEO query." },
            ...messages.map((msg) => ({ role: msg.role, content: msg.text })),
            { role: "user", content: input },
          ],
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${key}`,
          },
        }
      );

      const gptMessage = {
        role: "assistant",
        text: gptResponse.data.choices[0].message.content.trim(),
      };
      setMessages((prev) => [...prev, gptMessage]);
    } catch (error) {
      console.error(
        "Error generating chat response:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="w-[100%] bg-gray-100 flex flex-col flex-grow">
        <div className="bg-white p-4 shadow">
          <h1 className="text-2xl font-semibold">Chat Bot</h1>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`${
                    message.role === "user"
                      ? "bg-teal-600 text-white"
                      : "bg-gray-300 text-black"
                  } p-3 rounded-lg max-w-xs`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-4 flex items-center sticky bottom-0 bg-white border-t border-gray-300">
          <input
            type="text"
            className="flex-1 py-3 px-4 border border-gray-400 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
          />
          <button
            className="bg-teal-600 text-white px-6 py-3 rounded-r-lg hover:bg-teal-700"
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
