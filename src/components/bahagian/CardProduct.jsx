import React from 'react'
import { useState } from 'react'



const CardProduct = ({picProducts,title,stars,price,kuantiti,id,handleAdd}) => {


  const [kuantitiCustom,setKuantitiCustom] = useState(kuantiti);
  const [isShowAdded,setIsShowAdded] = useState(false)


  return (
    <div className=' h-[493px] p-3 border-b-1 border-l-1 border-gray-300 flex flex-col  gap-5'>
              <img src={picProducts} className='h-[180px] w-[192px]' />

             

                <div className=' mt-5 h-[130px]'>

      <div className=' h-[100px] mb-2 flex flex-col justify-between'>
               <h1 className='max-w-[300px]  '>{title}</h1>
            
                <h1 className='font-bold'>RM {price}</h1>
      </div>


                <select value={kuantitiCustom} onChange={(e)=>setKuantitiCustom(e.target.value)} className='shadow-2xl  py-1 px-2 bg-[#F0F0F0] rounded-[7px] '>
                      {[1,2,3,4,5,6,7,8,9,10].map((para)=>(
                        <option key={para} value={para}>{para}</option>
                      ))}
                </select>

                </div>

<div className=  {`text-[#067D62] text-[16px] flex gap-2  pt-3 ${isShowAdded ? 'opacity-100':'opacity-0 ' }`}>
  <img className='h-[20px] w-[20px]' src="https://supersimple.dev/projects/amazon/images/icons/checkmark.png" alt="" />
 <span >  Added </span>
                    
</div>

              

              <div className='flex justify-center'>
  <button onClick={()=> {
handleAdd(id,kuantitiCustom);
setIsShowAdded(true)
setTimeout(()=>{
      setIsShowAdded(false)
},2000)

  } } className='bg-[#FFD814] transition hover:bg-yellow-500 hover:text-white p-2 w-[200px] rounded-2xl shadow-2xl  shadow-amber-100'>Add to Cart</button>
              </div>
              
                
             
    </div>
  )
}

export default CardProduct
