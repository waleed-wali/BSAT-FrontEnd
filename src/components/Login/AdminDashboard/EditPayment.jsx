import React, { useState } from 'react';
import Sidebar from './Sidebar';

const EditPayment = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const plans = [
    {
      id: 3,
      title: 'Pro',
      price: '$123',
      features: ['Premium KeyWord Research', 'Audit Report', 'Article Writing', 'Ads Generation', 'Competitor Analysis'],
      isPopular: true,
    },
  ];

  return (
   
    <main className="flex-grow p-6 bg-white">
     
    
        <h2 className="text-2xl font-semibold mb-6 ">Edit Payments</h2>
    <div className=" justify-center items-center">
      <div className="p-6 justify-center w-full md:w-1/3"> {/* Set a max width for the centered card */}
        
        <div className="grid grid-cols-1 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`border rounded-lg p-6 relative transition-all duration-300 ease-in-out ${
                plan.isPopular 
                  ? 'border-teal-600 bg-gray-100 shadow-lg transform hover:scale-105 hover:bg-teal-500 hover:border-teal-700 hover:text-white'
                  : 'border-gray-300'
              }`}
            >
              <h3 className="text-lg font-medium mb-4">{plan.title}</h3>
              <ul className="mb-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-teal-600">
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              <div className="text-xl font-bold mb-4">{plan.price}/month</div>
              <button
                className={`w-full py-2 rounded-md transition-colors duration-300 ${
                  plan.isPopular ? 'bg-white text-teal-600 hover:bg-teal-700 hover:text-white' : 'bg-teal-600 text-white'
                }`}
              >
                Update
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
   
    </main>
    
  );
};

export default EditPayment;
