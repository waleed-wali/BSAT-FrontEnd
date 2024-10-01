import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const KeywordResearch = ({ handleAnalyze }) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
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
          onClick={handleAnalyze}
          className="bg-teal-600 text-white p-2 rounded hover:bg-teal-700 transition duration-200"
        >
          Analyze
        </button>
      </div>

      <div className="flex justify-between mb-4">
        <div className="flex space-x-2">
          <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">All</button>
          <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">Paid</button>
          <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">Unpaid</button>
          <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">Language</button>
          <span className="py-2 px-4">Total Keywords: 900</span>
        </div>
        <button className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200">Pay Dues</button>
      </div>

      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 text-left"><input type="checkbox" /></th>
            <th className="py-2 px-4 text-left">Keywords</th>
            <th className="py-2 px-4 text-left">Avg. Monthly Volume</th>
            <th className="py-2 px-4 text-left">Competition</th>
            <th className="py-2 px-4 text-left">Top to Page Bid</th>
            <th className="py-2 px-4 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {[
            { name: 'Justin Septimus', volume: '1M - 10M', competition: 'Low', bid: '$200', compColor: 'text-green-500' },
            { name: 'Anika Rhiel Madsen', volume: '1M - 10M', competition: 'Average', bid: '$300', compColor: 'text-orange-500' },
            { name: 'Miracle Vaccaro', volume: '1M - 10M', competition: 'Low', bid: '$250', compColor: 'text-green-500' },
            { name: 'Mira Herwitz', volume: '1M - 10M', competition: 'Low', bid: '$200', compColor: 'text-green-500' },
            { name: 'Erin Levin', volume: '1M - 10M', competition: 'Low', bid: '$200', compColor: 'text-green-500' },
            { name: 'Jaxson Siphiron', volume: '1M - 10M', competition: 'Average', bid: '$200', compColor: 'text-orange-500' },
            { name: 'Mira Levin', volume: '1M - 10M', competition: 'High', bid: '$750', compColor: 'text-red-500' },
            { name: 'Lincoln Levin', volume: '1M - 10M', competition: 'Low', bid: '$370', compColor: 'text-green-500' },
          ].map((keyword, index) => (
            <tr key={index} className="relative">
              <td className="py-2 px-4 text-left"><input type="checkbox" /></td>
              <td className="py-2 px-4">{keyword.name}</td>
              <td className="py-2 px-4">{keyword.volume}</td>
              <td className={`py-2 px-4 ${keyword.compColor}`}>{keyword.competition}</td>
              <td className="py-2 px-4">{keyword.bid}</td>
              <td className="py-2 px-4 text-right relative">
                <button onClick={() => toggleDropdown(index)} className="text-gray-500 hover:text-gray-700 focus:outline-none relative">
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>
                {dropdownOpen === index && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Action 1</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Action 2</a>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Action 3</a>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KeywordResearch;
