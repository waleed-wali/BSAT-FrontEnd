// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import DashboardContent from './components/Login/Dashboard/DashboardContent.jsx';
// import Layout from './layouts/Layout.jsx';
// import './index.css';
// import { RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
// import LoginPage from './pages/LoginPage.jsx';
// import SignUp from './pages/SignUp.jsx';
// import ForgetPassword from './pages/ForgetPassword.jsx';
// import Dashboard from './pages/Dashboard.jsx';
// import Home from './pages/Home.jsx';
// import Admin from './pages/Admin.jsx';
// import Admindashboard from './pages/Admindashboard.jsx';
// import Paymenthome from './pages/Paymenthome.jsx';
// import PaymentPlans from './pages/PaymentPlans.jsx';
// import CompetitorAnalysis from './components/admin/CompetitorAnalysis';
// import ConfirmPaymentScreen from './components/PaymentConfirmScreen.jsx';
// import UserProfile from './components/Login/AdminDashboard/UserProfile.jsx';
// import Profile from './components/Login/Dashboard/Profile.jsx';
// import KeywordResearch from './components/Login/Dashboard/KeywordResearch.jsx';
// import ContentIdeas from './components/Login/Dashboard/ContentIdeas.jsx';
// import AdsGeneration from './components/Login/Dashboard/AdsGeneration.jsx';
// import ChatBot from './components/Login/Dashboard/ChatBot.jsx';
// import WebsiteAudit from './components/Login/Dashboard/WebsiteAudit.jsx';
// import AuditProgress from './components/Login/Dashboard/AuditProgress.jsx';
// import KeywordAudit from './components/Login/Dashboard/keywordAudit.jsx';

// // Wrapper to conditionally show the sidebar based on the route
// const AppWrapper = ({ children }) => {
//   const location = useLocation();

//   // Show the sidebar on specific routes like /competitor-analysis or /dashboard
//   const showSidebar = location.pathname === '/competitor-analysis' || location.pathname === '/dashboard';

//   return (
//     <div className="flex min-h-screen ">
//       {/* {showSidebar }  */}
//       <div className={`flex-grow  }`}>
//         {children}
//       </div>
//     </div>
//   );
// };

// // Define the router with conditional sidebar logic
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <AppWrapper>
//         <Layout />
//         < Profile/>
//       </AppWrapper>
//     ),
//     errorElement: <div>Error! 404</div>,
//     children: [
    
//       {
//         path: "ddashboard",
//         element: (
//           <AppWrapper>
//             <DashboardContent />
//           </AppWrapper>
//         )
//       },
//       {
//         path: "profile",
//         element: (
//           <AppWrapper>
//             < Profile/>
//           </AppWrapper>
//         )
//       },
//       {
//         path: "Keyword-research",
//         element: (
//           <AppWrapper>
//             < KeywordResearch/>
//           </AppWrapper>
//         )
//       },
     
//       {
//         path: "content-ideas",
//         element: (
//           <AppWrapper>
//             < ContentIdeas/>
//           </AppWrapper>
//         )
//       },
//       {
//         path: "website-audit",
//         element: (
//           <AppWrapper>
//             < KeywordAudit/>
//           </AppWrapper>
//         )
//       },
//       {
//         path: "ads-generation",
//         element: (
//           <AppWrapper>
//             < AdsGeneration/>
//           </AppWrapper>
//         )
//       },
//       {
//         path: "competitor-analysis",
//         element: (
//           <AppWrapper>
//             < CompetitorAnalysis/>
//           </AppWrapper>
//         )
//       },
//       {
//         path: "chat-bot",
//         element: (
//           <AppWrapper>
//             < ChatBot/>
//           </AppWrapper>
//         )
//       },
      
      
//     ]
//   },
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "/login",
//     element: (
//       <AppWrapper>
//         <LoginPage />
//       </AppWrapper>
//     )
//   },
//   {
//     path: "/competitor-analysis",
//     element: (
//       <AppWrapper>
//         <CompetitorAnalysis />
//       </AppWrapper>
//     )
//   },
//   {
//     path: "/signup",
//     element: (
//       <AppWrapper>
//         <SignUp />
//       </AppWrapper>
//     )
//   },
//   {
//     path: "/forgetpassword",
//     element: (
//       <AppWrapper>
//         <ForgetPassword />
//       </AppWrapper>
//     )
//   },
//   {
//     path: "/dashboard",
//     element: (
//       <AppWrapper>
//         <Dashboard />
//       </AppWrapper>
//     )
//   },
//   // {
//   //   path: "/ddashboard",
//   //   element: (
//   //     <AppWrapper>
//   //       <DashboardContent />
//   //     </AppWrapper>
//   //   )
//   // },
//   {
//     path: "/paymenthome",
//     element: (
//       <AppWrapper>
//         <Home />
//       </AppWrapper>
//     )
//   },
//   {
//     path: "/admin",
//     element: (
//       <AppWrapper>
//         <Admin />
//       </AppWrapper>
//     )
//   },
//   {
//     path: "/admindashboard",
//     element: (
//       <AppWrapper>
//         <Admindashboard />
//       </AppWrapper>
//     )
//   },
//   {
//     path: "/profile",
//     element: (
//       <AppWrapper>
//         <UserProfile />
//       </AppWrapper>
//     )
//   },
//   {
//     path: "/home",
//     element: (
//       <AppWrapper>
//         <Paymenthome />
//       </AppWrapper>
//     )
//   },
//   {
//     path: "/paymentplans",
//     element: (
//       <AppWrapper>
//         <PaymentPlans />
//       </AppWrapper>
//     )
//   },
//   {
//     path: "/confirm-screen",
//     element: (
//       <AppWrapper>
//         <ConfirmPaymentScreen />
//       </AppWrapper>
//     )
//   },
//   {
//     path: "*",
//     element: <div>Error! 404 - Page not found</div>
//   }
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );



