
import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './global.css'
import Layout from './Layout/Layout.jsx'

import { ToastContainer } from 'react-toastify'
import { RouterProvider } from 'react-router-dom'
import myRoutes from './Routes/routes.jsx'
import AuthProvider from './Context/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  <>
  <AuthProvider>
   <ToastContainer/>
   <RouterProvider router={myRoutes}/>
   </AuthProvider>
  </>
)
