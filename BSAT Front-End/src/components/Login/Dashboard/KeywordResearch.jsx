// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

// const KeywordResearch = ({ handleAnalyze }) => {
//   const [keyword, setKeyword] = useState('');
//   const [location, setLocation] = useState('');
//   const [dropdownOpen, setDropdownOpen] = useState(null);

//   const toggleDropdown = (index) => {
//     setDropdownOpen(dropdownOpen === index ? null : index);
//   };

//   return (
//     <div className="bg-white p-8 overflow-auto h-full">
//       <h2 className="text-2xl font-bold mb-4">Keyword Research</h2>
//       <div className="flex mb-4 space-x-2">
//         <input
//           type="text"
//           placeholder="Enter Keyword"
//           value={keyword}
//           onChange={(e) => setKeyword(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Enter Your Location"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//         <button
//           onClick={handleAnalyze}
//           className="bg-teal-600 text-white p-2 rounded hover:bg-teal-700 transition duration-200"
//         >
//           Analyze
//         </button>
//       </div>

//       <div className="flex justify-between mb-4">
//         <div className="flex space-x-2">
//           <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">All</button>
//           <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">Paid</button>
//           <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">Unpaid</button>
//           <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">Language</button>
//           <span className="py-2 px-4">Total Keywords: 900</span>
//         </div>
//         <button className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200">Pay Dues</button>
//       </div>

//       <table className="w-full bg-white shadow-md rounded-lg">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="py-2 px-4 text-left"><input type="checkbox" /></th>
//             <th className="py-2 px-4 text-left">Keywords</th>
//             <th className="py-2 px-4 text-left">Avg. Monthly Volume</th>
//             <th className="py-2 px-4 text-left">Competition</th>
//             <th className="py-2 px-4 text-left">Top to Page Bid</th>
//             <th className="py-2 px-4 text-left"></th>
//           </tr>
//         </thead>
//         <tbody>
//           {[
//             { name: 'Justin Septimus', volume: '1M - 10M', competition: 'Low', bid: '$200', compColor: 'text-green-500' },
//             { name: 'Anika Rhiel Madsen', volume: '1M - 10M', competition: 'Average', bid: '$300', compColor: 'text-orange-500' },
//             { name: 'Miracle Vaccaro', volume: '1M - 10M', competition: 'Low', bid: '$250', compColor: 'text-green-500' },
//             { name: 'Mira Herwitz', volume: '1M - 10M', competition: 'Low', bid: '$200', compColor: 'text-green-500' },
//             { name: 'Erin Levin', volume: '1M - 10M', competition: 'Low', bid: '$200', compColor: 'text-green-500' },
//             { name: 'Jaxson Siphiron', volume: '1M - 10M', competition: 'Average', bid: '$200', compColor: 'text-orange-500' },
//             { name: 'Mira Levin', volume: '1M - 10M', competition: 'High', bid: '$750', compColor: 'text-red-500' },
//             { name: 'Lincoln Levin', volume: '1M - 10M', competition: 'Low', bid: '$370', compColor: 'text-green-500' },
//           ].map((keyword, index) => (
//             <tr key={index} className="relative">
//               <td className="py-2 px-4 text-left"><input type="checkbox" /></td>
//               <td className="py-2 px-4">{keyword.name}</td>
//               <td className="py-2 px-4">{keyword.volume}</td>
//               <td className={`py-2 px-4 ${keyword.compColor}`}>{keyword.competition}</td>
//               <td className="py-2 px-4">{keyword.bid}</td>
//               <td className="py-2 px-4 text-right relative">
//                 <button onClick={() => toggleDropdown(index)} className="text-gray-500 hover:text-gray-700 focus:outline-none relative">
//                   <FontAwesomeIcon icon={faChevronDown} />
//                 </button>
//                 {dropdownOpen === index && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
//                     <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Action 1</a>
//                     <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Action 2</a>
//                     <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Action 3</a>
//                   </div>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default KeywordResearch;
// const key =
// "sk-myhealthservice-7Yu3lSkLyEdgKzz2jVk9T3BlbkFJHjUH1MnA5GelR0QlVvZV";






// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";

// const KeywordResearch = ({ handleAnalyze }) => {
//   const [keyword, setKeyword] = useState("");
//   const [location, setLocation] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [analysisResult, setAnalysisResult] = useState(null); // Changed to hold structured data
//   const [keywordsData, setKeywordsData] = useState([]); // Store keyword-related data

