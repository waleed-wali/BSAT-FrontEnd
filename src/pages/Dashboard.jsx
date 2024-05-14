import React, { useState } from 'react';
import logo from './Logo.svg.svg'; // Ensure the logo path is correct
import keyword from './keyword.svg';
import setting from './setting.svg';
import Audit from './Audit.svg';
import citation from './citation.svg';
import contentc from './contentc.svg';
import Analytics from './Analytics.svg';
import Vectorlogout from './Vectorlogout.svg';
import settin from './settin.svg';
import WEBANA from './WEBANA.svg';
import WebAdt from './WebAdt.svg';
import profile from './profile.svg';
import KeyResearch from './KeyResearch.svg';
import ccreation from './ccreation.svg';
import csuggestion from './csuggestion.svg';
import blog from './blog.svg';
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
                                <img src={keyword} alt="Keyword Research" className="h-24 w-24 mb-6" />
                                <span className="text-lg text-gray-700">Keyword Research</span>
                            </div>
                            <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:bg-gray-100 transition ease-in duration-200">
                                <img src={Audit} alt="Audit Report" className="h-24 w-24 mb-6" />
                                <span className="text-lg text-gray-700">Audit Report</span>
                            </div>
                            <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:bg-gray-100 transition ease-in duration-200">
                                <img src={citation} alt="Citation Suggestions" className="h-24 w-24 mb-6" />
                                <span className="text-lg text-gray-700">Citation Suggestions</span>
                            </div>
                            <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:bg-gray-100 transition ease-in duration-200">
                                <img src={contentc} alt="Content Ideas" className="h-24 w-24 mb-6" />
                                <span className="text-lg text-gray-700">Content Ideas</span>
                            </div>
                            <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:bg-gray-100 transition ease-in duration-200">
                                <img src={Analytics} alt="Analytics" className="h-24 w-24 mb-6" />
                                <span className="text-lg text-gray-700">Analytics</span>
                            </div>
                            <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:bg-gray-100 transition ease-in duration-200">
                                <img src={setting} alt="Settings" className="h-24 w-24 mb-6" />
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

    return (
        <div className="flex min-h-screen bg-gray-50">
            <div className="bg-teal-800 text-white w-64 space-y-6 py-7 px-2 flex flex-col justify-between">
                <div>
                    <a href="/" className="py-4 flex items-center space-x-2 px-4">
                        <img src={logo} alt="Logo" className="h-8 w-8" />
                    </a>
                    <nav>
                    {/* List of navigation links with dynamic class for active state */}
                    <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'dashboard' ? 'bg-gray-500  '  : ''}`} onClick={() => setActiveTab('dashboard')}><img src={IMAGES.dashboard} alt="Dashboard" className="h-5 w-5" />Dashboard</a>
                    <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'blogs' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('blogs')}><img src={blog} alt="blog" className="h-5 w-5" />Blogs</a>
                    <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'profile' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('profile')}><img src={profile} alt="profile" className="h-5 w-5" />Profile</a>
                    <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'keywordresearch' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('keywordresearch')}><img src={KeyResearch} alt="Keyword Research" className="h-5 w-5" />Keyword Research</a>
                    <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'websiteaudit' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('websiteaudit')}><img src={WebAdt} alt="web Audit" className="h-5 w-5" />Website Audit</a>
                    <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'contentcreationideas' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('contentcreationideas')}><img src={ccreation} alt="content creation" className="h-5 w-5" />Content Creation Ideas</a>
                    <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'citationsuggestion' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('citationsuggestion')}><img src={csuggestion} alt="citation suggestion" className="h-5 w-5" />Citation Suggestion</a>
                    <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'webanalytics' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('webanalytics')}><img src={WEBANA} alt="Wab Analytics" className="h-5 w-5" />Web Analytics</a>
                    <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'settings' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('settings')}><img src={settin} alt="Settings" className="h-5 w-5" />Settings</a>
                    </nav>
                </div>
                <button onClick={handleLogout} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded flex items-centre space-x-2">
            <img src={Vectorlogout} alt="Logout" className="h-5 w-5" />
            <span>Logout</span>
        </button>
            </div>
            <div className="flex-grow p-10">
                <div className="flex justify-between items-center mb-6">
                    <input 
                        type="text" 
                        placeholder= "Type here to search..." 
                        
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}

                        

                        className="p-2 w-1/4 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
                    />
                    
                </div>
                {getContent()}
            </div>
        </div>
    );
}

export default Dashboard;
