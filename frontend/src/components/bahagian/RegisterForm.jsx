import React, { useState } from 'react'
import { Form } from 'react-router-dom'
import { IoIosArrowRoundForward } from "react-icons/io";


const RegisterForm = () => {

const [inputValue,setInputValue] = useState({
  fullName : '',
  phoneNumber : '',
  email : '',
  password : ''
})


//login

const handleSubmit = async (e)=>{
  
  e.preventDefault();



  try {


    const res = await fetch('http://localhost:4000/register',{
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


    

  });


  const data = await res.json();
  alert (data.message);

    
  } catch (err) {

    alert(err)
  }




  

  
}



  return (

    <>

    <form action="" onSubmit={handleSubmit}>

  <div className='flex flex-col gap-5'>


  <div className='flex flex-col gap-2'>
             <label htmlFor="" className='font-bold text-[12px]'>Full Name</label>
            <input type="text" className='border w-[300px] p-2 rounded-[10PX]' required   onChange={(e)=>setInputValue({...inputValue,fullName : e.target.value})} value={inputValue.fullName} placeholder='fathi' autoFocus/>
      </div>



         <div className='flex flex-col gap-2'>
             <label htmlFor="" className='font-bold text-[12px]'>Email</label>
            <input type="email" className='border w-[300px] p-2 rounded-[10PX]' required   onChange={(e)=>setInputValue({...inputValue,email : e.target.value})} value={inputValue.email} placeholder='you@gmail.com'/>
      </div>






  <div className='flex flex-col gap-2'>
             <label htmlFor="" className='font-bold text-[12px]'>Phone Number</label>
            <input type="text" className='border w-[300px] p-2 rounded-[10PX]' required   onChange={(e)=>setInputValue({...inputValue,phoneNumber : e.target.value})} value={inputValue.phoneNumber} placeholder=' 6012-434 5378'/>
      </div>


   

        <div className='flex flex-col gap-2'>
             <label htmlFor="" className='font-bold text-[12px]'>Password</label>
            <input type="password" className='border w-[300px] p-2 rounded-[10PX] '  required onChange={(e)=>setInputValue({...inputValue,password : e.target.value})} value={inputValue.password} placeholder='********'/>
      </div>
           
    </div>

    <div className='flex bg-[#FF9900] items-center justify-center mt-4 p-2 rounded-[10px] text-black'>
      <button type='submit' className=''>Register </button>
      <IoIosArrowRoundForward size={25} />
    </div>

    </form>
    
    
    </>
  
  )
}

export default RegisterForm