import React from 'react';
import ReactDOM from 'react-dom/client';
import DashboardContent from './components/Login/Dashboard/DashboardContent.jsx';
import Layout from './layouts/Layout.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
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
import ConfirmPaymentScreen from './components/PaymentConfirmScreen.jsx';
import UserProfile from './components/Login/AdminDashboard/UserProfile.jsx';
import Profile from './components/Login/Dashboard/Profile.jsx';
import KeywordResearch from './components/Login/Dashboard/KeywordResearch.jsx';
import ContentIdeas from './components/Login/Dashboard/ContentIdeas.jsx';
import AdsGeneration from './components/Login/Dashboard/AdsGeneration.jsx';
import ChatBot from './components/Login/Dashboard/ChatBot.jsx';

import WebsiteAudit from './components/Login/Dashboard/WebsiteAudit.jsx';
import AuditProgress from './components/Login/Dashboard/AuditProgress.jsx';
import KeywordAudit from './components/Login/Dashboard/keywordAudit.jsx';
import EditPayment from './components/Login/AdminDashboard/EditPayment.jsx'
import AdminDashboard from './pages/Admindashboard.jsx';
import UsersTable from './components/Login/AdminDashboard/UsersTable.jsx'
import Posts from './components/Login/AdminDashboard/posts';
import CreateNewPost from './components/Login/AdminDashboard/CreateNewPost';

// import EditPayment from './components/Login/AdminDashboard/EditPayment';
import Payment_Plans from './components/Login/AdminDashboard/PaymentPlan';
import SystemAnalytics from './components/Login/AdminDashboard/SystemAnalytics';
import ArticleWriting from './components/Login/Dashboard/ArticleWriting.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Paymenthome />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/forgetpassword",
    element: <ForgetPassword />
  },
  // Layout with sidebar for dashboard-related routes
  {
    path: "/",
    element: <Layout />,
    children: [
      // { path: "/dashboard", element: <Dashboard /> },
      { path: "ddashboard", element: <DashboardContent /> },
      { path: "profile", element: <Profile /> },
      { path: "user-profile", element: <UserProfile /> },
      { path: "keyword-research", element: <KeywordResearch /> },
      { path: "content-ideas", element: <ContentIdeas /> },
      { path: "website-audit", element: <AuditProgress /> },
      { path: "website-audit/keyword-audit", element: <KeywordAudit /> },
      { path: "view-audit", element: <WebsiteAudit /> },
      { path: "article-writing", element: <ArticleWriting /> },
      { path: "ads-generation", element: <AdsGeneration /> },
      { path: "competitor-analysis", element: <CompetitorAnalysis /> },
      { path: "chat-bot", element: <ChatBot /> },
      { path: "audit-progress", element: <AuditProgress /> }
    ]
  },
  
  // {
  //   path: "/admindashboard",
  //   element: <Admindashboard />
  // },
  // {
  //   path: "/paymenthome",
  //   element: <Paymenthome />
  // },
  {
    path: "/paymentplans",
    element: <PaymentPlans />
  },
  {
    path: "/confirm-screen",
    element: <ConfirmPaymentScreen />
  },
  // { path: "/edit-payment-plan",
  //   element: <EditPayment /> },
  //   { path: "/admindashboard/PaymentPlan",
  //     element: <EditPayment /> },
  {
    path: "/admin-dashboard",
    element: <Admindashboard />,
    children: [
      { path: "UserProfile", element: <Admin /> },
      { path: "users", element: < UsersTable/> },
      { path: "posts", element: <Posts /> },
      { path: "create-post", element: <CreateNewPost /> },
      { path: "SystemAnalytics", element: <SystemAnalytics /> },
      { path: "PaymentPlan", element: <Payment_Plans /> },
      { path: "edit-payment-plan", element: <EditPayment /> }
    ]
  },
  {
    path: "*",
    element: <div>Error! 404 - Page not found</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </React.StrictMode>
);
