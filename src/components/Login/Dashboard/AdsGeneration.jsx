// import React, { useState } from 'react';

// const AdsGeneration = () => {
//   const [ads, setAds] = useState([]);
//   const [adContent, setAdContent] = useState('');

//   // Handler to simulate ad generation
//   const handleGenerateAds = () => {
//     if (adContent.trim()) {
//       setAds([...ads, adContent]); // Append the new ad to the list
//       setAdContent(''); // Clear the input field
//     }
//   };

//   return (
//     <div className="bg-white p-8 overflow-auto h-full">
//       <h2 className="text-2xl font-semibold mb-4">Ads Generation</h2>

//       <input
//         type="text"
//         placeholder="Enter Ad Content"
//         value={adContent}
//         onChange={(e) => setAdContent(e.target.value)}
//         className="w-full p-2 border border-gray-300 rounded mb-4"
//       />

//       <button
//         onClick={handleGenerateAds}
//         className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200"
//       >
//         Generate Ads
//       </button>

//       <div className="mt-4">
//         <h3 className="text-lg font-semibold mb-2">Generated Ads</h3>
//         {ads.length > 0 ? (
//           <ul className="space-y-2">
//             {ads.map((content, index) => (
//               <li key={index} className="p-2 bg-gray-100 rounded">
//                 {content}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No ads generated yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };





// export default AdsGeneration;




// import axios from "axios";
// import React, { useState } from "react";

// const AdsGeneration = () => {
//   const [ads, setAds] = useState([]);
//   const [adTitle, setAdTitle] = useState("");
//   const [adDescription, setAdDescription] = useState("");
//   const [image, setImage] = useState(null);

//   // Handler to simulate ad generation
//   const handleGenerateAds = async () => {
//     await handleImageEnhanceApiCall();
//     // if (adTitle.trim() && adDescription.trim()) {
//     //   const newAd = { title: adTitle, description: adDescription, image };
//     //   setAds([...ads, newAd]); // Append the new ad to the list
//     //   setAdTitle(""); // Clear the title input
//     //   setAdDescription(""); // Clear the description input
//     //   setImage(null); // Clear the image
//     // }
//   };

//   const handleImageEnhanceApiCall = async () => {
//     let formData = new FormData();
//     console.log("image to be uploaded is ; ", image);
//     formData.append("file", image);
//     formData.append("processingType", "enhance");
//     const respo = await axios.post("http://localhost:8080/api/v1/images", formData);

//     console.log("response is ; ", respo.data);

//     const newAd = { title: adTitle, description: adDescription, image: respo.data };
//     console.log("new add is :, ", newAd );
//     setAds([...ads, newAd]);
//     setAdTitle(""); // Clear the title input
//     setAdDescription(""); // Clear the description input
//     // setImage(null);
//   }

//   // Handler for image upload
//   const handleImageChange = (e) => {
//     console.log("image i s; ", e.target.files);
//     setImage(e.target.files[0]);
//     // const file = e.target.files[0];
//     // if (file) {
//     //   setImage(URL.createObjectURL(file)); // Set the uploaded image URL
//     // }
//   };

//   return (
//     <div className="bg-white p-8 overflow-auto h-full">
//       <h2 className="text-2xl font-semibold mb-4">Ads Generation</h2>

//       {/* Title Input */}
//       <input
//         type="text"
//         placeholder="Enter Ad Title"
//         value={adTitle}
//         onChange={(e) => setAdTitle(e.target.value)}
//         className="w-full p-2 border border-gray-300 rounded mb-4"
//       />

//       {/* Description Input */}
//       <input
//         type="text"
//         placeholder="Enter Ad Description"
//         value={adDescription}
//         onChange={(e) => setAdDescription(e.target.value)}
//         className="w-full p-2 border border-gray-300 rounded mb-4"
//       />

//       {/* Image Upload */}
//       <div className="mb-4">
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="border border-gray-300 rounded p-2"
//         />
//         {/* {image && (
//           <div className="mt-2">
//             <img
//               src={image}
//               alt="Uploaded Ad"
//               className="w-32 h-32 object-cover rounded"
//             />
//           </div>
//         )} */}  
//       </div>

//       {/* Generate Ads Button */}
//       <button
//         onClick={handleGenerateAds}
//         className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200"
//       >
//         Generate Ads
//       </button>

