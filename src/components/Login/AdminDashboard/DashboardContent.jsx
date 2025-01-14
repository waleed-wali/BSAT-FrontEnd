import React from 'react';
import UserProfile from './UserProfile';
import UsersTable from './UsersTable';
import Posts from './posts';
import CreateNewPost from './CreateNewPost';

import EditPayment from './EditPayment';
import PaymentPlans from './PaymentPlan';
import SystemAnalytics from './SystemAnalytics';
// Add more components as needed for other tabs

function DashboardContent({ activeTab }) {
  switch (activeTab) {
    case 'dashboard':
      return <div>Dashboard Content Here</div>;
    case 'UserProfile':
      return <UserProfile />;
    case 'users':
      return <UsersTable />;
    case 'posts':
      return<Posts/>;
    case 'SystemAnalytics':
      return< SystemAnalytics/>;
    case 'PaymentPlan':
      return<PaymentPlans/>
      case 'EditPaymentPlans':
        return<EditPayment/>

    default:
      return <div>Select a content</div>;
  }
}

export default DashboardContent;
