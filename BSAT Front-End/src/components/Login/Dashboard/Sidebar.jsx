// import React from 'react';
// import { IMAGES } from '../../../constants/images';
// import { useNavigate } from 'react-router-dom';

// const Sidebar = ({ activeTab, setActiveTab }) => {
//   const navigate=useNavigate()
//   const handleLogout = () => {
//     localStorage.clear();
//     navigate('/login')
//   };
  
//   return (
//     <div className="bg-teal-800 text-white w-64 space-y-6 py-7 px-2 flex flex-col justify-between">
//       <div>
//         <a href="/" className="py-2 flex items-center space-x-2 px-4">
//           <img src={IMAGES.logo} alt="Logo" className="h-8 w-8" />
//         </a>
//         <nav>
      
//           {[
//             { name: 'Dashboard', icon: IMAGES.dashboard, tab: 'dashboard' },
//             { name: 'Blogs', icon: IMAGES.blog, tab: 'blogs' },
//             { name: 'Profile', icon: IMAGES.profile, tab: 'Profile' },
//             { name: 'Keyword Research', icon: IMAGES.KeyResearch, tab: 'keywordresearch' },
//             { name: 'Website Audit', icon: IMAGES.WebAdt, tab: 'websiteaudit' },
//             { name: 'Content Ideas', icon: IMAGES.ccreation, tab: 'contentideas' },
//             { name: 'ADs Generation', icon: IMAGES.csuggestion, tab: 'adsgeneration' },
//             // { name: 'Keyword Analytics', icon: IMAGES.WEBANA, tab: 'keywordanalytics' },
//             { name: 'Competitor Analysis', icon: IMAGES.WEBANA, tab:'competitoranalysis' },
//             { name: 'Article Writing', icon: IMAGES.WEBANA, tab: 'article' },
//             { name: 'Chat Bot', icon: IMAGES.keyword, tab:"chatbot" },

//             // { name: 'Chat Bot', icon: IMAGES.keyword, tab: 'ChatBot' },
//             // { name: 'Settings', icon: IMAGES.setting, tab: 'setting' },
//           ].map(({ name, icon, tab }) => (
//             <a
//               key={name}
//               href=""
//               className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === tab ? 'bg-gray-500 ' : ''}`}
//               // onClick={() => setActiveTab(tab)}
//               onClick={(e) => {
//                 e.preventDefault();
//                 setActiveTab(tab);
//               }}
//             >
//               <img src={icon} alt={name} className="h-4 w-4" />
//               {name}
//             </a>
            
//           ))}
//           <div className="mt-auto p-4"> {/* mt-auto pushes the button to the bottom */}
//         <button
//           onClick={handleLogout}
//           className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded flex items-center space-x-2"
//         >
//           <img src={IMAGES.Vectorlogout} alt="Logout" className="h-5 w-5" />
//           <span>Logout</span>
//         </button>
//       </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;



import React from 'react';
import { IMAGES } from '../../../constants/images';
import { useNavigate, Link } from 'react-router-dom';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="bg-teal-800 text-white w-64 space-y-6 py-7 px-2 h-full flex flex-col justify-between">
      <div>
        <Link to="/" className="py-2 flex items-center space-x-2 px-4">
          <img src={IMAGES.logo} alt="Logo" className="h-8 w-8" />
        </Link>
        <nav>
          {[
            { name: 'Dashboard', icon: IMAGES.dashboard, tab: 'dashboard', route: '/ddashboard' },
            // { name: 'Blogs', icon: IMAGES.blog, tab: 'blogs', route: '/blogs' },
            { name: 'Profile', icon: IMAGES.profile, tab: 'Profile', route: '/profile' },
            { name: 'Keyword Research', icon: IMAGES.KeyResearch, tab: 'keywordresearch', route: '/keyword-research' },
            { name: 'Website Audit', icon: IMAGES.WebAdt, tab: 'websiteaudit', route: '/website-audit' },
            // { name: 'Content Ideas', icon: IMAGES.ccreation, tab: 'contentideas', route: '/content-ideas' },
            { name: 'ADs Generation', icon: IMAGES.csuggestion, tab: 'adsgeneration', route: '/ads-generation' },
            { name: 'Competitor Analysis', icon: IMAGES.WEBANA, tab: 'competitoranalysis', route: '/competitor-analysis' },
            { name: 'Article Writing', icon: IMAGES.WEBANA, tab: 'article', route: '/article-writing' },
            { name: 'Chat Bot', icon: IMAGES.keyword, tab: 'chatbot', route: '/chat-bot' },
          ].map(({ name, icon, tab, route }) => (
            <Link
              key={name}
              to={route}
              className={`block py-2.5 px-4 rounded transition duration-200 flex gap-4 text-sm items-left justify-left space-x-2 ${activeTab === tab ? 'bg-gray-500' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              <img src={icon} alt={name} className="h-4 w-4" />
              {name}
            </Link>
          ))}
          <div className="mt-auto p-4">
            <button
              onClick={handleLogout}
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded flex items-center space-x-2"
            >
              <img src={IMAGES.Vectorlogout} alt="Logout" className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
