import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const KeywordAudit = () => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate()
  const handleAnalyze = () => {
    console.log(`Analyzing Keyword: ${keyword}, Location: ${location}`);
    // Add logic to trigger the audit 
  };
  
  const handlegetauditreport = async() => {
    const response = await axios.post(" http/localhost/api/v1 ", {url: keyword})
    console.log(response.data)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-8">      

      {/* Input fields and Analyze button */}
      <div className="flex items-center space-x-4 mb-8">
        <input
          type="text"
          placeholder="Enter keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-64 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
        />
        <input
          type="text"
          placeholder="Enter your location"
          value={location}
          onChange={(e) => handle(e.target.value)}
          className="w-64 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
        />
        <button
          onClick={handlegetauditreport}
          className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
        >
          Analyze
        </button>
      </div>

      {/* Progress Bar */}
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-3/4 h-4 bg-gray-200 rounded-full mb-4">
          <div
            className="absolute top-0 left-0 h-4 bg-teal-600 rounded-full"
            style={{ width: '100%' }} // 100% completion
          ></div>
        </div>
        <p className="text-lg text-teal-600 font-semibold">100% completed</p>
      </div>

      {/* Buttons */}
      <div className="flex space-x-8">
        <button onClick={()=>navigate("/view-audit")} className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700">
          View Audit
        </button>
        <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700">
          Download
        </button>
      </div>
    </div>
  );
};

export default KeywordAudit;
