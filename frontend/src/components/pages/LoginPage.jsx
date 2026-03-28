import React from 'react'
import LoginForm from '../bahagian/loginForm'

const LoginPage = () => {
  return (
    <div className='flex justify-center items-center bg-gray-400 h-screen'>
           <div className='bg-white p-2'>
                      <h1>Sign in</h1>

                      <LoginForm/>
           </div>
    </div>
  )
}

export default LoginPage
