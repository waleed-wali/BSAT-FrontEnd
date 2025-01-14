import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Login/AdminDashboard/Sidebar.jsx';

function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-grow h-screen overflow-hidden">
        <div className="overflow-auto h-full">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
