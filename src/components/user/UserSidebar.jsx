// // src/components/Sidebar.jsx
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { IMAGES } from '../../constants/images';

// const UserSidebar = () => {
//     const [activeTab, setActiveTab] = useState('dashboard');
//     const navigate = useNavigate();

//     const handleNavigation = (tab, route) => {
//         setActiveTab(tab);
//         navigate(route);
//     };

//     return (
//         <div className="bg-teal-800 text-white w-64 space-y-6 py-7 px-2 flex flex-col justify-between">
//             <div>
//                 <a href="/" className="py-2 flex items-center space-x-2 px-4">
//                     <img src={IMAGES.logo} alt="Logo" className="h-8 w-8" />
//                 </a>
//                 <nav>
//                     <a
//                         className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left ${activeTab === 'dashboard' ? 'bg-gray-500' : ''}`}
//                         onClick={() => handleNavigation('dashboard', '/dashboard')}
//                     >
//                         <img src={IMAGES.dashboard} alt="Dashboard" className="h-4 w-4" />
//                         Dashboard
//                     </a>
//                     <a
//                         className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left ${activeTab === 'competitor' ? 'bg-gray-500' : ''}`}
//                         onClick={() => handleNavigation('competitor', '/competitor-analysis')}
//                     >
//                         <img src={IMAGES.WEBANA} alt="Competitor" className="h-4 w-4" />
//                         Competitors Analysis
//                     </a>

//                     <a
//                         className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left ${activeTab === 'competitor' ? 'bg-gray-500' : ''}`}
//                         onClick={() => handleNavigation('competitor', '/competitor-analysi')}
//                     >
//                         <img src={IMAGES.WEBANA} alt="Competitor" className="h-4 w-4" />
//                         Profile
//                     </a>
//                     {/* Add other links similarly */}
//                 </nav>
//             </div>
//             <button className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded flex items-center space-x-2">
//                 <img src={IMAGES.Vectorlogout} alt="Logout" className="h-5 w-5" />
//                 <span>Logout</span>
//             </button>
//         </div>
//     );
// };

// export default UserSidebar;
