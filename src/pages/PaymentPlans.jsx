import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentComponent from '../components/PaymentComponent';

const PaymentPlans = ({ }) => {
    const navigate = useNavigate();
    const [showstripe, setShowStripe] = useState(false);
    const [planPrice, setPlanPrice] = useState(0);

    // Function to handle "Get Started" button clicks
    const handlePlanSelection = (plan) => {
        console.log(`Selected plan: ${plan}`);
        if (plan == "Intro") {
            setPlanPrice(50);
        } else if (plan == "Pro") {
            setPlanPrice(200);
        } else if (plan == "Base") {
            setPlanPrice(100)
        } else if (plan == "Enterprise") {
            setPlanPrice(400)
        }
        setShowStripe(true);
        // Here you can handle the selected plan, e.g., sending to a payment gateway
        // For now, we just navigate back to the dashboard or any other page.
        // navigate('/dashboard');
    };

    return (
        <div className="container mx-auto text-sans flex flex-col items-center">
            <div className="text-center mt-16">
                <h1 className="text-4xl font-bold">The Right Plan for Your Business</h1>
                <p className="text-lg mt-4">
                    We have several powerful plans to showcase your business and get discovered as creative entrepreneurs. Everything you need.
                </p>
            </div>

            <div className="flex justify-around mt-10 w-full">
                {/* Plan 1 - Intro */}
                <div className="bg-white shadow-md p-5 rounded-lg">
                    <h2 className="font-bold text-xl">Intro</h2>
                    <ul className="mt-4">
                        <li>✓ KeyWord Research</li>
                        <li className="text-gray-400">✗ Content Ideas</li>
                        <li className="text-gray-400">✗ Content Generation</li>
                        <li className="text-gray-400">✗ Citation Suggestions</li>
                        <li className="text-gray-400">✗ Website Analytics</li>
                    </ul>
                    <p className="text-lg font-bold mt-4">$50 /month</p>
                    <button
                        className="mt-4 bg-teal-500 text-white py-2 px-4 rounded"
                        onClick={() => handlePlanSelection('Intro')}
                    >
                        Get Started
                    </button>
                </div>

                {/* Plan 2 - Base */}
                <div className="bg-white shadow-md p-5 rounded-lg">
                    <h2 className="font-bold text-xl">Base</h2>
                    <ul className="mt-4">
                        <li>✓ KeyWord Research</li>
                        <li>✓ Content Ideas</li>
                        <li className="text-gray-400">✗ Content Generation</li>
                        <li className="text-gray-400">✗ Citation Suggestions</li>
                        <li className="text-gray-400">✗ Website Analytics</li>
                    </ul>
                    <p className="text-lg font-bold mt-4">$100 /month</p>
                    <button
                        className="mt-4 bg-teal-500 text-white py-2 px-4 rounded"
                        onClick={() => handlePlanSelection('Base')}
                    >
                        Get Started
                    </button>
                </div>

                {/* Plan 3 - Pro */}
                <div className="bg-white shadow-md p-5 rounded-lg">
                    <h2 className="font-bold text-xl">Pro</h2>
                    <ul className="mt-4">
                        <li>✓ Premium KeyWord Research</li>
                        <li>✓ Content Ideas</li>
                        <li>✓ Content Generation</li>
                        <li>✓ Citation Suggestions</li>
                        <li className="text-gray-400">✗ Website Analytics</li>
                    </ul>
                    <p className="text-lg font-bold mt-4">$200 /month</p>
                    <button
                        className="mt-4 bg-teal-500 text-white py-2 px-4 rounded"
                        onClick={() => handlePlanSelection('Pro')}
                    >
                        Get Started
                    </button>
                </div>

                {/* Plan 4 - Enterprise */}
                <div className="bg-white shadow-md p-5 rounded-lg">
                    <h2 className="font-bold text-xl">Enterprise</h2>
                    <ul className="mt-4">
                        <li>✓ Premium Unlimited KeyWord Research</li>
                        <li>✓ Content Ideas</li>
                        <li>✓ Content Generation</li>
                        <li>✓ Citation Suggestions</li>
                        <li>✓ Website Analytics</li>
                    </ul>
                    <p className="text-lg font-bold mt-4">$400 /month</p>
                    <button
                        className="mt-4 bg-teal-500 text-white py-2 px-4 rounded"
                        onClick={() => handlePlanSelection('Enterprise')}
                    >
                        Get Started
                    </button>
                </div>
            </div>

            <div>
                {showstripe &&
                    <div>
                        <PaymentComponent pid={1} price={planPrice} />
                    </div>
                }
            </div>

            <footer className="mt-10 text-center">
                <p>© 2023 - 2025. All Rights Reserved. BSAT</p>
            </footer>
        </div>
    );
};

export default PaymentPlans;
