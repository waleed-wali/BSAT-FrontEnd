import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PaymentPlansComponent } from '../../Global/PaymentPlansComponent';

const Payment_Plans = () => {
  const navigate = useNavigate();

  const plans = [
    {
      id: 1,
      title: 'Intro',
      price: '$0',
      features: ['KeyWord Research', 'Audit Report'],
      missingFeatures: ['Content Generation', 'Ads Creation', 'Competitor Analysis'],
      isPopular: true,
    },
    {
      id: 2,
      title: 'Base',
      price: '$50',
      features: ['KeyWord Research', 'Audit Report', 'Ads Creation'],
      missingFeatures: ['Content Generation', 'Competitor Analysis'],
      isPopular: true,
    },
    {
      id: 3,
      title: 'Pro',
      price: '$80',
      features: ['Premium KeyWord Research', 'Audit Report', 'Content Generation', 'Ads Generation'],
      missingFeatures: ['Competitor Analysis'],
      isPopular: true,
    },
    {
      id: 4,
      title: 'Enterprise',
      price: '$120',
      features: ['Premium Unlimited Keywords Research', 'Audit Report', 'Content Generation', 'Ads Generation', 'Competitor Analysis'],
      isPopular: true,
    },
  ];

  return (
    <main className="flex-grow bg-white">
      <div className="p-4 mt-2 w-full">
        <h2 className="text-2xl font-semibold mb-6">Payments</h2>

        {/* <div className="grid grid-cols-3 gap-2">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`border rounded-lg p-6 relative transition-all duration-300 ease-in-out ${
              plan.isPopular 
                ? 'border-teal-600 bg-gray-100 shadow-lg transform hover:scale-105 hover:bg-teal-500 hover:border-teal-700 hover:text-white'
                : 'border-gray-300'
            }`}
          >
            {plan.isPopular && (
              <div className="">
                
              </div>
            )}
            <h3 className="text-lg font-medium mb-4">{plan.title}</h3>
            <ul className="mb-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="text-teal-800">
                  ✓ {feature}
                </li>
              ))}
              {plan.missingFeatures &&
                plan.missingFeatures.map((feature, idx) => (
                  <li key={idx} className="text-gray">
                    ✗ {feature}
                  </li>
                ))}
            </ul>
            <div className="text-xl font-bold mb-4">{plan.price}/month</div>
            <button onClick={()=>navigate("/admin-dashboard/edit-payment-plan")} className={`w-full py-2 rounded-md transition-colors duration-300 ${
              plan.isPopular ? 'bg-white text-teal-600 hover:bg-teal-700 hover:text-white' : 'bg-teal-600 text-white'
            }`}>
              Edit
            </button>
          </div>
        ))}
      </div> */}

        <div className='flex flex-ccol'>
          <PaymentPlansComponent admin={true} />
        </div>
      </div>
    </main>
  );
};

export default Payment_Plans;