//   const toggleDropdown = (index) => {
//     setDropdownOpen(dropdownOpen === index ? null : index);
//   };

//   const key =
//     "sk-myhealthservice-7Yu3lSkLyEdgKzz2jVk9T3BlbkFJHjUH1MnA5GelR0QlVvZV";

//   const handleAnalyzeClick = async () => {
//     setLoading(true);
//     setAnalysisResult(null); // Clear previous result
//     try {
//       const response = await axios.post(
//         "https://api.openai.com/v1/chat/completions",
//         {
//           model: "gpt-3.5-turbo",
//           messages: [
//             {
//               role: "system",
//               content:
//                 "You are an SEO expert, please provide detailed SEO insights and keyword analysis.",
//             },
//             {
//               role: "user",
//               content: `Analyze the keyword "${keyword}" for location "${location}" and provide SEO insights.`,
//             },
//           ],
//           max_tokens: 250, // You can adjust the token limit as needed
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${key}`, // Replace with your actual key
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       const result = response.data.choices[0].message.content;
//       // Assuming the result is a structured object (this depends on the API's response format)
//       setAnalysisResult({
//         keyword: keyword,
//         location: location,
//         analysis: result.split("\n").map((line) => line.trim()), // Example of structuring response
//       });

//       // You can add more logic to fetch and set keyword-related data here if needed
//     } catch (error) {
//       console.error("Error analyzing keyword:", error);
//       setAnalysisResult({ error: "An error occurred while analyzing." });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white p-8 overflow-auto h-full">
//       <h2 className="text-2xl font-bold mb-4">Keyword Research</h2>
//       <div className="flex mb-4 space-x-2">
//         <input
//           type="text"
//           placeholder="Enter Keyword"
//           value={keyword}
//           onChange={(e) => setKeyword(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Enter Your Location"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded"
//         />
//         <button
//           onClick={handleAnalyzeClick}
//           className="bg-teal-600 text-white p-2 rounded hover:bg-teal-700 transition duration-200"
//         >
//           {loading ? "Analyzing..." : "Analyze"}
//         </button>
//       </div>

//       {analysisResult && analysisResult.analysis && (
//         <div className="mb-4 p-4 bg-teal-100 rounded">
//           <h3 className="text-xl font-semibold">Analysis Result</h3>
//           <table className="min-w-full bg-white shadow-md rounded-lg">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="py-2 px-4 text-left">Keyword</th>
//                 <th className="py-2 px-4 text-left">Location</th>
//                 <th className="py-2 px-4 text-left">SEO Insights</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td className="py-2 px-4">{analysisResult.keyword}</td>
//                 <td className="py-2 px-4">{analysisResult.location}</td>
//                 <td className="py-2 px-4">
//                   <ul className="list-disc pl-5">
//                     {analysisResult.analysis.map((line, index) => (
//                       <li key={index}>{line}</li>
//                     ))}
//                   </ul>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       )}

//       <div className="flex justify-between mb-4">
//         <div className="flex space-x-2">
//           <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">
//             All
//           </button>
//           <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">
//             Paid
//           </button>
//           <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">
//             Unpaid
//           </button>
//           <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">
//             Language
//           </button>
//           <span className="py-2 px-4">
//             Total Keywords: {keywordsData.length}
//           </span>
//         </div>
//         {/* <button className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200">
//           Pay Dues
//         </button> */}
//       </div>

//       {/* Keyword Table */}
//       <table className="w-full bg-white shadow-md rounded-lg">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="py-2 px-4 text-left">
//               <input type="checkbox" />
//             </th>
//             <th className="py-2 px-4 text-left">Keywords</th>
//             <th className="py-2 px-4 text-left">Avg. Monthly Volume</th>
//             <th className="py-2 px-4 text-left">Competition</th>
//             <th className="py-2 px-4 text-left">Top of Page Bid</th>
//             <th className="py-2 px-4 text-left"></th>
//           </tr>
//         </thead>
//         <tbody>
//           {keywordsData.map((keyword, index) => (
//             <tr key={index} className="relative">
//               <td className="py-2 px-4 text-left">
//                 <input type="checkbox" />
//               </td>
//               <td className="py-2 px-4">{keyword.name}</td>
//               <td className="py-2 px-4">{keyword.volume}</td>
//               <td className={`py-2 px-4 ${keyword.compColor}`}>
//                 {keyword.competition}
//               </td>
//               <td className="py-2 px-4">{keyword.bid}</td>
//               <td className="py-2 px-4 text-right relative">
//                 <button
//                   onClick={() => toggleDropdown(index)}
//                   className="text-gray-500 hover:text-gray-700 focus:outline-none relative"
//                 >
//                   <FontAwesomeIcon icon={faChevronDown} />
//                 </button>
//                 {dropdownOpen === index && (
//                   <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                     >
//                       Action 1
//                     </a>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                     >
//                       Action 2
//                     </a>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                     >
//                       Action 3
//                     </a>
//                   </div>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default KeywordResearch;














///           After fpy Presentation



// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";

// const KeywordResearch = ({ handleAnalyze }) => {
//     const [keyword, setKeyword] = useState("");
//     const [location, setLocation] = useState("");
//     const [dropdownOpen, setDropdownOpen] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [keywordsData, setKeywordsData] = useState([]);

//     const toggleDropdown = (index) => {
//         setDropdownOpen(dropdownOpen === index ? null : index);
//     };

//     const key = "sk-myhealthservice-7Yu3lSkLyEdgKzz2jVk9T3BlbkFJHjUH1MnA5GelR0QlVvZV";

//     const handleAnalyzeClick = async () => {
//         setLoading(true);
//         setKeywordsData([]);
//         try {
//             const response = await axios.post(
//                 "https://api.openai.com/v1/chat/completions",
//                 {
//                     model: "gpt-3.5-turbo",
//                     messages: [
//                         {
//                             role: "system",
//                             content: "You are an SEO expert. Provide related keywords, their search volume, competition level, and top of page bid."
//                         },
//                         {
//                             role: "user",
//                             content: `Analyze the keyword "${keyword}" for location "${location}" and provide related keywords with their average monthly volume, competition level, and top of page bid.`
//                         },
//                     ],
//                     max_tokens: 500,
//                 },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${key}`,
//                         "Content-Type": "application/json",
//                     },
//                 }
//             );

