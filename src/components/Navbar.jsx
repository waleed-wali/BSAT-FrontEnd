import React from 'react';
import { IMAGES } from '../constants/images';
import { Link } from 'react-router-dom'; // If you are using React Router for navigation

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img src={IMAGES.logo} alt="Logo" className="h-8 w-8 mr-3" />
          <span className="text-xl font-bold text-gray-800">BSAT</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-800 hover:text-blue-500">Home</Link>
          <Link to="/about" className="text-gray-800 hover:text-blue-500">About</Link>
          <Link to="/services" className="text-gray-800 hover:text-blue-500">Services</Link>
          <Link to="/contact" className="text-gray-800 hover:text-blue-500">Contact</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-gray-800 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
