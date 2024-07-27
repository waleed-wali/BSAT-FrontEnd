import React, { useState } from 'react';
import { IMAGES } from '../constants/images';
import CustomButton from '../components/Login/CustomButton';


function Admindashboard() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [profilePic, setProfilePic] = useState(IMAGES.profilePic);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [Aboutme, setAboutme] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [Address , setAddress] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [keyword, setKeyword] = useState('');
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImage, setProductImage] = useState(null);

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

    const handleImageUpload = (event) => {
    setProductImage(URL.createObjectURL(event.target.files[0]));
    };
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
                                <img src={IMAGES.Profiling} alt="adminprofile" className="h-24 w-24 mb-6" />
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

                case 'adminprofile':
                return (
                    <div className="bg-white p-8 overflow-auto h-full">
                    <h2 className="text-2xl font-bold mb-4">Admin Profile</h2>
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
                            <label className="block text-gray-700">About Me</label>
                            <input type="text" value={Aboutme} onChange={(e) => setAboutme(e.target.value)} placeholder="About Me" className="w-full p-2 border border-gray-300 rounded mt-1" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Address</label>
                            <input type="text" value={Address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" className="w-full p-2 border border-gray-300 rounded mt-1" />
                        </div>
                        
                    </div>
                    <div className="flex justify-end mt-4">
                        
                        <button className="bg-gray-500 text-white py-2 px-4 rounded mr-2 hover:bg-gray-600 transition duration-200">Cancel</button>
                        <button className="bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-200">Save Changes</button>
                    </div>
                </div>
                );


                case 'users':
                    return (
                        <main className="flex-grow p-6 bg-gray-100">
                        <div className="bg-white p-6 rounded shadow-md">
                          <h2 className="text-xl font-semibold mb-4">Users</h2>
                          <table className="min-w-full bg-white rounded">
                            <thead>
                              <tr>
                                <th className="py-2 px-4 border-b text-left">Nombre</th>
                                <th className="py-2 px-4 border-b text-left">Apellido paterno</th>
                                <th className="py-2 px-4 border-b">Activo</th>
                                <th className="py-2 px-4 border-b">Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="py-2 px-4 border-b">Hector Hugo</td>
                                <td className="py-2 px-4 border-b">Corona</td>
                                <td className="py-2 px-4 border-b text-center">
                                  <span className="text-green-500">Activo</span>
                                </td>
                                <td className="py-2 px-4 border-b text-center">
                                  <button className="text-blue-500 hover:underline">Edit</button>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b">Alberto</td>
                                <td className="py-2 px-4 border-b">Morales</td>
                                <td className="py-2 px-4 border-b text-center">
                                  <span className="text-green-500">Activo</span>
                                </td>
                                <td className="py-2 px-4 border-b text-center">
                                  <button className="text-blue-500 hover:underline">Edit</button>
                                </td>
                              </tr>
                              <tr>
                                <td className="py-2 px-4 border-b">Mauricio</td>
                                <td className="py-2 px-4 border-b">Nuñez</td>
                                <td className="py-2 px-4 border-b text-center">
                                  <span className="text-red-500">Inactivo</span>
                                </td>
                          




                                <td className="py-2 px-4 border-b text-center">
                                  <button className="text-blue-500 hover:underline">Edit</button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </main>
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
                    <a href="/" className="py-4 flex items-center space-x-2 px-4">
                        <img src={IMAGES.logo} alt="Logo" className="h-8 w-8" />
                    </a>
                    <nav>
                        <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'adminprofile' ? 'bg-gray-500  ' : ''}`} onClick={() => setActiveTab('adminprofile')}><img src={IMAGES.profile} alt="adminprofile" className="h-5 w-5" />Profile</a>
                        <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'posts' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('posts')}><img src={IMAGES.blog} alt="posts" className="h-5 w-5" />Post</a>
                        <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'users' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('users')}><img src={IMAGES.WEBANA} alt="users" className="h-5 w-5" />Users</a>
                        <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'systemanalytics' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('systemanalytics')}><img src={IMAGES.KeyResearch} alt="systemanalytics" className="h-5 w-5" />System Analytics</a>
                        <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'settings' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('settings')}><img src={IMAGES.settin} alt="Settings" className="h-5 w-5" />Settings</a>
                        <a href="#" className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === 'tools' ? 'bg-gray-500 ' : ''}`} onClick={() => setActiveTab('tools')}><img src={IMAGES.tool} alt="tools" className="h-5 w-5" />Tools</a>
                        
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
