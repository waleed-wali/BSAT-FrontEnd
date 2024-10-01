import React from 'react';
import { IMAGES } from '../../../constants/images';
import TabNavigationItem from './TabNavigationItem';

function Sidebar({ activeTab, setActiveTab }) {
  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="bg-teal-800 text-white w-64 space-y-6 py-7 px-2 flex flex-col justify-between">
      <div>
        <a href="/" className="py-4 flex items-center space-x-2 px-4">
          <img src={IMAGES.logo} alt="Logo" className="h-8 w-8" />
        </a>
        <nav>
          <TabNavigationItem label="UserProfile" icon={IMAGES.profile} activeTab={activeTab} setActiveTab={setActiveTab} tabKey="UserProfile" />
          <TabNavigationItem label="Post" icon={IMAGES.blog} activeTab={activeTab} setActiveTab={setActiveTab} tabKey="posts" />
          <TabNavigationItem label="Users" icon={IMAGES.WEBANA} activeTab={activeTab} setActiveTab={setActiveTab} tabKey="users" />
          <TabNavigationItem label="System Analytics" icon={IMAGES.KeyResearch} activeTab={activeTab} setActiveTab={setActiveTab} tabKey="systemanalytics" />
          <TabNavigationItem label="Settings" icon={IMAGES.settin} activeTab={activeTab} setActiveTab={setActiveTab} tabKey="settings" />
          <TabNavigationItem label="Tools" icon={IMAGES.tool} activeTab={activeTab} setActiveTab={setActiveTab} tabKey="tools" />
        </nav>
      </div>
      <button onClick={handleLogout} className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded flex items-center space-x-2">
        <img src={IMAGES.Vectorlogout} alt="Logout" className="h-5 w-5" />
        <span>Logout</span>
      </button>
    </div>
  );
}

export default Sidebar;
