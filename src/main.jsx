import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainPage from './components/pages/MainPage.jsx'


const routerr = createBrowserRouter([
  {
    path : '/',
    element : <MainPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerr}/>
  </StrictMode>,
)
