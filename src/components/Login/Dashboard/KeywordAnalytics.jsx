import React from 'react';
import IMAGES from '../../../constants/images'; // Adjust the path based on your project structure

const KeywordAnalytics = ({ keyword, setKeyword, handleAnalyze }) => {
  return (
    <div className="bg-white p-8 overflow-auto h-full">
      <h2 className="text-2xl font-semibold mb-6">Keyword Analytics</h2>
      
      {/* Keyword Input Section */}
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter Keyword..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-6"
      />
      
      {/* Analyze Button */}
      <div className="flex justify-end">
        <button
          onClick={handleAnalyze}
          className="bg-teal-600 text-white py-2 px-6 rounded hover:bg-teal-700 transition duration-200"
        >
          Analyze
        </button>
      </div>
      
      {/* Graph and Keywords Section */}
      <div className="bg-white p-6 rounded shadow-md mt-8">
        <h3 className="text-xl font-semibold mb-6">Analytics Overview</h3>
        <div className="flex items-start space-x-8">
          {/* Graph Placeholder */}
          <div className="flex-1">
            <img src={IMAGES.graph} alt="Analytics Graph" className="w-full" />
          </div>
          
          {/* Top Keywords List */}
          <div className="w-64">
            <h4 className="text-lg font-semibold mb-4">Top Keywords</h4>
            <ul className="space-y-2">
              {new Array(10).fill('Keyword Placeholder').map((keyword, index) => (
                <li
                  key={index}
                  className="p-2 bg-gray-100 rounded text-gray-700 font-medium"
                >
                  {keyword}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Best Articles Section */}
      <div className="bg-white p-6 rounded shadow-md mt-8">
        <h4 className="text-lg font-semibold mb-4">Best Articles</h4>
        <ul className="space-y-4">
          {[
            { date: '2023/12/08 14:30:00', title: 'SEO Strategy Insights' },
            { date: '2023/12/07 10:00:00', title: 'Top Keywords of 2023' },
          ].map((article, index) => (
            <li key={index} className="p-4 bg-gray-100 rounded">
              <div className="text-sm text-gray-500">{article.date}</div>
              <div className="font-semibold text-gray-800">{article.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KeywordAnalytics;
