import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import SignUp from './pages/SignUp.jsx';
import ForgetPassword from './pages/ForgetPassword.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Home from './pages/Home.jsx';
import Admin from './pages/Admin.jsx';
import Admindashboard from './pages/Admindashboard.jsx';
import Paymenthome from './pages/Paymenthome.jsx';
import PaymentPlans from './pages/PaymentPlans.jsx';
import CompetitorAnalysis from './components/admin/CompetitorAnalysis';
import UserSidebar from './components/user/UserSidebar.jsx';

// Wrapper to conditionally show the sidebar based on the route
const AppWrapper = ({ children }) => {
  const location = useLocation();

  // Show the sidebar on specific routes like /competitor-analysis or /dashboard
  const showSidebar = location.pathname === '/competitor-analysis' || location.pathname === '/dashboard';

  return (
    <div className="flex min-h-screen">
      {showSidebar && <UserSidebar />} {/* Conditionally show sidebar */}
      <div className={`flex-grow p-4 ${showSidebar ? 'ml-64' : ''}`}> {/* Adjust layout if sidebar is shown */}
        {children}
      </div>
    </div>
  );
};

// Define the router with conditional sidebar logic
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppWrapper>
        <Home />
      </AppWrapper>
    ),
    errorElement: <div>Error! 404</div>,
    children: [
      {
        path: "/",
        element: <LoginPage />
      }
    ]
  },
  {
    path: "/login",
    element: (
      <AppWrapper>
        <LoginPage />
      </AppWrapper>
    )
  },
  {
    path: "/competitor-analysis",
    element: (
      <AppWrapper>
        <CompetitorAnalysis />
      </AppWrapper>
    )
  },
  {
    path: "/signup",
    element: (
      <AppWrapper>
        <SignUp />
      </AppWrapper>
    )
  },
  {
    path: "/forgetpassword",
    element: (
      <AppWrapper>
        <ForgetPassword />
      </AppWrapper>
    )
  },
  {
    path: "/dashboard",
    element: (
      <AppWrapper>
        <Dashboard />
      </AppWrapper>
    )
  },
  {
    path: "/home",
    element: (
      <AppWrapper>
        <Home />
      </AppWrapper>
    )
  },
  {
    path: "/admin",
    element: (
      <AppWrapper>
        <Admin />
      </AppWrapper>
    )
  },
  {
    path: "/admindashboard",
    element: (
      <AppWrapper>
        <Admindashboard />
      </AppWrapper>
    )
  },
  {
    path: "/paymenthome",
    element: (
      <AppWrapper>
        <Paymenthome />
      </AppWrapper>
    )
  },
  {
    path: "/paymentplans",
    element: (
      <AppWrapper>
        <PaymentPlans />
      </AppWrapper>
    )
  },
  {
    path: "*",
    element: <div>Error! 404 - Page not found</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
