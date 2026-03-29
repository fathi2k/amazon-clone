import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'




const LoginForm = () => {

const [inputValue,setInputValue] = useState({
  email : '',
  password : ''
})

const navigate = useNavigate()


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

    <form action="" onSubmit={handleSubmit}>

  <div>

      <div className='flex flex-col'>
             <label htmlFor="" className='font-bold'>Email or mobile phone number</label>
            <input type="email" className='border w-[300px] p-2 rounded-2xl' required   onChange={(e)=>setInputValue({...inputValue,email : e.target.value})} value={inputValue.email}/>
      </div>


        <div className='flex flex-col'>
             <label htmlFor="" className='font-bold'>Password</label>
            <input type="password" className='border w-[300px] p-2 rounded-2xl '  required onChange={(e)=>setInputValue({...inputValue,password : e.target.value})} value={inputValue.password}/>
      </div>
           
    </div>

    <div className='flex gap-2 mt-2'>
      <button className='bg-amber-200 p-2'>Sign In</button>
      <button onClick={()=>navigate('/register')} className='bg-amber-200 p-2'>Register Now</button>
    </div>

    </form>
    
    
    </>
  
  )
}

export default LoginForm




