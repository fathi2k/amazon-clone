import React from 'react'
import LoginForm from '../bahagian/loginForm'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const LoginPage = () => {

  const [active,setActive] = useState('login')

  const navigate = useNavigate();

  return (
    <div className='flex justify-center items-center bg-[#0F0F0F] h-screen '>
           <div className='bg-[#1A1A1A] p-[36px] text-white rounded-[10px] h-[500px] flex flex-col justify-around'>

     <div className='bg-[#1E1E1E] flex justify-around p-2 rounded-[10px] mb-4'>
      <button onClick={()=>{setActive('login')}} className={ `transition-all rounded-2xl cursor-pointer p-2 ${active === 'login' ? 'bg-yellow-300 text-black ' : 'bg-transparent'}`}>Sign In</button>
      <button onClick={()=>{setActive('register');  navigate('/register')}} className={` p-2 transition-all cursor-pointer rounded-2xl ${active === 'register' ? 'bg-yellow-300 text-black ' : 'bg-transparent' }`} >Create Account</button>
     </div>

                      <h1>Sign in to continue shopping</h1>

                      <LoginForm/>

                      
           </div>
    </div>
  )
}

export default LoginPage
