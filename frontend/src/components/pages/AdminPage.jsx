import React from 'react'
import SideBar from '../bahagian/sidebar'
import { useState } from 'react'

const AdminPage = () => {

  const [inputForm,setInputForm] = useState({
    name : '',
    price  : '',
    image : null
  })


  //send data kepada backend///

const handleSubmit = (e)=>{

e.preventDefault()

//bungkus dulu data dalam bekas
  const formData = new FormData();
  formData.append('name',inputForm.name)
  formData.append('price',inputForm.price * 100 )
  formData.append('image',inputForm.image)



    console.log('name:', inputForm.name)    // ← check
  console.log('price:', inputForm.price)  // ← check
  console.log('image:', inputForm.image) 




 const data = fetch('http://localhost:4000/products',{
  method : 'POST',
  body : formData //transfer data melalui bungkusan tadi and not JSON
})


alert(data.message)
      
}








  return (

    <>
  
      <div className='flex '>
              <SideBar/>

              
              <div className='flex justify-center bg-[#0F0F13] w-screen'>

            

                      <div className='flex items-center flex-col justify-center '>

                        <div className='bg-[#1E1E27] p-5 rounded-2xl'>


                               
                           <form className='flex flex-col gap-2 text-[11px]' action="" onSubmit={handleSubmit}>

                      <div className='h-[220px] text-white  text-[20px] flex justify-center items-center'>

                         <div className=''>
                                      <input className=' p-2 w-[300px] rounded-2xl' type="file" onChange={(e)=>{setInputForm({...inputForm,image:e.target.files[0]}) ; console.log(e.target.files[0])}} required/>
                         </div>
                          
                        
                      </div>
                         
                              <label className='text-[#6B6B80]' htmlFor="">Product Name</label>
                            <input type="text" className='border w-[400px] p-2 text-[#F0F0F5] text-[15px] rounded-[10px]' placeholder='e.g. Wireless Headphones' value={inputForm.name} onChange={(e)=>setInputForm({...inputForm,name:e.target.value})}  required/>

                             <label  className='text-[#6B6B80]'htmlFor="">Products Price</label>
                            <input type="text" className='border  w-[400px] p-2 text-[#F0F0F5] text-[15px] rounded-[10px]' placeholder='$ 0.00' value={inputForm.price} onChange={(e)=>setInputForm({...inputForm,price:e.target.value})} required />
                            
                            <button className='bg-[#63B3ED] p-2 rounded-[7px]'>Add Data</button>
                           </form>


                        </div>
                         
                      </div>
              </div>
      </div>
    </>
  
  )
}

export default AdminPage