//             const resultText = response.data.choices[0].message.content;

//             // Parsing results with mock average values
//             const parsedKeywords = resultText.split("\n").map((line) => {
//                 const [name] = line.split("|").map((item) => item.trim());
                
//                 return {
//                     name: name || "N/A",
//                     volume: Math.floor(Math.random() * (10000 - 500 + 1) + 500), // Mocking monthly volume between 500 and 10,000
//                     competition: ["Low", "Medium", "High"][Math.floor(Math.random() * 3)], // Mocking competition
//                     bid: (Math.random() * (10 - 1) + 1).toFixed(2), // Mocking top of page bid between $1 and $10
//                 };
//             });

//             setKeywordsData(parsedKeywords);
//         } catch (error) {
//             console.error("Error analyzing keyword:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="bg-white p-8 overflow-auto h-full">
//             <h2 className="text-2xl font-bold mb-4">Keyword Research</h2>
//             <div className="flex mb-4 space-x-2">
//                 <input
//                     type="text"
//                     placeholder="Enter Keyword"
//                     value={keyword}
//                     onChange={(e) => setKeyword(e.target.value)}
//                     className="w-full p-2 border border-gray-300 rounded"
//                 />
//                 <input
//                     type="text"
//                     placeholder="Enter Your Location"
//                     value={location}
//                     onChange={(e) => setLocation(e.target.value)}
//                     className="w-full p-2 border border-gray-300 rounded"
//                 />
//                 <button
//                     onClick={handleAnalyzeClick}
//                     className="bg-teal-600 text-white p-2 rounded hover:bg-teal-700 transition duration-200"
//                 >
//                     {loading ? "Analyzing..." : "Analyze"}
//                 </button>
//             </div>

//             <div className="flex justify-between mb-4">
//                 <div className="flex space-x-2">
//                     <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">
//                         All
//                     </button>
//                     <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">
//                         Paid
//                     </button>
//                     <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">
//                         Unpaid
//                     </button>
//                     <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">
//                         Language
//                     </button>
//                     <span className="py-2 px-4">
//                         Total Keywords: {keywordsData?.length || 0}
//                     </span>
//                 </div>
//             </div>

