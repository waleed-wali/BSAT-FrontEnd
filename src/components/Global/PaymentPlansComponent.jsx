export const PaymentPlansComponent = ({ handlePlanSelection, admin, handleEditPlan }) => {

    return (
        <div className="flex justify-around mt-10 w-full">
            <div className="bg-white shadow-md p-5 rounded-lg flex-1">
                <h2 className="font-bold text-xl">Intro</h2>
                <ul className="mt-4">
                    <li>✓ KeyWord Research</li>
                    <li className="text-gray-400">✗ Content Ideas</li>
                    <li className="text-gray-400">✗ Content Generation</li>
                    <li className="text-gray-400">✗ Citation Suggestions</li>
                    <li className="text-gray-400">✗ Website Analytics</li>
                </ul>
                <p className="text-lg font-bold mt-4">$50 /month</p>
                {!admin &&
                    <button
                        className="mt-4 bg-teal-500 text-white py-2 px-4 rounded"
                        onClick={() => handlePlanSelection('Intro')}
                    >
                        Get Started
                    </button>
                }
            </div>

            <div className="bg-white shadow-md p-5 rounded-lg flex-1">
                <h2 className="font-bold text-xl">Base</h2>
                <ul className="mt-4">
                    <li>✓ KeyWord Research</li>
                    <li>✓ Content Ideas</li>
                    <li className="text-gray-400">✗ Content Generation</li>
                    <li className="text-gray-400">✗ Citation Suggestions</li>
                    <li className="text-gray-400">✗ Website Analytics</li>
                </ul>
                <p className="text-lg font-bold mt-4">$100 /month</p>
                {!admin &&
                    <button
                        className="mt-4 bg-teal-500 text-white py-2 px-4 rounded"
                        onClick={() => handlePlanSelection('Base')}
                    >
                        Get Started
                    </button>
                }
            </div>

            <div className="bg-white shadow-md p-5 rounded-lg flex-1">
                <h2 className="font-bold text-xl">Pro</h2>
                <ul className="mt-4">
                    <li>✓ Premium KeyWord Research</li>
                    <li>✓ Content Ideas</li>
                    <li>✓ Content Generation</li>
                    <li>✓ Citation Suggestions</li>
                    <li className="text-gray-400">✗ Website Analytics</li>
                </ul>
                <p className="text-lg font-bold mt-4">$200 /month</p>
                {!admin &&
                    <button
                        className="mt-4 bg-teal-500 text-white py-2 px-4 rounded"
                        onClick={() => handlePlanSelection('Pro')}
                    >
                        Get Started
                    </button>
                }
            </div>

            <div className="bg-white shadow-md p-5 rounded-lg flex-1">
                <h2 className="font-bold text-xl">Enterprise</h2>
                <ul className="mt-4">
                    <li>✓ Premium Unlimited KeyWord Research</li>
                    <li>✓ Content Ideas</li>
                    <li>✓ Content Generation</li>
                    <li>✓ Citation Suggestions</li>
                    <li>✓ Website Analytics</li>
                </ul>
                <p className="text-lg font-bold mt-4">$400 /month</p>
                {!admin &&
                    <button
                        className="mt-4 bg-teal-500 text-white py-2 px-4 rounded"
                        onClick={() => handlePlanSelection('Enterprise')}
                    >
                        Get Started
                    </button>
                }
            </div>
        </div>
    )
}

