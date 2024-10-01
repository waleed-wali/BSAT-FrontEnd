import React from 'react';

const Card = ({ name, image }) => (
  <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:bg-gray-100 transition ease-in duration-200">
    <img src={image} alt={name} className="h-24 w-24 mb-6" />
    <span className="text-lg text-gray-700">{name}</span>
  </div>
);

export default Card;
