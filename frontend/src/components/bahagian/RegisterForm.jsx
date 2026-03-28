import React, { useState } from 'react'
import { Form } from 'react-router-dom'

const RegisterForm = () => {

const [inputValue,setInputValue] = useState({
  fullName : '',
  phoneNumber : '',
  email : '',
  password : ''
})


//login

const handleSubmit = (e)=>{
  
  e.preventDefault();

  fetch('http://localhost:4000/register',{
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify({
      fullName : inputValue.fullName,
      phoneNumber : inputValue.phoneNumber,
      email : inputValue.email,
      password : inputValue.password,

    })
  }).then(res => res.json).then(data => alert(data.message))
  

  
}



  return (

    <>

    <form action="" onSubmit={handleSubmit}>

  <div>


  <div className='flex flex-col'>
             <label htmlFor="" className='font-bold'>Full Name</label>
            <input type="text" className='border w-[300px] p-2 rounded-2xl' required   onChange={(e)=>setInputValue({...inputValue,fullName : e.target.value})} value={inputValue.fullName}/>
      </div>





  <div className='flex flex-col'>
             <label htmlFor="" className='font-bold'>Phone Number</label>
            <input type="text" className='border w-[300px] p-2 rounded-2xl' required   onChange={(e)=>setInputValue({...inputValue,phoneNumber : e.target.value})} value={inputValue.phoneNumber}/>
      </div>


      <div className='flex flex-col'>
             <label htmlFor="" className='font-bold'>Email</label>
            <input type="email" className='border w-[300px] p-2 rounded-2xl' required   onChange={(e)=>setInputValue({...inputValue,email : e.target.value})} value={inputValue.email}/>
      </div>


        <div className='flex flex-col'>
             <label htmlFor="" className='font-bold'>Password</label>
            <input type="password" className='border w-[300px] p-2 rounded-2xl '  required onChange={(e)=>setInputValue({...inputValue,password : e.target.value})} value={inputValue.password}/>
      </div>
           
    </div>

    <div>
      <button className='bg-amber-200'>Register </button>
    </div>

    </form>
    
    
    </>
  
  )
}

export default RegisterForm