//             {/* Keyword Table with Accurate Data */}
//             <table className="w-full bg-white shadow-md rounded-lg">
//                 <thead>
//                     <tr className="bg-gray-200">
//                         <th className="py-2 px-4 text-left">Keyword</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {keywordsData.length > 0 ? (
//                         keywordsData.map((keyword, index) => (
//                             <React.Fragment key={index}>
//                                 <tr>
//                                     {/* Only displaying the Keyword name */}
//                                     <td className="py-2 px-4 font-semibold">{keyword.name}</td>
//                                 </tr>
//                                 {/* Separator Row */}
//                                 <tr>
//                                     <td colSpan="1" className="py-2">
//                                         <hr />
//                                     </td>
//                                 </tr>
//                             </React.Fragment>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="1" className="text-center py-4">
//                                 No keyword data available.
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default KeywordResearch;








////////      Design Changes   ////////////





// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";

// const KeywordResearch = ({ handleAnalyze }) => {
//     const [keyword, setKeyword] = useState("");
//     const [location, setLocation] = useState("");
//     const [dropdownOpen, setDropdownOpen] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [keywordsData, setKeywordsData] = useState([]);

//     const toggleDropdown = (index) => {
//         setDropdownOpen(dropdownOpen === index ? null : index);
//     };

//     const key = "sk-myhealthservice-7Yu3lSkLyEdgKzz2jVk9T3BlbkFJHjUH1MnA5GelR0QlVvZV";

//     const handleAnalyzeClick = async () => {
//         setLoading(true);
//         setKeywordsData([]);
//         try {
//             const response = await axios.post(
//                 "https://api.openai.com/v1/chat/completions",
//                 {
//                     model: "gpt-3.5-turbo",
//                     messages: [
//                         {
//                             role: "system",
//                             content: "You are an SEO expert. Provide related keywords, their search volume, competition level, and top of page bid."
//                         },
//                         {
//                             role: "user",
//                             content: `Analyze the keyword "${keyword}" for location "${location}" and provide related keywords with their average monthly volume, competition level, and top of page bid.`
//                         },
//                     ],
//                     max_tokens: 500,
//                 },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${key}`,
//                         "Content-Type": "application/json",
//                     },
//                 }
//             );

//             const resultText = response.data.choices[0].message.content;

//             // Parsing results with mock average values
//             const parsedKeywords = resultText.split("\n").map((line) => {
//                 const [name] = line.split("|").map((item) => item.trim());
                
//                 return {
//                     name: name || "",
//                     volume: Math.floor(Math.random() * (10000 - 500 + 1) + 500), // Mocking monthly volume between 500 and 10,000
//                     competition: ["Low", "Medium", "High"][Math.floor(Math.random() * 3)], // Mocking competition
//                     bid: (Math.random() * (10 - 1) + 1).toFixed(2), // Mocking top of page bid between $1 and $10
//                 };
//             });

//             setKeywordsData(parsedKeywords);
//         } catch (error) {
//             console.error("Error analyzing keyword:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="bg-white p-8 overflow-auto h-full">
//             <h2 className="text-2xl font-bold mb-4">Keyword Research</h2>
//             <div className="flex mb-4 space-x-2">
//                 <input
//                     type="text"
//                     placeholder="Enter Keyword"
//                     value={keyword}
//                     onChange={(e) => setKeyword(e.target.value)}
//                     className="w-full p-2 border border-gray-300 rounded"
//                 />
//                 <input
//                     type="text"
//                     placeholder="Enter Your Location"
//                     value={location}
//                     onChange={(e) => setLocation(e.target.value)}
//                     className="w-full p-2 border border-gray-300 rounded"
//                 />
//                 <button
//                     onClick={handleAnalyzeClick}
//                     className="bg-teal-600 text-white p-2 rounded hover:bg-teal-700 transition duration-200"
//                 >
//                     {loading ? "Analyzing..." : "Analyze"}
//                 </button>
//             </div>

//             <div className="flex justify-between mb-4">
//                 <div className="flex space-x-2">
//                     <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">
//                         All
//                     </button>
//                     {/* <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">
//                         Paid
//                     </button>
//                     <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">
//                         Unpaid
//                     </button>
//                     <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">
//                         Language
//                     </button>
//                     <span className="py-2 px-4">
//                         Total Keywords: {keywordsData?.length || 0}
//                     </span> */}
//                 </div>
//             </div>

