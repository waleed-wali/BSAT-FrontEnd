import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Card = ({ name, image, route }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleNavigation = () => {
    navigate(route); // Navigate to the passed route when the card is clicked
  };

  return (
    <div 
      onClick={handleNavigation} 
      className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:bg-gray-100 transition ease-in duration-200 cursor-pointer"
    >
      <img src={image} alt={name} className="h-24 w-24 mb-6" />
      <span className="text-lg text-gray-700">{name}</span>
    </div>
  );
};

export default Card;
