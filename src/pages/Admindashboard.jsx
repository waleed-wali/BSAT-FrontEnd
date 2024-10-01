import React, { useState } from 'react';
import { IMAGES } from '../constants/images';
import Sidebar from '../components/Login/AdminDashboard/Sidebar.jsx';
import DashboardContent from '../components/Login/AdminDashboard/DashboardContent.jsx';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-grow h-screen overflow-hidden">
        <div className="overflow-auto h-full">
          <DashboardContent activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
