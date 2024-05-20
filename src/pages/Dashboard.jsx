import React, { useState } from 'react';
import { IMAGES } from '../constants/images';

function Dashboard() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [profilePic, setProfilePic] = useState(IMAGES.profilePic);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleLogout = () => {
        console.log("Logging out..."); // Implement your logout logic here
    };

    const handleProfilePicChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleProfilePicDelete = () => {
        setProfilePic(IMAGES.defaultProfilePic); // Assuming you have a default profile picture
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
                    </div>
                );

                case 'profile':
                return (
                    <div className="bg-white p-8 overflow-auto h-full">
                        <h2 className="text-2xl font-bold mb-4">User Profile</h2>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <img src={profilePic} alt="User Profile" className="h-24 w-24 rounded-full" />
                            </div>
                            <div className="flex items-center">
                                <label className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200 cursor-pointer mr-2">
                                    Upload Your Profile
                                    <input type="file" accept="image/*" onChange={handleProfilePicChange} className="hidden" />
                                </label>
                                <button onClick={handleProfilePicDelete} className="bg-white text-black py-2 px-4 rounded border border-black hover:bg-gray-200 transition duration-200">
                                    Delete Profile
                                </button>
                            </div>
                        </div>
                        <hr className="my-6 border-gray-300" />
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <label className="block text-gray-700">First Name</label>
                                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" className="w-full p-2 border border-gray-300 rounded mt-1" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Last Name</label>
                                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" className="w-full p-2 border border-gray-300 rounded mt-1" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Email Address</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" className="w-full p-2 border border-gray-300 rounded mt-1" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Phone Number</label>
                                <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" className="w-full p-2 border border-gray-300 rounded mt-1" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Current Password</label>
                                <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} placeholder="Current Password" className="w-full p-2 border border-gray-300 rounded mt-1" />
                            </div>
                            <div>
                                <label className="block text-gray-700">New Password</label>
                                <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password" className="w-full p-2 border border-gray-300 rounded mt-1" />
                            </div>
                            <div>
                                <label className="block text-gray-700">Confirm Password</label>
                                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" className="w-full p-2 border border-gray-300 rounded mt-1" />
                            </div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button className="bg-gray-500 text-white py-2 px-4 rounded mr-2 hover:bg-gray-600 transition duration-200">Cancel</button>
                            <button className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200">Save Changes</button>
                        </div>
                    </div>
                );

                case 'keywordresearch':
                    return (
                        <div className="bg-white p-8 overflow-auto h-full">
                            <h2 className="text-2xl font-bold mb-4">Keyword Research</h2>
                            <div className="flex mb-4 space-x-2">
                                <input type="text" placeholder="Enter Keyword" className="w-full p-2 border border-gray-300 rounded" />
                                <input type="text" placeholder="Enter Your Location" className="w-full p-2 border border-gray-300 rounded" />
                                <button className="bg-teal-600 text-white p-2 rounded hover:bg-teal-700 transition duration-200">Analyze</button>
                            </div>
                            <div className="flex justify-between mb-4">
                                <div className="flex space-x-2">
                                    <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">All</button>
                                    <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">Paid</button>
                                    <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">Unpaid</button>
                                    <button className="bg-gray-200 text-black py-2 px-4 rounded hover:bg-gray-300 transition duration-200">Language</button>
                                </div>
                                <button className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200">Pay Dues</button>
                            </div>
                            <div className="mb-4">
                                <span>Total Keywords: 900</span>
                            </div>
                            <table className="w-full bg-white shadow-md rounded-lg">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="py-2 px-4 text-left"><input type="checkbox" /></th>
                                        <th className="py-2 px-4 text-left">Keywords</th>
                                        <th className="py-2 px-4 text-left">Avg. Monthly Volume</th>
                                        <th className="py-2 px-4 text-left">Competition</th>
                                        <th className="py-2 px-4 text-left">Top to Page Bid</th>
                                        <th className="py-2 px-4 text-left"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2 px-4 text-left"><input type="checkbox" /></td>
                                        <td className="py-2 px-4">Justin Septimus</td>
                                        <td className="py-2 px-4">1M - 10M</td>
                                        <td className="py-2 px-4 text-green-500">Low</td>
                                        <td className="py-2 px-4">$200</td>
                                        <td className="py-2 px-4 text-right"><button className="text-gray-500 hover:text-gray-700"><i className="fas fa-ellipsis-v"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 text-left"><input type="checkbox" /></td>
                                        <td className="py-2 px-4">Anika Rhiel Madsen</td>
                                        <td className="py-2 px-4">1M - 10M</td>
                                        <td className="py-2 px-4 text-orange-500">Average</td>
                                        <td className="py-2 px-4">$300</td>
                                        <td className="py-2 px-4 text-right"><button className="text-gray-500 hover:text-gray-700"><i className="fas fa-ellipsis-v"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 text-left"><input type="checkbox" /></td>
                                        <td className="py-2 px-4">Miracle Vaccaro</td>
                                        <td className="py-2 px-4">1M - 10M</td>
                                        <td className="py-2 px-4 text-green-500">Low</td>
                                        <td className="py-2 px-4">$250</td>
                                        <td className="py-2 px-4 text-right"><button className="text-gray-500 hover:text-gray-700"><i className="fas fa-ellipsis-v"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 text-left"><input type="checkbox" /></td>
                                        <td className="py-2 px-4">Mira Herwitz</td>
                                        <td className="py-2 px-4">1M - 10M</td>
                                        <td className="py-2 px-4 text-green-500">Low</td>
                                        <td className="py-2 px-4">$200</td>
                                        <td className="py-2 px-4 text-right"><button className="text-gray-500 hover:text-gray-700"><i className="fas fa-ellipsis-v"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 text-left"><input type="checkbox" /></td>
                                        <td className="py-2 px-4">Erin Levin</td>
                                        <td className="py-2 px-4">1M - 10M</td>
                                        <td className="py-2 px-4 text-green-500">Low</td>
                                        <td className="py-2 px-4">$200</td>
                                        <td className="py-2 px-4 text-right"><button className="text-gray-500 hover:text-gray-700"><i className="fas fa-ellipsis-v"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 text-left"><input type="checkbox" /></td>
                                        <td className="py-2 px-4">Jaxson Siphiron</td>
                                        <td className="py-2 px-4">1M - 10M</td>
                                        <td className="py-2 px-4 text-orange-500">Average</td>
                                        <td className="py-2 px-4">$200</td>
                                        <td className="py-2 px-4 text-right"><button className="text-gray-500 hover:text-gray-700"><i className="fas fa-ellipsis-v"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 text-left"><input type="checkbox" /></td>
                                        <td className="py-2 px-4">Mira Levin</td>
                                        <td className="py-2 px-4">1M - 10M</td>
                                        <td className="py-2 px-4 text-red-500">High</td>
                                        <td className="py-2 px-4">$750</td>
                                        <td className="py-2 px-4 text-right"><button className="text-gray-500 hover:text-gray-700"><i className="fas fa-ellipsis-v"></i></button></td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-4 text-left"><input type="checkbox" /></td>
                                        <td className="py-2 px-4">Lincoln Levin</td>
                                        <td className="py-2 px-4">1M - 10M</td>
                                        <td className="py-2 px-4 text-green-500">Low</td>
                                        <td className="py-2 px-4">$370</td>
                                        <td className="py-2 px-4 text-right"><button className="text-gray-500 hover:text-gray-700"><i className="fas fa-ellipsis-v"></i></button></td>
                                    </tr>
                                </tbody>
                            </table>
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
                    <a href="/" className="py-4 flex items-center space-x-2 px-4">
                        <img src={IMAGES.logo} alt="Logo" className="h-8 w-8" />
                    </a>
                    <nav>
                        <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'dashboard' ? 'bg-gray-500  ' : ''}`} onClick={() => setActiveTab('dashboard')}><img src={IMAGES.dashboard} alt="Dashboard" className="h-5 w-5" />Dashboard</a>
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

export default Dashboard;