//             {/* Keyword Table with Accurate Data */}
//             <table className="w-full bg-white shadow-md rounded-lg">
//                 <thead>
//                     <tr className="bg-gray-200">
//                         <th className="py-2 px-4 text-left">Keyword</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {keywordsData.length > 0 ? (
//                         keywordsData.map((keyword, index) => (
//                             <React.Fragment key={index}>
//                                 <tr>
//                                     {/* Only displaying the Keyword name */}
//                                     <td className="py-2 px-4 font-semibold">{keyword.name}</td>
//                                 </tr>
//                                 {/* Separator Row */}
//                                 <tr>
//                                     <td colSpan="1" className="py-2">
//                                         <hr />
//                                     </td>
//                                 </tr>
//                             </React.Fragment>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="1" className="text-center py-4">
//                                 No keyword data available.
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default KeywordResearch;










//////////  Export Button Design  ////////////



import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const KeywordResearch = ({ handleAnalyze }) => {
    const [keyword, setKeyword] = useState("");
    const [location, setLocation] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [loading, setLoading] = useState(false);
    const [keywordsData, setKeywordsData] = useState([]);

    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    const key = "sk-myhealthservice-7Yu3lSkLyEdgKzz2jVk9T3BlbkFJHjUH1MnA5GelR0QlVvZV";

    const handleAnalyzeClick = async () => {
        setLoading(true);
        setKeywordsData([]);
        try {
            const response = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    model: "gpt-3.5-turbo",
                    messages: [
                        {
                            role: "system",
                            content: "You are an SEO expert. Provide related keywords, their search volume, competition level, and top of page bid."
                        },
                        {
                            role: "user",
                            content: `Analyze the keyword "${keyword}" for location "${location}" and provide related keywords with their average monthly volume, competition level, and top of page bid.`
                        },
                    ],
                    max_tokens: 500,
                },
                {
                    headers: {
                        Authorization: `Bearer ${key}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            const resultText = response.data.choices[0].message.content;

            // Parsing results with mock average values
            const parsedKeywords = resultText.split("\n").map((line) => {
                const [name] = line.split("|").map((item) => item.trim());

                return {
                    name: name || "",
                    volume: Math.floor(Math.random() * (10000 - 500 + 1) + 500), // Mocking monthly volume between 500 and 10,000
                    competition: ["Low", "Medium", "High"][Math.floor(Math.random() * 3)], // Mocking competition
                    bid: (Math.random() * (10 - 1) + 1).toFixed(2), // Mocking top of page bid between $1 and $10
                };
            });

            setKeywordsData(parsedKeywords);
        } catch (error) {
            console.error("Error analyzing keyword:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = () => {
        const csvContent = "Keyword,Volume,Competition,Bid\n" + keywordsData.map(keyword => 
            `${keyword.name},${keyword.volume},${keyword.competition},${keyword.bid}`).join("\n");

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", "keywords_data.csv");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div className="bg-white p-8 overflow-auto h-full">
            <h2 className="text-2xl font-bold mb-4">Keyword Research</h2>
            <div className="flex mb-4 space-x-2">
                <input
                    type="text"
                    placeholder="Enter Keyword"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    placeholder="Enter Your Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                    onClick={handleAnalyzeClick}
                    className="bg-teal-600 text-white p-2 rounded hover:bg-teal-700 transition duration-200"
                >
                    {loading ? "Analyzing..." : "Analyze"}
                </button>
            </div>

            <div className="flex justify-between mb-4">
                <div className="flex space-x-2">
                    <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">
                        All
                    </button>
                    {/* Add the download button */}
                    {keywordsData.length > 0 && (
                        <button
                            onClick={handleDownload}
                            className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200"
                        >
                            Download All
                        </button>
                    )}
                </div>
            </div>

            {/* Keyword Table with Accurate Data */}
            <table className="w-full bg-white shadow-md rounded-lg">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="py-2 px-4 text-left">Keyword</th>
                    </tr>
                </thead>
                <tbody>
                    {keywordsData.length > 0 ? (
                        keywordsData.map((keyword, index) => (
                            <React.Fragment key={index}>
                                <tr>
                                    {/* Only displaying the Keyword name */}
                                    <td className="py-2 px-4 font-semibold">{keyword.name}</td>
                                </tr>
                                {/* Separator Row */}
                                <tr>
                                    <td colSpan="1" className="py-2">
                                        <hr />
                                    </td>
                                </tr>
                            </React.Fragment>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="1" className="text-center py-4">
                                No keyword data available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default KeywordResearch;
