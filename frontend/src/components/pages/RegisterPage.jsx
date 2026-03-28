import React from 'react'
import LoginForm from '../bahagian/loginForm'
import RegisterForm from '../bahagian/RegisterForm'

const RegisterPage = () => {
  return (
    <div className='flex justify-center items-center bg-gray-400 h-screen'>
           <div className='bg-white p-2'>
                      <h1>Register</h1>

                      <RegisterForm/>
           </div>
    </div>
  )
}

export default RegisterPage
