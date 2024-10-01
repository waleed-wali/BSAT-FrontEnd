import React from 'react';
import IMAGES from '../../../constants/images'; // Adjust the path as necessary

const KeywordAnalytics = ({ keyword, setKeyword, handleAnalyze }) => {
  return (
    <div className="bg-white p-8 overflow-auto h-full">
      <h2 className="text-2xl font-semibold mb-4">Keyword Analytics</h2>
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter Keyword..."
        className="w-200 px-3 py-2 border border-gray-300 rounded-md mb-5"
      />
      <div className="flex justify-end relative">
        <button
          onClick={handleAnalyze}
          className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200 -mt-4"
        >
          Analyze
        </button>
      </div>
      <div className="bg-white p-4 rounded shadow mb-8">
        <h3 className="text-xl font-semibold mb-4">Dummy</h3>
        <div className="flex items-start space-x-8">
          <div className="flex-1">
            <img src={IMAGES.graph} alt="chart" className="w-full" />
          </div>
          <div className="w-64">
            <h4 className="text-lg font-semibold mb-2">Top Keywords</h4>
            <ul className="space-y-2">
              {new Array(10).fill('Justin Septimus').map((name, index) => (
                <li key={index} className="flex items-center p-2 bg-gray-100 rounded">{name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h4 className="text-lg font-semibold mb-2">Best Articles</h4>
        <ul className="space-y-2">
          {[
            { date: '2018/10/02 15:57:46', title: 'Deposit Japanese Yen' },
            { date: '2018/10/02 15:57:46', title: 'Bought Bitcoin' }
          ].map((article, index) => (
            <li key={index} className="p-2 bg-gray-100 rounded">
              <div className="text-sm text-gray-500">{article.date}</div>
              <div className="font-semibold">{article.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default KeywordAnalytics;
