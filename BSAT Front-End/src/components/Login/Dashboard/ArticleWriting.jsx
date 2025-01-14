// import React, { useState } from "react";

// const ArticleWriting = () => {
//   const [topic, setTopic] = useState("");
//   const [audience, setAudience] = useState("");
//   const [generatedArticle, setGeneratedArticle] = useState("");

//   const handleGenerateArticle = () => {
//     setGeneratedArticle(
//       `Quantum computing is a revolutionary field that processes information using the principles of quantum mechanics. Unlike classical computing, which uses bits to represent 0s and 1s, quantum computing uses qubits, which can exist in multiple states simultaneously. This allows for faster problem-solving and opens up possibilities in fields like cryptography, artificial intelligence, and material science.`
//     );
//   };

//   const handleSpecialInstructions = () => {
//     alert("Special instructions sent!");
//   };

//   return (
//     <div className="p-6 w-full space-y-6">
//       {/* Header */}
//       <Header title="Dashboard > Article Writing" />

//       {/* Input Fields */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <InputField
//           label="Enter Article Topic"
//           placeholder="Explain quantum computing"
//           value={topic}
//           onChange={(e) => setTopic(e.target.value)}
//         />
//         <InputField
//           label="Target Audience"
//           placeholder="General Public"
//           value={audience}
//           onChange={(e) => setAudience(e.target.value)}
//         />
//       </div>

//       {/* Generate Button */}
//       <div>
//         <button
//           onClick={handleGenerateArticle}
//           className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-all"
//         >
//           Generate Article
//         </button>
//       </div>

//       {/* Generated Article */}
//       {generatedArticle && (
//         <GeneratedContent
//           title="Generated Article"
//           content={generatedArticle}
//         />
//       )}

//       {/* Special Prompt/Instructions */}
//       <SpecialInstructions onSend={handleSpecialInstructions} />

//       {/* Disclaimer */}
//     </div>
//   );
// };

// // Components

// const Header = ({ title }) => (
//   <div className="flex items-center justify-between">
//     <h2 className="text-xl font-semibold">{title}</h2>
//   </div>
// );

// const InputField = ({ label, placeholder, value, onChange }) => (
//   <div>
//     <label className="block text-gray-600 mb-2 font-medium">{label}</label>
//     <input
//       type="text"
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
//     />
//   </div>
// );

// const GeneratedContent = ({ title, content }) => (
//   <div className="bg-blue-50 p-6 rounded-lg space-y-4 border border-gray-200 shadow-sm">
//     <h3 className="text-lg font-semibold text-teal-600">{title}</h3>
//     <p>{content}</p>
//   </div>
// );

// const SpecialInstructions = ({ onSend }) => {
//   const [instructions, setInstructions] = useState("");

//   return (
//     <div className="relative">
//       <input
//         type="text"
//         placeholder="Special Prompt/Instructions"
//         value={instructions}
//         onChange={(e) => setInstructions(e.target.value)}
//         className="w-full px-4 py-2 border border-gray-300 rounded-md mb-6 focus:ring-teal-500 focus:border-teal-500"
//       />
//       <div className="text-right">
//         <button
//           onClick={onSend}
//           className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-all"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// const Disclaimer = ({ message }) => (
//   <p className="text-sm text-gray-500">{message}</p>
// );

// export default ArticleWriting;

import React, { useState } from "react";
import axios from "axios";

const ArticleWriting = () => {
  const [topic, setTopic] = useState("");
  const [audience, setAudience] = useState("");
  const [generatedArticle, setGeneratedArticle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [instructions, setInstructions] = useState("");

  const key =
    "sk-myhealthservice-7Yu3lSkLyEdgKzz2jVk9T3BlbkFJHjUH1MnA5GelR0QlVvZV";

  const handleGenerateArticle = async () => {
    if (!topic || !audience) {
      alert("Please enter both topic and audience!");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are an expert article writer. Write clear and engaging content.",
            },
            {
              role: "user",
              content: `Write an article about "${topic}" targeted at "${audience}".`,
            },
          ],
          max_tokens: 500,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${key}`,
          },
        }
      );

      const articleContent = response.data.choices[0].message.content;
      setGeneratedArticle(articleContent);
    } catch (error) {
      console.error("Error generating article:", error);
      alert("Failed to generate article. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSpecialInstructions = async () => {
    if (!instructions) {
      alert("Please provide special instructions.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are an expert article writer. Write clear and engaging content.",
            },
            {
              role: "user",
              content: `Write an article about "${topic}" targeted at "${audience}". Also, consider the following special instructions: "${instructions}".`,
            },
          ],
          max_tokens: 500,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${key}`,
          },
        }
      );

      const updatedArticleContent = response.data.choices[0].message.content;
      setGeneratedArticle(updatedArticleContent);

      alert("Special instructions processed and article updated!");
    } catch (error) {
      console.error("Error processing special instructions:", error);
      alert("Failed to process special instructions. Please try again.");
    } finally {
      setIsLoading(false);
      setInstructions(""); // Clear the instructions input field
    }
  };

  return (
    <div className="p-6 w-full space-y-6">
      {/* Header */}
      <Header title="Dashboard > Article Writing" />

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="Enter Article Topic"
          placeholder="Explain quantum computing"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <InputField
          label="Target Audience"
          placeholder="General Public"
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
        />
      </div>

      {/* Generate Button */}
      <div>
        <button
          onClick={handleGenerateArticle}
          className={`bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-all ${
            isLoading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Generating..." : "Generate Article"}
        </button>
      </div>

      {/* Editable Generated Article */}
      {generatedArticle && (
        <GeneratedContent
          title="Generated Article"
          content={generatedArticle}
          onContentChange={(updatedContent) =>
            setGeneratedArticle(updatedContent)
          }
        />
      )}

      {/* Special Prompt/Instructions */}
      <div className="relative">
        <input
          type="text"
          placeholder="Special Prompt/Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md mb-6 focus:ring-teal-500 focus:border-teal-500"
        />
        <div className="text-right">
          <button
            onClick={handleSpecialInstructions}
            className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition-all"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

// Components

const Header = ({ title }) => (
  <div className="flex items-center justify-between">
    <h2 className="text-xl font-semibold">{title}</h2>
  </div>
);

const InputField = ({ label, placeholder, value, onChange }) => (
  <div>
    <label className="block text-gray-600 mb-2 font-medium">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
    />
  </div>
);

const GeneratedContent = ({ title, content, onContentChange }) => (
  <div className="bg-blue-50 p-6 rounded-lg space-y-4 border border-gray-200 shadow-sm">
    <h3 className="text-lg font-semibold text-teal-600">{title}</h3>
    <textarea
      className="w-full p-4 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
      value={content}
      onChange={(e) => onContentChange(e.target.value)}
      rows="10"
    />
  </div>
);

export default ArticleWriting;
