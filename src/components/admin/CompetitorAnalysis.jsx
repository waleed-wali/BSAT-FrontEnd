import React, { useState } from 'react';
import axios from 'axios';

const CompetitorAnalysis = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [domain, setDomain] = useState('');
  const [category, setCategory] = useState(''); 
  const [competitors, setCompetitors] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [loading, setLoading] = useState(false); // New state for loading
  const [error, setError] = useState(null); // New state for error handling

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleAnalyze = async () => {
    setLoading(true); // Set loading to true when the request starts
    setError(null); // Reset any previous error
    try {
      const response = await axios.post('http://localhost:8080/api/v1/payment/competitor-analysis', {
        domain,
        category,
      });
  
      setCompetitors(response.data.topCompetitors);
      setKeywords(response.data.topKeywords);
    } catch (error) {
      // Display the error message from the backend or Axios error
      setError(error.response ? error.response.data.error : 'An unknown error occurred. Please try again later.');
      console.error('Error fetching competitor analysis:', error);
    } finally {
      setLoading(false); // Set loading to false when the request finishes
    }
  };
  
  

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full h-full">
      <div className="border-b pb-4 mb-4">
        <h2 className="text-xl font-semibold">Dashboard &gt; Competitor Analysis</h2>
      </div>
      
      {/* Input fields for domain and category */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="domain">
          Enter Domain
        </label>
        <input
          type="text"
          id="domain"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="dummy.com"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="category">
          Enter Category
        </label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="e.g., technology"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      
      <button onClick={handleAnalyze} className="mt-4 bg-teal-600 text-white p-2 rounded" disabled={loading}>
        {loading ? 'Processing...' : 'Analyze'}
      </button>

      {/* Show error message if error exists */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Competitors Section */}
      <div className="border p-4 rounded mb-4 mt-4">
        <h3 className="text-lg font-medium mb-4">Top Competitors</h3>
        {loading ? (
          <p>Loading competitors...</p> // Show loading message
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {competitors.length > 0 ? (
              competitors.map((competitor, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-gray-500">{competitor.domain}</span>
                  <span className="font-bold">{competitor.domainAuthority}</span>
                </div>
              ))
            ) : (
              <p>No competitors found.</p>
            )}
          </div>
        )}
      </div>

      {/* Keywords Section */}
      <div className="bg-gray-50 p-4 rounded-lg shadow relative">
        <h3 className="text-lg font-medium mb-4">Top Keywords</h3>
        {loading ? (
          <p>Loading keywords...</p> // Show loading message
        ) : (
          <ul>
            {keywords.length > 0 ? (
              keywords.map((keyword, index) => (
                <li key={index}>{keyword.keyword}</li>
              ))
            ) : (
              <p>No keywords found.</p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CompetitorAnalysis;
