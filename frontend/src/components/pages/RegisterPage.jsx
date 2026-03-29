

import React from 'react'
import LoginForm from '../bahagian/loginForm'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import RegisterForm from '../bahagian/RegisterForm'


const RegisterPage = () => {

  const [active,setActive] = useState('register')

  const navigate = useNavigate();
  
  return (
    <div className='flex justify-center items-center bg-[#0F0F0F] h-screen '>
           <div className='bg-[#1A1A1A] p-[36px] text-[#8A8278] rounded-[10px] h-[600px] flex flex-col justify-around'>

     <div className='bg-[#1E1E1E] flex justify-around p-2 rounded-[10px] mb-4 cursor-pointer gap-2'>
      <button onClick={()=> {setActive('login'); navigate('/login')}} className={ `transition-all rounded-2xl p-2  cursor-pointer ${active === 'login' ? 'bg-yellow-300 text-black ' : 'bg-transparent'}`}>Sign In</button>
      <button onClick={()=>setActive('register')} className={` p-2 transition-all rounded-2xl cursor-pointer ${active === 'register' ? 'bg-yellow-300 text-black ' : 'bg-transparent' }` }  >Create Account</button>
     </div>

                    <div className='mb-3'>
                      <h1 className='text-[22px] text-white' >Create account</h1>
                      <p className='text-[13px]'>Join millions of shoppers today</p>
                    </div>
                  

                       <RegisterForm/>

                      
           </div>
    </div>
  )
}

export default RegisterPage
