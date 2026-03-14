import React from 'react'
import { useState } from 'react'



const KotakCart = ({pic,title,price,kuantiti,handleDelete,handleUpdate,id}) => {

const [isShowUpdate,setIsShowUpdate] = useState(false);
const [tempatKuantiti,setTempatKuantiti] = useState(kuantiti)

  return (
    <div className='border m-4 mx-[5%] border-gray-300 flex justify-between w-[800px] h-[235px] px-4  '>

        <div className='text-[16px] flex flex-col gap-6'>
          <h1 className='text-[#007600] text-[19px] font-bold'>Delivery data :</h1>
            <div className='flex gap-3'>

 <img className='h-[99px] w-[99px]' src={pic}  />
            <div>
              <h1 className='font-bold'>{title}</h1>
              <p className='text-red-700 font-bold'>RM {price}</p>

         

              <div className='flex gap-2'>
              <p>Quantity: {kuantiti}</p>


              {isShowUpdate ? (

                <>
                
                   <select value={tempatKuantiti} onChange={(e)=> setTempatKuantiti(e.target.value)}>

                  {/* generate options */}

                    {[1,2,3,4,5,6,7,8,9,10].map((para)=>(
                        <option key={para} value={para}>{para}</option>
                    ))}



                  </select>

                <button onClick={()=> {
handleUpdate(id,tempatKuantiti);
setIsShowUpdate(false)

                } } className='text-[#017CB6] hover:text-orange-300 cursor-pointer'>Save</button>

                
                
                </>

               

              ) : (

 <button className='text-[#017CB6] hover:text-orange-300 cursor-pointer' onClick={()=>setIsShowUpdate(true)
  
 }>Update</button>

              )}

             
              <button className='text-[#017CB6] hover:text-orange-300 cursor-pointer' onClick={()=>handleDelete(id)}>Delete</button>
              </div>






             
            </div>

            </div>
           
          </div>

{/* kanan */}


        <div className='flex flex-col justify-center p-2'>
          <h1 className='font-bold'>Choose a delivery option :</h1>


          {/* option delivery */}
          <div>


         {/* options 1 */}
            <div className=' flex gap-2'>
              
              <input type="radio" className='border'/>
              <div>
                  <h1 className='text-[#007600] font-bold'>Tuesday,June 21</h1>
                  <p className='text-[#787878]'>FREE Shipping</p>
              </div>
          </div>



            {/* options 2 */}
            <div  className='flex gap-2'>
              
              <input type="radio" className='border '/>
              <div>
                  <h1 className='text-[#007600] font-bold'>Wednesday, June 15</h1>
                  <p className='text-[#787878]'>$4.99 - Shipping</p>
              </div>
          </div>




            {/* options 3 */}
            <div className='flex gap-2'>
              
              <input type="radio" className='border '/>
              <div>
                  <h1 className='text-[#007600] font-bold'>monday, June 13</h1>
                  <p className='text-[#787878]'>$9.99 - Shipping</p>
              </div>
          </div>
          
            </div>
         
        </div>


    </div>
  )
}

export default KotakCart
