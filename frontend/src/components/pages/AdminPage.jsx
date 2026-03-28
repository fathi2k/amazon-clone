import React from 'react'
import SideBar from '../bahagian/sidebar'
import { useState } from 'react'

const AdminPage = () => {

  const [inputForm,setInputForm] = useState({
    nama : '',
    umur  : ''
  })


  //send data kepada backend///

const handleSubmit = ()=>{



 fetch('http://localhost:4000/adminProducts',{
  method : 'POST',
  headers : {
    'Content-Type' : 'application/json'
  },
  body : JSON.stringify({
    nama : inputForm.nama,
    umur : inputForm.umur
  })
})
      
}








  return (

    <>
  
      <div className='flex'>
              <SideBar/>

              
              <div className='flex justify-center bg-gray-400 w-screen'>

            

                      <div className='flex items-center flex-col justify-center '>
                                <h1 className='text-[60px] font-bold'>Add Data</h1>
                           <form className='flex flex-col gap-2' action="" onSubmit={handleSubmit}>
                            <input type="text" className='border w-[400px] p-2' placeholder='enter your name' value={inputForm.nama} onChange={(e)=>setInputForm({...inputForm,nama:e.target.value})}  required/>
                            <input type="text" className='border w-[400px] p-2' placeholder='enter you age' value={inputForm.umur} onChange={(e)=>setInputForm({...inputForm,umur:e.target.value})} required />
                            
                            <button className='bg-green-300 p-2'>Add Data</button>
                           </form>
                      </div>
              </div>
      </div>
    </>
  
  )
}

export default AdminPage
