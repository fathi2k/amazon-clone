import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainPage from './components/pages/MainPage.jsx'
import CartPage from './components/pages/CartPage.jsx'
import CartHistoryPage from './components/pages/CartHistoryPage.jsx'
import SideBar from './components/bahagian/sidebar.jsx'
import AdminPage from './components/pages/AdminPage.jsx'
import LoginPage from './components/pages/LoginPage.jsx'
import RegisterPage from './components/pages/RegisterPage.jsx'


const routerr = createBrowserRouter([
  {
    path : '/',
    element : <MainPage/>
  },{
    path : '/cart',
    element : <CartPage/>
  },{
    path : '/orderHistory',
    element : <CartHistoryPage/>
  },{
    path : '/admin',
    element : <AdminPage/>
  },{
    
    path : '/register',
    element : <RegisterPage/>
    
  },{
    path : '/login',
    element : <LoginPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerr}/>
  </StrictMode>,
)