//       {/* Display Generated Ads */}
//       <div className="mt-4" >
//         <h3 className="text-lg font-semibold mb-2">Generated Ads</h3>
//         {ads.length > 0 ? (
//           <ul className="space-y-2">
//             {ads.map((ad, index) => (
//               <li key={index} className="p-4 bg-gray-100 rounded">
//                 <h4 className="font-semibold text-teal-600">{ad.title}</h4>
//                 <p>{ad.description}</p>
//                 {ad?.image && (
//                   <img
//                     src={ad.image}
//                     alt="Ad Image"
//                     className="w-32 h-32 object-cover rounded mt-2"
//                   />
//                 )}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No ads generated yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdsGeneration;













////      Changings after Final Presentation     ////




// import axios from "axios";
// import React, { useState } from "react";

// const AdsGeneration = () => {
//   const [ads, setAds] = useState([]);
//   const [productName, setProductName] = useState(""); // Changed from adTitle to productName
//   const [productDescription, setProductDescription] = useState(""); // Changed from adDescription to productDescription
//   const [image, setImage] = useState(null);

//   // Handler to simulate ad generation
//   const handleGenerateAds = async () => {
//     await handleImageEnhanceApiCall(); // Image enhancement call
//     if (productName.trim() && productDescription.trim()) {
//       // Call GPT API for copywriting and social media ads generation
//       const gptAds = await generateAdsWithOpenAI(productName, productDescription);

//       const newAd = {
//         title: productName,
//         description: productDescription,
//         copywriting: gptAds.copywriting,
//         socialMediaAds: gptAds.socialMediaAds,
//         image: gptAds.image || image, // Use image if available
//       };
//       setAds([...ads, newAd]);
//       setProductName(""); // Clear the product name input
//       setProductDescription(""); // Clear the description input
//       setImage(null); // Clear the image
//     }
//   };

//   const handleImageEnhanceApiCall = async () => {
//     if (!image) return;
//     let formData = new FormData();
//     console.log("Image to be uploaded is: ", image);
//     formData.append("file", image);
//     formData.append("processingType", "enhance");
//     const respo = await axios.post("http://localhost:8080/api/v1/images", formData);
//     console.log("Image enhancement response: ", respo.data);
//   };

//   // GPT Ads generation function
//   const generateAdsWithOpenAI = async (productName, productDescription) => {
//     try {
//       const response = await axios.post(
//         'https://api.openai.com/v1/chat/completions',
//         {
//           model: 'gpt-3.5-turbo',
//           messages: [
//             {
//               role: 'user',
//               content: `Generate copywriting lines (1 copywriting line then next copywriting line on next line) and social media ads Hashtags for the following product:\nName: ${productName}\nDescription: ${productDescription}`
//             }
//           ]
//         },
//         {
//           headers: {
//             'Authorization': `Bearer sk-myhealthservice-7Yu3lSkLyEdgKzz2jVk9T3BlbkFJHjUH1MnA5GelR0QlVvZV`, // Replace with your OpenAI API key securely
//             'Content-Type': 'application/json'
//           }
//         }
//       );
//       console.log('Generated Ads:', response.data);
//       // Assuming response contains copywriting and social media ads in the message content
//       return {
//         copywriting: response.data.choices[0].message.content,
//         socialMediaAds: response.data.choices[0].message.content, // Modify based on actual response
//         image: "https://api.deepai.org/job-view-file/4ca9b273-d8b1-4d90-8561-5222b33f796d/outputs/output.jpg" // Image URL from enhancement API
//       };
//     } catch (error) {
//       console.error('Error generating ads:', error);
//       return { copywriting: "", socialMediaAds: "" };
//     }
//   };

//   // Handler for image upload
//   const handleImageChange = (e) => {
//     console.log("Image is: ", e.target.files);
//     setImage(e.target.files[0]);
//   };

//   return (
//     <div className="bg-white p-8 overflow-auto h-full">
//       <h2 className="text-2xl font-semibold mb-4">Ads Generation</h2>

//       {/* Product Name Input */}
//       <input
//         type="text"
//         placeholder="Enter Product Name"
//         value={productName}
//         onChange={(e) => setProductName(e.target.value)}
//         className="w-full p-2 border border-gray-300 rounded mb-4"
//       />

//       {/* Product Description Input */}
//       <input
//         type="text"
//         placeholder="Enter Product Description"
//         value={productDescription}
//         onChange={(e) => setProductDescription(e.target.value)}
//         className="w-full p-2 border border-gray-300 rounded mb-4"
//       />

