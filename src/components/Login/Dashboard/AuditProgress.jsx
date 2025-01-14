// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// const AuditProgress = () => {
//   const [website, setWebsite] = useState('');
//   const navigate =useNavigate();
//   const handleAnalyze = () => {
//     console.log(`Analyzing website: ${website}`);
//     navigate("/website-audit/keyword-audit")
//     // You can add logic here to trigger the audit process
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
//       {/* Input and Button */}
//       <div className="flex items-center mb-8 w-full max-w-md">
//         <input
//           type="text"
//           placeholder="Enter website link"
//           value={website}
//           onChange={(e) => setWebsite(e.target.value)}
//           className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
//         />
//         <button
//           onClick={handleAnalyze}
//           className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 ml-2"
//         >
//           Analyze
//         </button>
//       </div>

//       <h2 className="text-3xl font-semibold text-teal-600 mb-8">Audit in Progress</h2>

//       {/* Progress Bar */}
//       <div className="relative w-3/4 h-4 bg-gray-200 rounded-full mb-4">
//         <div
//           className="absolute top-0 left-0 h-4 bg-teal-600 rounded-full"
//           style={{ width: '76%' }} // This should be dynamic based on progress
//         ></div>
//       </div>

//       {/* Percentage Text */}
//       <p className="text-lg text-teal-600 font-medium">76% completed</p>
//     </div>
//   );
// };

// export default AuditProgress;






// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AuditProgress = () => {
//   const [auditdata, setAuditData] = useState(null);
//   const [website, setWebsite] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [progress, setProgress] = useState(0); // Simulate progress
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const isValidURL = (url) => {
//     const pattern = new RegExp(
//       '^(https?:\\/\\/)?' + // protocol
//       '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
//       '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
//       '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
//       '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
//       '(\\#[-a-z\\d_]*)?$',
//       'i'
//     );
//     return !!pattern.test(url);
//   };

//   const handleAnalyze = async () => {
//     if (!isValidURL(website)) {
//       setError('Please enter a valid website link.');
//       return;
//     }
//     setError('');
//     setIsLoading(true);
//     const key ="sk-myhealthservice-7Yu3lSkLyEdgKzz2jVk9T3BlbkFJHjUH1MnA5GelR0QlVvZV"


//     try {
//       // Simulate progress bar
//       let interval = setInterval(() => {
//         setProgress((prev) => (prev < 90 ? prev + 10 : prev));
//       }, 500);

//       const articles = ['Article1', 'Article2']; // Replace with actual articles
//       const prompt = `
//         You are tasked with providing a personalized, detailed website audit based on the following articles from ${website}:
        
//         Articles:
//         ${articles.join('\n')}
        
//         Your audit should cover the following areas, providing specific data, mistakes, and actionable improvements for each aspect:
        
//         1. **Technical SEO**:
//            - **Crawlability and Indexing**
//            - **Mobile-Friendliness**
//            - **Site Speed and Performance**
//            - **HTTPS and Security**
        
//            **Mistakes**: List specific technical SEO mistakes, such as missing meta tags or unoptimized resources.
//            **Improvements**: Suggest actionable improvements to address these issues.
        
//         2. **On-Page SEO**:
//            - **Keyword Optimization**
//            - **Meta Tags**
//            - **Header Tags**
//            - **Image Optimization**
//            - **Content Quality**
        
//            **Mistakes**: Identify specific on-page SEO mistakes, such as missing or poorly written meta tags.
//            **Improvements**: Suggest actionable changes for better keyword optimization, meta tags, and content quality.
        
//         3. **User Experience**:
//            - **Navigation and Usability**
//            - **Design and Aesthetics**
//            - **Accessibility**
        
//            **Mistakes**: List specific user experience mistakes that hinder usability.
//            **Improvements**: Recommend changes to enhance navigation, design, and accessibility.
        
//         4. **Performance Audit**:
//            - **Load Times**
//            - **Server Response Time**
//            - **Resource Optimization**
        
//            **Mistakes**: Identify performance-related mistakes that slow down the website.
//            **Improvements**: Suggest actionable improvements to optimize load times and resource usage.
        
//         5. **Analytics and Conversion Audit**:
//            - **Analytics Setup**
//            - **Goal Tracking**
        
//            **Mistakes**: Identify any mistakes in analytics setup that could affect data tracking.
//            **Improvements**: Recommend necessary actions to ensure proper analytics tracking and goal setup.
        
//         Provide clear, personalized recommendations for each aspect. dont write check that, write i'd checked it deeply

//         Write it in different paragraphs. 
//         Also dont write like    As an AI model, I do not have the ability to view the specified web pages directly and provide a personalized audit. However, I can provide a general guideline on how you can audit the website urdupoint.com based on your listed requirements and common SEO practices:
//       `;

      
//       const response = await fetch('https://api.openai.com/v1/chat/completions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${key}`
//         },
//         body: JSON.stringify({
//           model: 'gpt-4',
//           // messages: [
//           //   {
//           //     role: "system",
//           //     content:
//           //       prompt
//           //   }
//           // ],
//           messages: [
//             { role: 'system', content: 'You are an expert in website auditing and SEO optimization.' },
//             { role: 'user', content: prompt }
//           ],
//           max_tokens: 2000,
//         }),
//       });

//       // const resp = await axios.post("http://localhost:5050/api/generate-audit-report", {url:"https://www.dawn.com"})

//       // console.log("resp is : ", resp.data);

//       clearInterval(interval);

//       if (!response.ok) {
//         throw new Error('Failed to fetch audit data');
//       }

//       const data = await response.json();
//       console.log("data is : ", data);
//       setProgress(100);
//       setAuditData(data?.choices[0]?.message);
//       // setTimeout(() => {
//       //   navigate('/website-audit/result', { state: { auditData: data?.choices[0]?.message } });
//       // }, 1000);
//     } catch (err) {
//       setError('Failed to analyze the website. Please try again.');
//       setProgress(0);
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       {/* Input and Button */}
//       <div className="flex items-center mb-8 w-full max-w-md">
//         <input
//           type="text"
//           placeholder="Enter website link"
//           value={website}
//           onChange={(e) => setWebsite(e.target.value)}
//           className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
//         />
//         <button
//           onClick={handleAnalyze}
//           className={`bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 ml-2 ${
//             isLoading ? 'opacity-50 cursor-not-allowed' : ''
//           }`}
//           disabled={isLoading}
//         >
//           {isLoading ? 'Analyzing...' : 'Analyze'}
//         </button>
//       </div>

//       {error && <p className="text-red-500 mb-4">{error}</p>}

//       {/* Progress Bar */}
//       {isLoading && (
//         <>
//           <h2 className="text-3xl font-semibold text-teal-600 mb-8">Audit in Progress</h2>
//           <div className="relative w-3/4 h-4 bg-gray-200 rounded-full mb-4">
//             <div
//               className="absolute top-0 left-0 h-4 bg-teal-600 rounded-full"
//               style={{ width: `${progress}%` }}
//             ></div>
//           </div>
//           <p className="text-lg text-teal-600 font-medium">{progress}% completed</p>
//         </>
//       )}
//       {auditdata &&  <div className='h-screen p-20'>
//         <div>
//           {auditdata?.content}
//         </div>
//         </div>}
//     </div>
//   );
// };

// export default AuditProgress;








/////    After fyp Presentation //// 



// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AuditProgress = () => {
//   const [auditdata, setAuditData] = useState(null);
//   const [website, setWebsite] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [progress, setProgress] = useState(0); // Simulate progress
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const isValidURL = (url) => {
//     const pattern = new RegExp(
//       '^(https?:\\/\\/)?' + // protocol
//       '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
//       '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
//       '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
//       '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
//       '(\\#[-a-z\\d_]*)?$',
//       'i'
//     );
//     return !!pattern.test(url);
//   };

//   const handleAnalyze = async () => {
//     if (!isValidURL(website)) {
//       setError('Please enter a valid website link.');
//       return;
//     }
//     setError('');
//     setIsLoading(true);
//     const key = "sk-myhealthservice-7Yu3lSkLyEdgKzz2jVk9T3BlbkFJHjUH1MnA5GelR0QlVvZV";

//     try {
//       // Simulate progress bar
//       let interval = setInterval(() => {
//         setProgress((prev) => (prev < 90 ? prev + 10 : prev));
//       }, 500);

//       const prompt = `
// //         You are tasked with providing a personalized, detailed website audit based on the following articles from ${website}:
        
// //         Articles:
// //         ${articles.join('\n')}
        
// //         Your audit should cover the following areas, providing specific data, mistakes, and actionable improvements for each aspect:
        
// //         1. **Technical SEO**:
// //            - **Crawlability and Indexing**
// //            - **Mobile-Friendliness**
// //            - **Site Speed and Performance**
// //            - **HTTPS and Security**
        
// //            **Mistakes**: List specific technical SEO mistakes, such as missing meta tags or unoptimized resources.
// //            **Improvements**: Suggest actionable improvements to address these issues.
        
// //         2. **On-Page SEO**:
// //            - **Keyword Optimization**
// //            - **Meta Tags**
// //            - **Header Tags**
// //            - **Image Optimization**
// //            - **Content Quality**
        
// //            **Mistakes**: Identify specific on-page SEO mistakes, such as missing or poorly written meta tags.
// //            **Improvements**: Suggest actionable changes for better keyword optimization, meta tags, and content quality.
        
// //         3. **User Experience**:
// //            - **Navigation and Usability**
// //            - **Design and Aesthetics**
// //            - **Accessibility**
        
// //            **Mistakes**: List specific user experience mistakes that hinder usability.
// //            **Improvements**: Recommend changes to enhance navigation, design, and accessibility.
        
// //         4. **Performance Audit**:
// //            - **Load Times**
// //            - **Server Response Time**
// //            - **Resource Optimization**
        
// //            **Mistakes**: Identify performance-related mistakes that slow down the website.
// //            **Improvements**: Suggest actionable improvements to optimize load times and resource usage.
        
// //         5. **Analytics and Conversion Audit**:
// //            - **Analytics Setup**
// //            - **Goal Tracking**
        
// //            **Mistakes**: Identify any mistakes in analytics setup that could affect data tracking.
// //            **Improvements**: Recommend necessary actions to ensure proper analytics tracking and goal setup.
        
// //         Provide clear, personalized recommendations for each aspect. dont write check that, write i'd checked it deeply

// //         Write it in different paragraphs. 
// //         Also dont write like    As an AI model, I do not have the ability to view the specified web pages directly and provide a personalized audit. However, I can provide a general guideline on how you can audit the website urdupoint.com based on your listed requirements and common SEO practices:
// //       `;


//       const response = await fetch('https://api.openai.com/v1/chat/completions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${key}`
//         },
//         body: JSON.stringify({
//           model: 'gpt-3.5-turbo',
//           messages: [
//             { role: 'system', content: 'You are an expert in website auditing and SEO optimization.' },
//             { role: 'user', content: prompt }
//           ],
//           max_tokens: 2000,
//         }),
//       });

//       clearInterval(interval);

//       if (!response.ok) {
//         throw new Error(`Failed to fetch audit data. Status: ${response.status}`);
//       }

//       const data = await response.json();
//       setProgress(100);
//       setAuditData(data?.choices[0]?.message);
//     } catch (err) {
//       console.error('Error:', err); // Log the error details for better debugging
//       setError('Failed to analyze the website. Please try again.');
//       setProgress(0);
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       {/* Container for the page */}
//       <div className="max-w-3xl w-full p-8 bg-white rounded-lg shadow-xl">

//         {/* Heading */}
//         <h1 className="text-4xl font-bold text-teal-700 text-center mb-8">
//           Website SEO Audit
//         </h1>

//         {/* Input and Button */}
//         <div className="flex items-center mb-8 w-full">
//           <input
//             type="text"
//             placeholder="Enter website link"
//             value={website}
//             onChange={(e) => setWebsite(e.target.value)}
//             className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 text-lg"
//           />
//           <button
//             onClick={handleAnalyze}
//             className={`bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 ml-4 text-lg transition-all duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
//             disabled={isLoading}
//           >
//             {isLoading ? 'Analyzing...' : 'Analyze'}
//           </button>
//         </div>

//         {/* Error Message */}
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}

//         {/* Progress Bar */}
//         {isLoading && (
//           <div className="w-full mb-8">
//             <h2 className="text-2xl font-semibold text-teal-600 mb-4">Audit in Progress</h2>
//             <div className="relative w-full h-4 bg-gray-200 rounded-full mb-4">
//               <div
//                 className="absolute top-0 left-0 h-4 bg-teal-600 rounded-full"
//                 style={{ width: `${progress}%` }}
//               ></div>
//             </div>
//             <p className="text-lg text-teal-600 font-medium text-center">{progress}% completed</p>
//           </div>
//         )}

//         {/* Audit Result */}
//         {auditdata && (
//           <div className="mt-8">
//             <div className="text-lg text-gray-800">
//               <p>{auditdata?.content}</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AuditProgress;












/////        Updated after fyp presentation  /////





// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AuditProgress = () => {
//   const [auditdata, setAuditData] = useState({ onPage: '', offPage: '', technical: '' });
//   const [website, setWebsite] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const isValidURL = (url) => {
//     const pattern = new RegExp(
//       '^(https?:\\/\\/)?' + // protocol
//       '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
//       '(\\d{1,3}\\.){3}\\d{1,3})' + // OR ip (v4) address
//       '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
//       '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
//       '(\\#[-a-z\\d_]*)?$', // fragment locator
//       'i'
//     );
//     return pattern.test(url);
//   };

//   const handleAnalyze = async () => {
//     if (!isValidURL(website)) {
//       setError('Please enter a valid website link.');
//       return;
//     }
//     setError('');
//     setIsLoading(true);
//     const key = "sk-myhealthservice-7Yu3lSkLyEdgKzz2jVk9T3BlbkFJHjUH1MnA5GelR0QlVvZV";

//     try {
//       let interval = setInterval(() => {
//         setProgress((prev) => (prev < 90 ? prev + 10 : prev));
//       }, 500);

//       const prompt = `Provide a detailed SEO audit for ${website} divided into:

//       1. **On-Page SEO**: Discuss keyword optimization, meta tags, content quality, header tags, and image optimization.
//       2. **Off-Page SEO**: Discuss backlinks, domain authority, social signals, and link building strategies.
//       3. **Technical SEO**: Discuss crawlability, site speed, mobile optimization, security, and structured data.`;

//       const response = await fetch('https://api.openai.com/v1/chat/completions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${key}`
//         },
//         body: JSON.stringify({
//           model: 'gpt-4',
//           messages: [
//             { role: 'system', content: 'You are an expert in website SEO auditing.' },
//             { role: 'user', content: prompt }
//           ],
//           max_tokens: 2000,
//         }),
//       });

//       clearInterval(interval);
//       if (!response.ok) throw new Error('Failed to fetch audit data');

//       const data = await response.json();
//       const content = data.choices[0]?.message?.content;

//       // Ensure the content has the expected format before splitting
//       if (content) {
//         const onPageMatch = content.match(/On-Page SEO([\s\S]*?)Off-Page SEO/);
//         const offPageMatch = content.match(/Off-Page SEO([\s\S]*?)Technical SEO/);
//         const technicalMatch = content.match(/Technical SEO([\s\S]*)/);

//         setAuditData({
//           onPage: onPageMatch ? onPageMatch[1].trim() : 'No data available for On-Page SEO.',
//           offPage: offPageMatch ? offPageMatch[1].trim() : 'No data available for Off-Page SEO.',
//           technical: technicalMatch ? technicalMatch[1].trim() : 'No data available for Technical SEO.',
//         });
//       } else {
//         setError('No data found in the audit.');
//       }

//       setProgress(100);
//     } catch (err) {
//       setError('Failed to analyze the website. Please try again.');
//       setProgress(0);
//     }
//     setIsLoading(false);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       <div className="flex items-center mb-8 w-full max-w-md">
//         <input
//           type="text"
//           placeholder="Enter website link"
//           value={website}
//           onChange={(e) => setWebsite(e.target.value)}
//           className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
//         />
//         <button
//           onClick={handleAnalyze}
//           className={`bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 ml-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
//           disabled={isLoading}
//         >
//           {isLoading ? 'Analyzing...' : 'Analyze'}
//         </button>
//       </div>

//       {error && <p className="text-red-500 mb-4">{error}</p>}

//       {isLoading && (
//         <>
//           <h2 className="text-3xl font-semibold text-teal-600 mb-8">Audit in Progress</h2>
//           <div className="relative w-3/4 h-4 bg-gray-200 rounded-full mb-4">
//             <div className="absolute top-0 left-0 h-4 bg-teal-600 rounded-full" style={{ width: `${progress}%` }}></div>
//           </div>
//           <p className="text-lg text-teal-600 font-medium">{progress}% completed</p>
//         </>
//       )}

//       {auditdata.onPage && (
//         <div className="h-screen p-20">
//           <h2 className="text-2xl font-bold mb-4">On-Page SEO</h2>
//           <p>{auditdata.onPage}</p>
//           <h2 className="text-2xl font-bold mt-8 mb-4">Off-Page SEO</h2>
//           <p>{auditdata.offPage}</p>
//           <h2 className="text-2xl font-bold mt-8 mb-4">Technical SEO</h2>
//           <p>{auditdata.technical}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AuditProgress;
















/////   Above Code is the almost final code for the AuditProgress.jsx file   /////



// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AuditProgress = () => {
//   const [auditdata, setAuditData] = useState({ onPage: '', offPage: '', technical: '' });
//   const [website, setWebsite] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const isValidURL = (url) => {
//     const pattern = new RegExp(
//       '^(https?:\\/\\/)?' + // protocol
//       '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
//       '(\\d{1,3}\\.){3}\\d{1,3})' + // OR ip (v4) address
//       '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
//       '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
//       '(\\#[-a-z\\d_]*)?$', // fragment locator
//       'i'
//     );
//     return pattern.test(url);
//   };

//   const boldText = (text) => {
//     return text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
//   };

//   const handleAnalyze = async () => {
//     if (!isValidURL(website)) {
//       setError('Please enter a valid website link.');
//       return;
//     }
//     setError('');
//     setIsLoading(true);
//     const key = "sk-myhealthservice-7Yu3lSkLyEdgKzz2jVk9T3BlbkFJHjUH1MnA5GelR0QlVvZV";

//     try {
//       let interval = setInterval(() => {
//         setProgress((prev) => (prev < 90 ? prev + 10 : prev));
//       }, 500);

//       const prompt = `Provide a detailed SEO audit for ${website} divided into:

//       1. **On-Page SEO**: Discuss keyword optimization, meta tags, content quality, header tags, and image optimization. Use Random Data for every new website. But it's crucial to provide data
//       2. **Off-Page SEO**: Discuss backlinks, domain authority, social signals, and link building strategies.Use Random Data for every new website. But it's crucial to provide data
//       3. **Technical SEO**: Discuss crawlability, site speed, mobile optimization, security, and structured data.Use Random Data for every new website. But it's crucial to provide data`;

//       const response = await fetch('https://api.openai.com/v1/chat/completions', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${key}`
//         },
//         body: JSON.stringify({
//           model: 'gpt-4',
//           messages: [
//             { role: 'system', content: 'You are an expert in website SEO auditing.' },
//             { role: 'user', content: prompt }
//           ],
//           max_tokens: 2000,
//         }),
//       });

//       clearInterval(interval);
//       if (!response.ok) throw new Error('Failed to fetch audit data');

//       const data = await response.json();
//       const content = data.choices[0]?.message?.content;

//       // Ensure the content has the expected format before splitting
//       if (content) {
//         const onPageMatch = content.match(/On-Page SEO([\s\S]*?)Off-Page SEO/);
//         const offPageMatch = content.match(/Off-Page SEO([\s\S]*?)Technical SEO/);
//         const technicalMatch = content.match(/Technical SEO([\s\S]*)/);

//         setAuditData({
//           onPage: onPageMatch ? boldText(onPageMatch[1].trim()) : 'No data available for On-Page SEO.',
//           offPage: offPageMatch ? boldText(offPageMatch[1].trim()) : 'No data available for Off-Page SEO.',
//           technical: technicalMatch ? boldText(technicalMatch[1].trim()) : 'No data available for Technical SEO.',
//         });
//       } else {
//         setError('No data found in the audit.');
//       }

//       setProgress(100);
//     } catch (err) {
//       setError('Failed to analyze the website. Please try again.');
//       setProgress(0);
//     }
//     setIsLoading(false);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       <div className="flex items-center mb-8 w-full max-w-md">
//         <input
//           type="text"
//           placeholder="Enter website link"
//           value={website}
//           onChange={(e) => setWebsite(e.target.value)}
//           className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
//         />
//         <button
//           onClick={handleAnalyze}
//           className={`bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 ml-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
//           disabled={isLoading}
//         >
//           {isLoading ? 'Analyzing...' : 'Analyze'}
//         </button>
//       </div>

//       {error && <p className="text-red-500 mb-4">{error}</p>}

//       {isLoading && (
//         <>
//           <h2 className="text-3xl font-semibold text-teal-600 mb-8">Audit in Progress</h2>
//           <div className="relative w-3/4 h-4 bg-gray-200 rounded-full mb-4">
//             <div className="absolute top-0 left-0 h-4 bg-teal-600 rounded-full" style={{ width: `${progress}%` }}></div>
//           </div>
//           <p className="text-lg text-teal-600 font-medium">{progress}% completed</p>
//         </>
//       )}

//       {auditdata.onPage && (
//         <div className="h-screen p-20">
//           <h2 className="text-2xl font-bold mb-4">On-Page SEO</h2>
//           <div dangerouslySetInnerHTML={{ __html: auditdata.onPage }} />
//           <h2 className="text-2xl font-bold mt-8 mb-4">Off-Page SEO</h2>
//           <div dangerouslySetInnerHTML={{ __html: auditdata.offPage }} />
//           <h2 className="text-2xl font-bold mt-8 mb-4">Technical SEO</h2>
//           <div dangerouslySetInnerHTML={{ __html: auditdata.technical }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default AuditProgress;

































import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuditProgress = () => {
  const [auditdata, setAuditData] = useState({ onPage: '', offPage: '', technical: '' });
  const [website, setWebsite] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const isValidURL = (url) => {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?' + 
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + 
      '(\\d{1,3}\\.){3}\\d{1,3})' + 
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + 
      '(\\?[;&a-z\\d%_.~+=-]*)?' + 
      '(\\#[-a-z\\d_]*)?$', 
      'i'
    );
    return pattern.test(url);
  };

  const boldText = (text) => {
    text = text.replace(/(On-Page SEO|Off-Page SEO|Technical SEO)/g, '<b>$1</b>');
    return text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
  };

  const handleAnalyze = async () => {
    if (!isValidURL(website)) {
      setError('Please enter a valid website link.');
      return;
    }
    setError('');
    setIsLoading(true);
    setShowResults(false);
    const key = "sk-myhealthservice-7Yu3lSkLyEdgKzz2jVk9T3BlbkFJHjUH1MnA5GelR0QlVvZV";

    try {
      let interval = setInterval(() => {
        setProgress((prev) => (prev < 90 ? prev + 10 : prev));
      }, 500);

      const prompt = `Provide a detailed SEO audit for ${website} divided into:

      1. **On-Page SEO**: Discuss keyword optimization, meta tags, content quality, header tags, and image optimization.
      2. **Off-Page SEO**: Discuss backlinks, domain authority, social signals, and link building strategies.
      3. **Technical SEO**: Discuss crawlability, site speed, mobile optimization, security, and structured data.`;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${key}`
        },
        body: JSON.stringify({
          model: 'gpt-4',
          messages: [
            { role: 'system', content: 'You are an expert in website SEO auditing.' },
            { role: 'user', content: prompt }
          ],
          max_tokens: 2000,
        }),
      });

      clearInterval(interval);
      if (!response.ok) throw new Error('Failed to fetch audit data');

      const data = await response.json();
      const content = data.choices[0]?.message?.content;

      if (content) {
        const onPageMatch = content.match(/On-Page SEO([\s\S]*?)Off-Page SEO/);
        const offPageMatch = content.match(/Off-Page SEO([\s\S]*?)Technical SEO/);
        const technicalMatch = content.match(/Technical SEO([\s\S]*)/);

        setAuditData({
          onPage: onPageMatch ? boldText(onPageMatch[1].trim()) : 'No data available for On-Page SEO.',
          offPage: offPageMatch ? boldText(offPageMatch[1].trim()) : 'No data available for Off-Page SEO.',
          technical: technicalMatch ? boldText(technicalMatch[1].trim()) : 'No data available for Technical SEO.',
        });
      } else {
        setError('No data found in the audit.');
      }

      setProgress(100);
      setShowResults(true);
    } catch (err) {
      setError('Failed to analyze the website. Please try again.');
      setProgress(0);
    }
    setIsLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAnalyze();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  from-teal-400 to-blue-500 p-10 text-white">
      {!showResults ? (
        <div className="w-full max-w-lg p-10 bg-white rounded-lg shadow-lg text-black">
          <h1 className="text-4xl font-bold text-center mb-6">Website SEO Audit Tool</h1>
          <p className="text-center mb-6">Enter your website link to get a complete SEO audit report.</p>
          <input
            type="text"
            placeholder="Enter website link"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
          />
          <button
            onClick={handleAnalyze}
            className={`w-full bg-teal-600 text-white py-3 rounded-lg mt-4 hover:bg-teal-700 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Analyzing...' : 'Start Analysis'}
          </button>
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </div>
      ) : (
        <div className="w-full max-w-4xl p-10 bg-white rounded-lg shadow-lg text-black">
          <h2 className="text-3xl font-bold mb-6 text-center text-teal-700">Complete SEO Audit Results</h2>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-teal-700">On-Page SEO</h3>
            <div dangerouslySetInnerHTML={{ __html: auditdata.onPage }} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mt-8 mb-4 text-teal-700">Off-Page SEO</h3>
            <div dangerouslySetInnerHTML={{ __html: auditdata.offPage }} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mt-8 mb-4 text-teal-700">Technical SEO</h3>
            <div dangerouslySetInnerHTML={{ __html: auditdata.technical }} />
          </div>
        </div>
      )}
      {isLoading && (
        <div className="w-full max-w-lg p-6 mt-10 text-center bg-white rounded-lg shadow-lg text-black">
          <h2 className="text-2xl font-semibold text-teal-700 mb-4">Audit in Progress</h2>
          <div className="relative w-full h-4 bg-gray-200 rounded-full">
            <div className="absolute top-0 left-0 h-4 bg-teal-600 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="text-lg font-medium mt-2">{progress}% completed</p>
        </div>
      )}
    </div>
  );
};

export default AuditProgress;
