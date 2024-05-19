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
import Homepage from './pages/Homepage.jsx'

const router = createBrowserRouter([ 
  {
    path:"/",
    element:<Layout />,
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
    path: "/Homepage",
    element:<Homepage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
