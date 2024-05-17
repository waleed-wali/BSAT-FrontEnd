import React, { useState } from 'react';

import { IMAGES } from '../constants/images';

function Dashboard() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [searchQuery, setSearchQuery] = useState("");

    const handleLogout = () => {
        console.log("Logging out..."); // Implement your logout logic here
    };

    const getContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return (
                    <>
                        <div className="text-2xl text-center font-bold text-Black-800 mb-6">Full Services to Grow Your Business</div>
                        <div className="text-m text-gray-600 text-center mb-6">Rely on seasoned professionals for tailored SEO advice and strategic planning aligned with your unique goals</div>
                        <div className="grid grid-cols-3 gap-3">
                            {/* Increase padding and adjust flex alignment for larger button presentation */}
                            <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:bg-gray-100 transition ease-in duration-200">
                                <img src={IMAGES.keyword} alt="Keyword Research" className="h-24 w-24 mb-6" />
                                <span className="text-lg text-gray-700">Keyword Research</span>
                            </div>
                            <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:bg-gray-100 transition ease-in duration-200">
                                <img src={IMAGES.Audit} alt="Audit Report" className="h-24 w-24 mb-6" />
                                <span className="text-lg text-gray-700">Audit Report</span>
                            </div>
                            <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:bg-gray-100 transition ease-in duration-200">
                                <img src={IMAGES.citation} alt="Citation Suggestions" className="h-24 w-24 mb-6" />
                                <span className="text-lg text-gray-700">Citation Suggestions</span>
                            </div>
                            <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:bg-gray-100 transition ease-in duration-200">
                                <img src={IMAGES.contentc} alt="Content Ideas" className="h-24 w-24 mb-6" />
                                <span className="text-lg text-gray-700">Content Ideas</span>
                            </div>
                            <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:bg-gray-100 transition ease-in duration-200">
                                <img src={IMAGES.Analytics} alt="Analytics" className="h-24 w-24 mb-6" />
                                <span className="text-lg text-gray-700">Analytics</span>
                            </div>
                            <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:bg-gray-100 transition ease-in duration-200">
                                <img src={IMAGES.setting} alt="Settings" className="h-24 w-24 mb-6" />
                                <span className="text-lg text-gray-700">Settings</span>
                            </div>
                        </div>
                    </>
                );
            case 'profile':
                return <div className="text-center p-4">Profile Content</div>;
            // Other cases...
            default:
                return <div className="text-center p-4">Select a content</div>;
        }
        
    };

     // Define the TopNavbar component
     const TopNavbar = () => {
        return (
            <nav className="bg-transparent text-white p-4 fixed top-0 left-64 w-[calc(100%-16rem)] flex justify-between items-center z-10">
                <div className="flex items-center space-x-4">
                <img src={IMAGES.burger} alt="Icon 1" className="h-8 w-8" />
                    <input
                        type="text"
                        
                        placeholder="Type Anything..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="p-2 w-64 border border-transparent rounded-full focus:outline-none focus:border-teal-500"
                    />
                </div>
                <div className="flex items-center space-x-4">
                <img src={IMAGES.Profile} alt="Icon 1" className="h-12 w-12" />
                    <img src={IMAGES.Setting} alt="Icon 2" className="h-6 w-6" />
                    <img src={IMAGES.Bell} alt="Icon 3" className="h-6 w-6" />
                    
                </div>
            </nav>
        );
    };


    return (
        <div className="flex min-h-screen bg-gray-50">
            <div className="bg-teal-800 text-white w-64 space-y-6 py-7 px-2 flex flex-col justify-between">
                <div>
                    <a href="/" className="py-4 flex items-center space-x-2 px-4">
                        <img src={IMAGES.logo} alt="Logo" className="h-8 w-8" />
                    </a>
                    <nav>
                    {/* List of navigation links with dynamic class for active state */}
                    <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'dashboard' ? 'bg-gray-500  '  : ''}`} onClick={() => setActiveTab('dashboard')}><img src={IMAGES.dashboard} alt="Dashboard" className="h-5 w-5" />Dashboard</a>
                    <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'blogs' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('blogs')}><img src={IMAGES.blog} alt="blog" className="h-5 w-5" />Blogs</a>
                    <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'profile' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('profile')}><img src={IMAGES.profile} alt="profile" className="h-5 w-5" />Profile</a>
                    <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'keywordresearch' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('keywordresearch')}><img src={IMAGES.KeyResearch} alt="Keyword Research" className="h-5 w-5" />Keyword Research</a>
                    <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'websiteaudit' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('websiteaudit')}><img src={IMAGES.WebAdt} alt="web Audit" className="h-5 w-5" />Website Audit</a>
                    <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'contentcreationideas' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('contentcreationideas')}><img src={IMAGES.ccreation} alt="content creation" className="h-5 w-5" />Content Creation Ideas</a>
                    <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'citationsuggestion' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('citationsuggestion')}><img src={IMAGES.csuggestion} alt="citation suggestion" className="h-5 w-5" />Citation Suggestion</a>
                    <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'webanalytics' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('webanalytics')}><img src={IMAGES.WEBANA} alt="Wab Analytics" className="h-5 w-5" />Web Analytics</a>
                    <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'settings' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('settings')}><img src={IMAGES.settin} alt="Settings" className="h-5 w-5" />Settings</a>
                    </nav>
                    
                </div>
                <button onClick={handleLogout} className="bg-gray-500 hover:bg-gray-600 text-white  py-2 px-4 rounded flex items-centre space-x-2">
            <img src={IMAGES.Vectorlogout} alt="Logout" className="h-5 w-5" />
            <span>Logout</span>
        </button>
            </div>
            <div className="flex-grow p-10">
                <div className="flex justify-between items-center mb-6">
                                      
                </div>
                {getContent()}

            </div>




        </div>
        
    );
}

export default Dashboard;