//       {/* Image Upload */}
//       <div className="mb-4">
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="border border-gray-300 rounded p-2"
//         />
//       </div>

//       {/* Generate Ads Button */}
//       <button
//         onClick={handleGenerateAds}
//         className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200"
//       >
//         Generate Ads
//       </button>

//       {/* Display Generated Ads */}
//       <div className="mt-4">
//         <h3 className="text-lg font-semibold mb-2">Generated Ads</h3>
//         {ads.length > 0 ? (
//           <ul className="space-y-2">
//             {ads.map((ad, index) => (
//               <li key={index} className="p-4 bg-gray-100 rounded">
//                 <h4 className="font-semibold text-teal-600">{ad.title}</h4>
//                 <p>{ad.description}</p>
//                 <div>
//                   <h5 className="font-semibold">Copywriting:</h5>
//                   <p>{ad.copywriting}</p>
//                 </div>
//                 <div>
//                   <h5 className="font-semibold">Social Media Ads:</h5>
//                   <p>{ad.socialMediaAds}</p>
//                 </div>
//                 {ad?.image && (
//                   <img
//                     src={ad.image}
//                     alt="Ad Image"
//                     className="w-32 h-32 object-cover rounded mt-2"
//                   />
//                 )}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No ads generated yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdsGeneration;



























// import axios from "axios";
// import React, { useState } from "react";

// const AdsGeneration = () => {
//   const [ads, setAds] = useState([]);
//   const [adTitle, setAdTitle] = useState("");
//   const [adDescription, setAdDescription] = useState("");
//   const [image, setImage] = useState(null);

//   const handleGenerateAds = async () => {
//     await handleImageEnhanceApiCall();
//   };

//   const handleImageEnhanceApiCall = async () => {
//     let formData = new FormData();
//     formData.append("file", image);
//     formData.append("processingType", "enhance");
//     const respo = await axios.post("http://localhost:8080/api/v1/images", formData);

