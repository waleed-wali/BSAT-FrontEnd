import React from 'react';
import Sidebar from '../components/Login/Dashboard/Sidebar'; // Import your Sidebar component
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar fixed on the left */}
      <div className="fixed top-0 left-0 h-full w-64">
        <Sidebar />
      </div>

      {/* Main content area on the right, scrollable */}
      <div className="ml-64 flex-1 bg-gray-100 overflow-y-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
