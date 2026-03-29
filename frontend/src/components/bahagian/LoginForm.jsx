import React, { useState } from 'react'
import { Form } from 'react-router-dom'

import { IoIosArrowRoundForward } from "react-icons/io";



const LoginForm = () => {

const [inputValue,setInputValue] = useState({
  email : '',
  password : ''
})




//login

const handleSubmit = (e)=>{
  
  e.preventDefault();

  fetch('http://localhost:4000/login',{
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
        credentials: 'include', // TAMBAH NI — supaya cookie disimpan
    body : JSON.stringify({
      email : inputValue.email,
      password : inputValue.password
    })
  }).then(res => res.json()).then(data => alert(data.message))
  

  
}



  return (

    <>

    <form className='flex flex-col gap-3' action="" onSubmit={handleSubmit}>

  <div className='flex flex-col gap-3 mt-4 text-[#8A8278]'>

      <div className='flex flex-col'>
             <label htmlFor="" className='font-bold'>Email</label>
            <input type="email" className='border w-[300px] p-3 rounded-[10px] text-[14px] border-[#2E2E2E]' required   onChange={(e)=>setInputValue({...inputValue,email : e.target.value})} value={inputValue.email} placeholder='you@example.com' autoFocus/>
      </div>


        <div className='flex flex-col'>
             <label htmlFor="" className='font-bold'>Password</label>
            <input type="password" className='border w-[300px] p-3 rounded-[10px]  text-[14px] border-[#2E2E2E]'  required onChange={(e)=>setInputValue({...inputValue,password : e.target.value})} value={inputValue.password} placeholder='*******' />
      </div>
           
    </div>

    <div className='flex gap-2 mt-2 bg-[#FF9900] items-center p-2 rounded-[10px] justify-center text-black hover:bg-[#bb7308] transition-all'>
      <button type="submit" className='   rounded-[10px]'>Sign In </button>
        <IoIosArrowRoundForward />
      
    </div>

    </form>
    
    
    </>
  
  )
}

export default LoginForm




