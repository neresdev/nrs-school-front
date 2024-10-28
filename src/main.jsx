import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import LoginPage from './pages/LoginPage.jsx'

const Layout = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
