import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import Layout from './layouts/Layout.jsx'
import SignUp from './pages/SignUp.jsx'
import ForgetPassword from './pages/ForgetPassword.jsx'
import Dashboard from './pages/Dashboard.jsx'
// import Homepage from './pages/Homepage.jsx'
import Home from './pages/Home.jsx'
import Admin from './pages/Admin.jsx'
import Admindashboard from './pages/Admindashboard.jsx'

const router = createBrowserRouter([ 
  {
    path:"/",
    element:<Home/>,
    errorElement:<div>Error! 404 </div>,
    children:[
      {
        path:"/",
        element:<LoginPage/>
        
      }
    ]
  },
  {
    path: "/login",
    element:<LoginPage/>
  },
  {
    path: "/signup",
    element:<SignUp/>
  },
  {
    path: "/forgetpassword",
    element:<ForgetPassword/>
  },
  {
    path: "/dashboard",
    element:<Dashboard/>
  },

  {
    path: "/Home",
    element:<Home/>
  },
  {
    path: "/Admin",
    element:<Admin/>
  },
  {
    path: "/Admindashboard",
    element:<Admindashboard/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
