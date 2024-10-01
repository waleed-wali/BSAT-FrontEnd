import React from 'react';
import UserProfile from './UserProfile';
import UsersTable from './UsersTable';
// Add more components as needed for other tabs

function DashboardContent({ activeTab }) {
  switch (activeTab) {
    case 'dashboard':
      return <div>Dashboard Content Here</div>;
    case 'UserProfile':
      return <UserProfile />;
    case 'users':
      return <UsersTable />;
    default:
      return <div>Select a content</div>;
  }
}

export default DashboardContent;
