import React from 'react'

const CardOrder = ({orderId,orderDate,totalPrice,orderData}) => {
  return (
    <div className='flex  flex-col  p-2 border rounded-2xl m-4 mb-[6%]'>
      {/* line atas */}
          <div className='bg-[#F0F2F2] flex gap-[200px] p-2'>
            <div>
              <h1>Order Placed:</h1>
              <p>{orderDate}</p>
            </div>

            <div>
              <h1>Total:</h1>
              <h1>{totalPrice}</h1>
            </div>

            <div>
              <h1>Order ID</h1>
              <h1>{orderId}</h1>
            </div>
            
          </div>

      {/* bahagian bawah product */}


   {orderData.map((para)=>(

  <div className='flex bg-white p-4'>


<div className=' flex flex-row w-full justify-between'>

   <div className='flex gap-5'>
 <div>
            <img className='h-[114px] w-[110px]' src={para.image} alt="" />
           </div>

           <div>
              <h1 className='font-bold'>{para.name}</h1>
              <h1>Arriving on: tarikh</h1>
              <h1>Quantity : {para.kuantiti}</h1>
              <button className='bg-yellow-300 p-2'>Buy it again</button>
           </div>

        </div>
          

          <div>
            <button className=' p-2 border rounded-2xl w-[220px]'>Track package</button>
          </div>

  
</div>
     

      </div>

   ))}

    

    </div>
  )
}

export default CardOrder