//     const newAd = { title: adTitle, description: adDescription, image: respo.data };
//     setAds([...ads, newAd]);
//     setAdTitle("");
//     setAdDescription("");
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleDownloadImage = async (imageUrl) => {
//     try {
//       const response = await axios.get(imageUrl, { responseType: 'blob' });
//       const blob = new Blob([response.data], { type: 'image/jpeg' });
//       const link = document.createElement('a');
//       link.href = URL.createObjectURL(blob);
//       link.setAttribute('download', 'enhanced-image.jpg');
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       URL.revokeObjectURL(link.href);
//     } catch (error) {
//       console.error("Error downloading the image:", error);
//     }
//   };

//   return (
//     <div className="bg-white p-8 overflow-auto h-full">
//       <h2 className="text-2xl font-semibold mb-4">Ads Generation</h2>

//       <input
//         type="text"
//         placeholder="Enter Ad Title"
//         value={adTitle}
//         onChange={(e) => setAdTitle(e.target.value)}
//         className="w-full p-2 border border-gray-300 rounded mb-4"
//       />

//       <input
//         type="text"
//         placeholder="Enter Ad Description"
//         value={adDescription}
//         onChange={(e) => setAdDescription(e.target.value)}
//         className="w-full p-2 border border-gray-300 rounded mb-4"
//       />

//       <div className="mb-4">
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="border border-gray-300 rounded p-2"
//         />
//       </div>

//       <button
//         onClick={handleGenerateAds}
//         className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200"
//       >
//         Generate Ads
//       </button>

//       <div className="mt-4">
//         <h3 className="text-lg font-semibold mb-2">Generated Ads</h3>
//         {ads.length > 0 ? (
//           <ul className="space-y-2">
//             {ads.map((ad, index) => (
//               <li key={index} className="p-4 bg-gray-100 rounded">
//                 <h4 className="font-semibold text-teal-600">{ad.title}</h4>
//                 <p>{ad.description}</p>
//                 {ad?.image && (
//                   <div>
//                     <img
//                       src={ad.image}
//                       alt="Ad Image"
//                       className="w-32 h-32 object-cover rounded mt-2"
//                     />
//                     <button
//                       onClick={() => handleDownloadImage(ad.image)}
//                       className="mt-2 bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700"
//                     >
//                       Download Enhanced Image
//                     </button>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No ads generated yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdsGeneration;















// import axios from "axios";
// import React, { useState } from "react";

// const AdsGeneration = () => {
//   const [ads, setAds] = useState([]);
//   const [adTitle, setAdTitle] = useState("");
//   const [adDescription, setAdDescription] = useState("");
//   const [image, setImage] = useState(null);

//   const handleGenerateAds = async () => {
//     await handleImageEnhanceApiCall();
//   };

//   const handleImageEnhanceApiCall = async () => {
//     let formData = new FormData();
//     formData.append("file", image);
//     formData.append("processingType", "enhance");
//     const respo = await axios.post("http://localhost:8080/api/v1/images", formData);

//     const newAd = { title: adTitle, description: adDescription, image: respo.data };
//     setAds([...ads, newAd]);
//     setAdTitle("");
//     setAdDescription("");
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleDownloadImage = async (imageUrl) => {
//     try {
//       const response = await axios.get(imageUrl, { responseType: 'blob' });
//       const blob = new Blob([response.data], { type: 'image/jpeg' });
//       const link = document.createElement('a');
//       link.href = URL.createObjectURL(blob);
//       link.setAttribute('download', 'enhanced-image.jpg');
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       URL.revokeObjectURL(link.href);
//     } catch (error) {
//       console.error("Error downloading the image:", error);
//     }
//   };

//   return (
//     <div className="bg-white p-8 overflow-auto h-full">
//       <h2 className="text-2xl font-semibold mb-4">Ads Generation</h2>

//       <input
//         type="text"
//         placeholder="Enter Ad Title"
//         value={adTitle}
//         onChange={(e) => setAdTitle(e.target.value)}
//         className="w-full p-2 border border-gray-300 rounded mb-4"
//       />

//       <input
//         type="text"
//         placeholder="Enter Ad Description"
//         value={adDescription}
//         onChange={(e) => setAdDescription(e.target.value)}
//         className="w-full p-2 border border-gray-300 rounded mb-4"
//       />

//       <div className="mb-4">
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="border border-gray-300 rounded p-2"
//         />
//       </div>

//       <button
//         onClick={handleGenerateAds}
//         className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200"
//       >
//         Generate Ads
//       </button>

//       <div className="mt-4">
//         <h3 className="text-lg font-semibold mb-2">Generated Ads</h3>
//         {ads.length > 0 ? (
//           <ul className="space-y-2">
//             {ads.map((ad, index) => (
//               <li key={index} className="p-4 bg-gray-100 rounded">
//                 <h4 className="font-semibold text-teal-600">{ad.title}</h4>
//                 <p>{ad.description}</p>
//                 {ad?.image && (
//                   <div>
//                     <img
//                       src={ad.image}
//                       alt="Ad Image"
//                       className="w-32 h-32 object-cover rounded mt-2"
//                     />
//                     <button
//                       onClick={() => handleDownloadImage(ad.image)}
//                       className="mt-2 bg-teal-600 text-white py-1 px-3 rounded hover:bg-teal-700 transition duration-200"
//                     >
//                       Download Enhanced Image
//                     </button>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No ads generated yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdsGeneration;














// import axios from "axios";
// import React, { useState } from "react";

// const AdsGeneration = () => {
//   const [ads, setAds] = useState([]);
//   const [adTitle, setAdTitle] = useState("");
//   const [adDescription, setAdDescription] = useState("");
//   const [image, setImage] = useState(null);
//   const [copyLines, setCopyLines] = useState("");
//   const [socialMediaTags, setSocialMediaTags] = useState("");

//   const handleGenerateAds = async () => {
//     await handleImageEnhanceApiCall();
//     await generateCopyLinesAndTags();
//   };

//   const handleImageEnhanceApiCall = async () => {
//     let formData = new FormData();
//     formData.append("file", image);
//     formData.append("processingType", "enhance");
//     const respo = await axios.post("http://localhost:8080/api/v1/images", formData);

//     const newAd = { title: adTitle, description: adDescription, image: respo.data };
//     setAds([...ads, newAd]);
//     setAdTitle("");
//     setAdDescription("");
//   };

//   const generateCopyLinesAndTags = async () => {
//     try {
//       const gptResponse = await axios.post(
//         "https://api.openai.com/v1/chat/completions",
//         {
//           model: "gpt-3.5-turbo",
//           messages: [
//             { role: "system", content: "You are a helpful Copywritter. Generate copy lines and social media tags for advertisements." },
//             { role: "user", content: `Generate copy lines and social media tags for this ad title: ${adTitle} and description: ${adDescription}` },
//           ],
//           temperature: 0.7,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer sk-myhealthservice-7Yu3lSkLyEdgKzz2jVk9T3BlbkFJHjUH1MnA5GelR0QlVvZV`,
//           },
//         }
//       );

//       const generatedText = gptResponse.data.choices[0].message.content.trim().split("\n\n");
//       setCopyLines(generatedText[0]);
//       setSocialMediaTags(generatedText[1]);
//     } catch (error) {
//       console.error(
//         "Error generating copy lines and tags:",
//         error.response ? error.response.data : error.message
//       );
//     }
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleDownloadImage = async (imageUrl) => {
//     try {
//       const response = await axios.get(imageUrl, { responseType: 'blob' });
//       const blob = new Blob([response.data], { type: 'image/jpeg' });
//       const link = document.createElement('a');
//       link.href = URL.createObjectURL(blob);
//       link.setAttribute('download', 'enhanced-image.jpg');
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       URL.revokeObjectURL(link.href);
//     } catch (error) {
//       console.error("Error downloading the image:", error);
//     }
//   };

//   return (
//     <div className="bg-white p-8 overflow-auto h-full">
//       <h2 className="text-2xl font-semibold mb-4">Ads Generation</h2>

//       <input
//         type="text"
//         placeholder="Enter Product Name"
//         value={adTitle}
//         onChange={(e) => setAdTitle(e.target.value)}
//         className="w-full p-2 border border-gray-300 rounded mb-4"
//       />

//       <input
//         type="text"
//         placeholder="Enter Product Description"
//         value={adDescription}
//         onChange={(e) => setAdDescription(e.target.value)}
//         className="w-full p-2 border border-gray-300 rounded mb-4"
//       />

//       <div className="mb-4">
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="border border-gray-300 rounded p-2"
//         />
//       </div>

//       <button
//         onClick={handleGenerateAds}
//         className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200"
//       >
//         Generate Ads
//       </button>

//       <div className="mt-4">
//         <h3 className="text-lg font-semibold mb-2">Generated Ads</h3>
//         {ads.length > 0 ? (
//           <ul className="space-y-2">
//             {ads.map((ad, index) => (
//               <li key={index} className="p-4 bg-gray-100 rounded">
//                 <h4 className="font-semibold text-teal-600">{ad.title}</h4>
//                 <p>{ad.description}</p>
//                 {ad?.image && (
//                   <div>
//                     <img
//                       src={ad.image}
//                       alt="Ad Image"
//                       className="w-32 h-32 object-cover rounded mt-2"
//                     />
//                     <button
//                       onClick={() => handleDownloadImage(ad.image)}
//                       className="mt-2 bg-teal-600 text-white py-1 px-3 rounded hover:bg-teal-700 transition duration-200"
//                     >
//                       Download Enhanced Image
//                     </button>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No ads generated yet.</p>
//         )}
//       </div>

//       <div className="mt-8">
//         <h3 className="text-lg font-semibold mb-2">Copy Lines</h3>
//         <p>{copyLines}</p>
//         <h3 className="text-lg font-semibold mt-4 mb-2">Social Media Tags</h3>
//         <p>{socialMediaTags}</p>
//       </div>
//     </div>
//   );
// };

// export default AdsGeneration;














// import axios from "axios";
// import React, { useState } from "react";

// const AdsGeneration = () => {
//   const [ads, setAds] = useState([]);
//   const [adTitle, setAdTitle] = useState("");
//   const [adDescription, setAdDescription] = useState("");
//   const [image, setImage] = useState(null);
//   const [copyLines, setCopyLines] = useState("");
//   const [socialMediaTags, setSocialMediaTags] = useState("");
//   const [isGenerating, setIsGenerating] = useState(false);

//   const handleGenerateAds = async () => {
//     setIsGenerating(true);
//     await handleImageEnhanceApiCall();
//     await generateCopyLinesAndTags();
//     setIsGenerating(false);
//   };

//   const handleImageEnhanceApiCall = async () => {
//     let formData = new FormData();
//     formData.append("file", image);
//     formData.append("processingType", "enhance");
//     const respo = await axios.post("http://localhost:8080/api/v1/images", formData);

//     const newAd = { title: adTitle, description: adDescription, image: respo.data };
//     setAds([...ads, newAd]);
//     setAdTitle("");
//     setAdDescription("");
//   };

//   const generateCopyLinesAndTags = async () => {
//     try {
//       const gptResponse = await axios.post(
//         "https://api.openai.com/v1/chat/completions",
//         {
//           model: "gpt-3.5-turbo",
//           messages: [
//             { role: "system", content: "Generate engaging and clearly separated copy lines and social media tags based on the provided ad title and description for maximum impact. And Don't write words like Copy lines: , Social media tags: in response. Make To the Point" },
//             { role: "user", content: `Title: ${adTitle}. Description: ${adDescription}. Provide 5 creative copy lines followed by 5 relevant social media tags.` },
//           ],
//           temperature: 0.7,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer sk-myhealthservice-7Yu3lSkLyEdgKzz2jVk9T3BlbkFJHjUH1MnA5GelR0QlVvZV`,
//           },
//         }
//       );

//       const generatedText = gptResponse.data.choices[0].message.content.trim().split("\n\n");
//       const [copySection, tagSection] = generatedText;
//       setCopyLines(copySection.replace("Copy Lines:", "").trim());
//       setSocialMediaTags(tagSection.replace("Social Media Tags:", "").trim());
//     } catch (error) {
//       console.error(
//         "Error generating copy lines and tags:",
//         error.response ? error.response.data : error.message
//       );
//     }
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleDownloadImage = async (imageUrl) => {
//     try {
//       const response = await axios.get(imageUrl, { responseType: 'blob' });
//       const blob = new Blob([response.data], { type: 'image/jpeg' });
//       const link = document.createElement('a');
//       link.href = URL.createObjectURL(blob);
//       link.setAttribute('download', 'enhanced-image.jpg');
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//       URL.revokeObjectURL(link.href);
//     } catch (error) {
//       console.error("Error downloading the image:", error);
//     }
//   };

//   return (
//     <div className="bg-white p-8 overflow-auto h-full">
//       <h2 className="text-2xl font-semibold mb-4">Ads Generation</h2>

//       <input
//         type="text"
//         placeholder="Enter Ad Title"
//         value={adTitle}
//         onChange={(e) => setAdTitle(e.target.value)}
//         className="w-full p-2 border border-gray-300 rounded mb-4"
//       />

//       <input
//         type="text"
//         placeholder="Enter Ad Description"
//         value={adDescription}
//         onChange={(e) => setAdDescription(e.target.value)}
//         className="w-full p-2 border border-gray-300 rounded mb-4"
//       />

//       <div className="mb-4">
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImageChange}
//           className="border border-gray-300 rounded p-2"
//         />
//       </div>

//       <button
//         onClick={handleGenerateAds}
//         className={`bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200 ${isGenerating ? "opacity-50 cursor-not-allowed" : ""}`}
//         disabled={isGenerating}
//       >
//         {isGenerating ? "Generating Ad..." : "Generate Ads"}
//       </button>

//       <div className="mt-4">
//         <h3 className="text-lg font-semibold mb-2">Generated Ads</h3>
//         {ads.length > 0 ? (
//           <ul className="space-y-2">
//             {ads.map((ad, index) => (
//               <li key={index} className="p-4 bg-white rounded">
//                 <h4 className="font-semibold text-teal-600">{ad.title}</h4>
//                 <p>{ad.description}</p>
//                 {ad?.image && (
//                   <div>
//                     <img
//                       src={ad.image}
//                       alt="Ad Image"
//                       className="w-32 h-32 object-cover rounded mt-2"
//                     />
//                     <button
//                       onClick={() => handleDownloadImage(ad.image)}
//                       className="mt-2 bg-teal-600 text-white py-1 px-3 rounded hover:bg-teal-700 transition duration-200"
//                     >
//                       Download Enhanced Image
//                     </button>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No ads generated yet.</p>
//         )}
//       </div>

//       <div className="mt-8">
//         <h3 className="text-lg font-semibold mb-2">Copy Lines</h3>
//         <p>{copyLines}</p>
//         <h3 className="text-lg font-semibold mt-4 mb-2">Social Media Tags</h3>
//         <p>{socialMediaTags}</p>
//       </div>
//     </div>
//   );
// };

// export default AdsGeneration;





import axios from "axios";
import React, { useState } from "react";

const AdsGeneration = () => {
  const [ads, setAds] = useState([]);
  const [adTitle, setAdTitle] = useState("");
  const [adDescription, setAdDescription] = useState("");
  const [image, setImage] = useState(null);
  const [copyLines, setCopyLines] = useState("");
  const [socialMediaTags, setSocialMediaTags] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State to hold error message

  const handleGenerateAds = async () => {
    // Validation for required fields
    if (!adTitle || !adDescription || !image) {
      setErrorMessage("All fields are required: Ad Title, Ad Description, and Image.");
      return; // Prevent form submission if validation fails
    }
    setErrorMessage(""); // Clear error message if validation passes

    setIsGenerating(true);
    await handleImageEnhanceApiCall();
    await generateCopyLinesAndTags();
    setIsGenerating(false);
  };

  const handleImageEnhanceApiCall = async () => {
    let formData = new FormData();
    formData.append("file", image);
    formData.append("processingType", "enhance");
    const respo = await axios.post("http://localhost:8080/api/v1/images", formData);

    const newAd = { title: adTitle, description: adDescription, image: respo.data };
    setAds([...ads, newAd]);
    setAdTitle("");
    setAdDescription("");
  };

  const generateCopyLinesAndTags = async () => {
    try {
      const gptResponse = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "Generate engaging and clearly separated copy lines and social media tags based on the provided ad title and description for maximum impact. And Don't write words like Copy lines: , Social media tags: in response. Make To the Point" },
            { role: "user", content: `Title: ${adTitle}. Description: ${adDescription}. Provide 5 creative copy lines followed by 5 relevant social media tags.` },
          ],
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer sk-myhealthservice-7Yu3lSkLyEdgKzz2jVk9T3BlbkFJHjUH1MnA5GelR0QlVvZV`,
          },
        }
      );

      const generatedText = gptResponse.data.choices[0].message.content.trim().split("\n\n");
      const [copySection, tagSection] = generatedText;
      setCopyLines(copySection.replace("Copy Lines:", "").trim());
      setSocialMediaTags(tagSection.replace("Social Media Tags:", "").trim());
    } catch (error) {
      console.error(
        "Error generating copy lines and tags:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleDownloadImage = async (imageUrl) => {
    try {
      const response = await axios.get(imageUrl, { responseType: 'blob' });
      const blob = new Blob([response.data], { type: 'image/jpeg' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.setAttribute('download', 'enhanced-image.jpg');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };

  return (
    <div className="bg-white p-8 overflow-auto h-full">
      <h2 className="text-2xl font-semibold mb-4">Ads Generation</h2>

      {/* Ad Title Input */}
      <input
        type="text"
        placeholder="Enter Ad Title"
        value={adTitle}
        onChange={(e) => setAdTitle(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      {/* Ad Description Input */}
      <input
        type="text"
        placeholder="Enter Ad Description"
        value={adDescription}
        onChange={(e) => setAdDescription(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      {/* Image Upload Input */}
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border border-gray-300 rounded p-2"
        />
      </div>

      {/* Error Message Display */}
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

      <button
        onClick={handleGenerateAds}
        className={`bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200 ${isGenerating ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={isGenerating}
      >
        {isGenerating ? "Generating Ad..." : "Generate Ads"}
      </button>

      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Generated Ads</h3>
        {ads.length > 0 ? (
          <ul className="space-y-2">
            {ads.map((ad, index) => (
              <li key={index} className="p-4 bg-white rounded">
                <h4 className="font-semibold text-teal-600">{ad.title}</h4>
                <p>{ad.description}</p>
                {ad?.image && (
                  <div>
                    <img
                      src={ad.image}
                      alt="Ad Image"
                      className="w-32 h-32 object-cover rounded mt-2"
                    />
                    <button
                      onClick={() => handleDownloadImage(ad.image)}
                      className="mt-2 bg-teal-600 text-white py-1 px-3 rounded hover:bg-teal-700 transition duration-200"
                    >
                      Download Enhanced Image
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No ads generated yet.</p>
        )}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">Copy Lines</h3>
        <p>{copyLines}</p>
        <h3 className="text-lg font-semibold mt-4 mb-2">Social Media Tags</h3>
        <p>{socialMediaTags}</p>
      </div>
    </div>
  );
};

export default AdsGeneration;
