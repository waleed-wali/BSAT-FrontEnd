import React from 'react';

const AdsGeneration = () => {
  return (
    <div className="bg-white p-8 overflow-auto h-full">
      <h2 className="text-2xl font-semibold mb-4">Ads Generation</h2>
      <input type="text" placeholder="Enter Ad Content" className="w-full p-2 border border-gray-300 rounded mb-4" />
      <button className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200">Generate Ads</button>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Generated Ads</h3>
        <ul className="space-y-2">
          {new Array(3).fill("Ad content here").map((content, index) => (
            <li key={index} className="p-2 bg-gray-100 rounded">{content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdsGeneration;
