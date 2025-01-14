import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Make sure to import FontAwesome for icons
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Import specific icons you need

function ContentIdeas() {
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const keywordsData = [
    { name: 'Justin Septimus', volume: '1000', competition: 'Low', bid: '$1.00', compColor: 'text-green-600' },
    { name: 'Anika Rhiel Madsen', volume: '800', competition: 'Medium', bid: '$1.50', compColor: 'text-yellow-600' },
    { name: 'Miracle Vaccaro', volume: '600', competition: 'High', bid: '$2.00', compColor: 'text-red-600' },
    { name: 'Mira Herwitz', volume: '400', competition: 'Low', bid: '$0.80', compColor: 'text-green-600' },
    { name: 'Erin Levin', volume: '300', competition: 'Medium', bid: '$1.20', compColor: 'text-yellow-600' },
    { name: 'Jaxson Siphiron', volume: '200', competition: 'High', bid: '$2.50', compColor: 'text-red-600' },
    { name: 'Mira Levin', volume: '150', competition: 'Low', bid: '$0.70', compColor: 'text-green-600' },
    { name: 'Lincoln Levin', volume: '100', competition: 'Medium', bid: '$1.30', compColor: 'text-yellow-600' },
  ];

  return (
    <div className="bg-white p-8 overflow-auto h-full">
      <h2 className="text-2xl font-bold mb-4">Content Ideas</h2>
      <div className="flex mb-4 space-x-2">
        <input
          type="text"
          placeholder="Enter Keyword"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Enter Your Location"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button className="bg-teal-600 text-white p-2 rounded hover:bg-teal-700 transition duration-200">
          Analyze
        </button>
      </div>
      <div className="flex justify-between mb-4">
        <div className="flex space-x-2">
          <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">All</button>
          <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">Paid</button>
          <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">Unpaid</button>
          <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">Language</button>
          <span className="py-2 px-4">Total Keywords: {keywordsData.length}</span>
        </div>
      </div>
      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 text-left"><input type="checkbox" /></th>
            <th className="py-2 px-4 text-left">Keywords</th>
            <th className="py-2 px-4 text-left">Volume</th>
            <th className="py-2 px-4 text-left">Competition</th>
            <th className="py-2 px-4 text-left">Bid</th>
            <th className="py-2 px-4 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {keywordsData.map((keyword, index) => (
            <tr key={index} className="relative">
              <td className="py-2 px-4 text-left"><input type="checkbox" /></td>
              <td className="py-2 px-4">{keyword.name}</td>
              <td className="py-2 px-4">{keyword.volume}</td>
              <td className={`py-2 px-4 ${keyword.compColor}`}>{keyword.competition}</td>
              <td className="py-2 px-4">{keyword.bid}</td>
              <td className="py-2 px-4 text-right relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none relative"
                >
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
}

export default ContentIdeas;
