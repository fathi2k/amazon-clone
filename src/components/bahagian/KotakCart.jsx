import React from 'react'

const KotakCart = ({pic,title,price,kuantiti,handleDelete,handleUpdate,id}) => {
  return (
    <div className='border m-4 mx-[5%] border-gray-300 flex justify-between  max-w-[700px] h-[235px] px-4  '>

        <div className='text-[16px] flex flex-col gap-6'>
          <h1 className='text-[#007600] text-[19px] font-bold'>Delivery data :</h1>
            <div className='flex gap-3'>

 <img className='h-[140px] w-[140px]' src={pic}  />
            <div>
              <h1>{title}</h1>
              <p>{price}</p>
              <div>
              <p>Quantity:{kuantiti}</p>
              <button onClick={()=>handleUpdate(id)}>Update</button>
              <button onClick={()=>handleDelete(id)}>Delete</button>
              </div>
             
            </div>

            </div>
           
          </div>

{/* kanan */}


        <div className='flex flex-col justify-center'>
          <h1 className='font-bold'>Choose a delivery option :</h1>


          {/* option delivery */}
          <div>


         {/* options 1 */}
            <div className='bg-red-300 flex'>
              
              <input type="radio" className='border'/>
              <div>
                  <h1 className='text-[#007600]'>Tuesday,June 21</h1>
                  <p>FREE Shipping</p>
              </div>
          </div>



            {/* options 2 */}
            <div  className='flex gap-2'>
              
              <input type="radio" className='border '/>
              <div>
                  <h1 className='text-[#007600]'>Wednesday, June 15</h1>
                  <p>$4.99 - Shipping</p>
              </div>
          </div>




            {/* options 3 */}
            <div className='flex gap-2'>
              
              <input type="radio" className='border '/>
              <div>
                  <h1 className='text-[#007600]'>monday, June 13</h1>
                  <p>$9.99 - Shipping</p>
              </div>
          </div>
          
            </div>
         
        </div>


    </div>
  )
}

export default KotakCart
