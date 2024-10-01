import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const CompetitorAnalysis = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <div className="bg-white p-8 overflow-auto h-full">
      <h2 className="text-2xl font-semibold mb-4">Competitor Analysis</h2>
      <div className="flex mb-4">
        <input type="text" placeholder="Competitor URL" className="w-full p-2 border border-gray-300 rounded mr-2" />
        <button className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200">Analyze</button>
      </div>
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="bg-gray-200 text-black py-2 px-4 rounded flex justify-between w-full"
        >
          Dropdown <FontAwesomeIcon icon={faChevronDown} />
        </button>
        {dropdownOpen && (
          <div className="absolute bg-white shadow-lg mt-1 rounded">
            <ul>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
            </ul>
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Results</h3>
        <ul className="space-y-2">
          <li className="p-2 bg-gray-100 rounded">Competitor 1 Analysis...</li>
          <li className="p-2 bg-gray-100 rounded">Competitor 2 Analysis...</li>
        </ul>
      </div>
    </div>
  );
};

export default CompetitorAnalysis;
