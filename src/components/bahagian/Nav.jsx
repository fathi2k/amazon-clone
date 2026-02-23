import React from 'react'
import { useNavigate } from 'react-router-dom'




const Nav = ({amountItems}) => {



  const navigate = useNavigate();


  return (
    <div className='bg-[#131921] flex justify-between px-8 py-3 items-center'>
          <img onClick={()=>navigate('/')} className='h-[30px] w-[100px]' src="../../public/images/amazon-logo-white.png" alt="" />

          <div className='flex'>
              <input  type="text" className='w-[805px] border bg-white py-1 px-3 text-[16px]' placeholder='Search'  />
             <button className='bg-[#FEBD69] p-2 rounded-tr-[5px] rounded-br-[5px]'>  <img  className='text-white h-[22px] w-[22px] ' src="../../public/images/icons/search-icon.png" alt="" /></button>
           
          </div>

          <div className='flex p-2 items-center text-white'>

           <div>
 <h1 className='max-w-[70px] leading-none'>Returns <span className='font-bold'>& Order</span>  </h1> 
           </div>
            
            
              
           
             
             <div onClick={()=> navigate('/cart')} className=' flex items-center '>
              <div className=' relative   p-1 '>
 <img className='h-[34px] w-[50px]' src="../../public/images/icons/cart-icon.png" alt="" />
 <p className='absolute right-0 top-0 bottom-4 left-[8.7px] text-[#F08804] font-bold items-center justify-center flex'>{amountItems}</p>
              </div>
             
              <h1>cart</h1>
             </div>
          </div>
         
    </div>
  )
}

export default Nav
