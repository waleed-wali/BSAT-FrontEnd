import React, { useState } from 'react';
import { IMAGES } from '../constants/images';


function Admindashboard() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [profilePic, setProfilePic] = useState(IMAGES.profilePic);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [keyword, setKeyword] = useState('');
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImage, setProductImage] = useState(null);

    const handleLogout = () => {
        console.log("Logging out..."); // Implement your logout logic here
    };
     
    const getContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return (
                    <div className="bg-white p-8 overflow-auto h-full">
                        <div className="text-2xl text-center font-bold text-Black-800 mb-6">Full Services to Grow Your Business</div>
                        <div className="text-m text-gray-600 text-center mb-6">Rely on seasoned professionals for tailored SEO advice and strategic planning aligned with your unique goals</div>
                        <div className="grid grid-cols-3 gap-3">
                            <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:bg-gray-100 transition ease-in duration-200">
                                <img src={IMAGES.Profiling} alt="profiling" className="h-24 w-24 mb-6" />
                                <span className="text-lg text-gray-700">PROFILE</span>
                            </div>
                            <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:bg-gray-100 transition ease-in duration-200">
                                <img src={IMAGES.Audit} alt="Audit Report" className="h-24 w-24 mb-6" />
                                <span className="text-lg text-gray-700">AUDIT REPORT</span>
                            </div>
                            <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:bg-gray-100 transition ease-in duration-200">
                                <img src={IMAGES.citation} alt="Ads generation" className="h-24 w-24 mb-6" />
                                <span className="text-lg text-gray-700">ADS GENERATION</span>
                            </div>
                            <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:bg-gray-100 transition ease-in duration-200">
                                <img src={IMAGES.contentc} alt="Content Ideas" className="h-24 w-24 mb-6" />
                                <span className="text-lg text-gray-700">CONTENT IDEAS</span>
                            </div>
                            <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:bg-gray-100 transition ease-in duration-200">
                                <img src={IMAGES.Analytics} alt="Analytics" className="h-24 w-24 mb-6" />
                                <span className="text-lg text-gray-700">KEYWORD ANALYTICS</span>
                            </div>
                            <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:bg-gray-100 transition ease-in duration-200">
                                <img src={IMAGES.competitor} alt="competitor" className="h-24 w-24 mb-6" />
                                <span className="text-lg text-gray-700">COMPETITORS ANALYSIS</span>
                            </div>
                            <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:bg-gray-100 transition ease-in duration-200">
                                <img src={IMAGES.Article} alt="Article" className="h-24 w-24 mb-6" />
                                <span className="text-lg text-gray-700">ARTICLE WRITING</span>
                            </div>
                            <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:bg-gray-100 transition ease-in duration-200">
                                <img src={IMAGES.keyword} alt="Keyword Research" className="h-24 w-24 mb-6" />
                                <span className="text-lg text-gray-700">KEYWORD RESEARCH</span>
                            </div>
                            <div className="bg-white shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:bg-gray-100 transition ease-in duration-200">
                                <img src={IMAGES.setting} alt="Settings" className="h-24 w-24 mb-6" />
                                <span className="text-lg text-gray-700">SETTINGS</span>
                            </div>
                        </div>
                    </div>
                );

                case 'profile':
                return (
                    <div>
                                d
                            </div>
                );


                case 'keywordresearch':
                    return (
                        <div>
                                d
                            </div>
                    );


                    case 'contentideas':
                    return (
                        <div>
                                d
                            </div>
                    );


                    case 'blogs':
                        return(
                            <div>
                                d
                            </div>
                        );


                        case 'keywordanalytics' :
                            return (
                                <div>
                                d
                            </div>
                              );

                        case 'competitor':
                            return(
                                <div>
                                d
                            </div>
   
                            );


                        case 'ADs generation':
                            return(<div>
                                d
                            </div>
                        );

                default:
                    return <div className="text-center p-4">Select a content</div>;
                }
                

                
    };

    return (
        <div className="flex min-h-screen bg-white">
            <div className="bg-teal-800 text-white w-64 space-y-6 py-7 px-2 flex flex-col justify-between">
                <div>
                    <a href="/" className="py-2 flex items-center space-x-2 px-4">
                        <img src={IMAGES.logo} alt="Logo" className="h-8 w-8" />
                    </a>
                    <nav>
                        <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'dashboard' ? 'bg-gray-500  ' : ''}`} onClick={() => setActiveTab('dashboard')}><img src={IMAGES.dashboard} alt="Dashboard" className="h-4 w-4" />Dashboard</a>
                        <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'blogs' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('blogs')}><img src={IMAGES.blog} alt="blog" className="h-4 w-4" />Blogs</a>
                        <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'profile' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('profile')}><img src={IMAGES.profile} alt="profile" className="h-4 w-4" />Profile</a>
                        <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'keywordresearch' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('keywordresearch')}><img src={IMAGES.KeyResearch} alt="Keyword Research" className="h-4 w-4" />Keyword Research</a>
                        <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'websiteaudit' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('websiteaudit')}><img src={IMAGES.WebAdt} alt="web Audit" className="h-4 w-4" />Website Audit</a>
                        <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'contentideas' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('contentideas')}><img src={IMAGES.ccreation} alt="content ideas" className="h-4 w-4" />Content Ideas</a>
                        <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'ADs generation' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('ADs generation')}><img src={IMAGES.csuggestion} alt="ADs generation" className="h-4 w-4" />ADs Generation</a>
                        <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'keywordanalytics' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('keywordanalytics')}><img src={IMAGES.WEBANA} alt="keyword Analytics" className="h-4 w-4" />Keyword Analytics</a>
                        <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'competitor' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('competitor')}><img src={IMAGES.WEBANA} alt="Competitor" className="h-4 w-4" />Competitors Analysis</a>
                        <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'article' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('article')}><img src={IMAGES.WEBANA} alt="Article" className="h-4 w-4" />Article Writing</a>
                        <a href="#" className={`block py-2 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'settings' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('settings')}><img src={IMAGES.settin} alt="Settings" className="h-4 w-4" />Settings</a>
                    </nav>
                </div>
                <button onClick={handleLogout} className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded flex items-center space-x-2">
                    <img src={IMAGES.Vectorlogout} alt="Logout" className="h-5 w-5" />
                    <span>Logout</span>
                </button>
            </div>
            <div className="flex-grow h-screen overflow-hidden">
                <div className="flex justify-between items-center mb-6"></div>
                <div className="overflow-auto h-full">
                    {getContent()}
                </div>
            </div>
        </div>
    );
}

export default Admindashboard;
