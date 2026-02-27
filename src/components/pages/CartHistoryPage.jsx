import React from 'react'
import CardOrder from '../bahagian/CardOrder'
import Nav from '../bahagian/Nav'
import { useState,useEffect } from 'react'


const CartHistoryPage = () => {


// const [data,setData] = useState([])
const [dataOrder,setDataOrder] = useState([])


//data Products//



// const dataProducts = ()=>{
//   const data = localStorage.getItem('dataBarang');
//   if (data){
//     const updatedData =  JSON.parse(data)
//     setData(updatedData)
//   }
// }


// useEffect(()=>{
//     dataProducts()
// },[])







//data ordered//


const dataOrdered = ()=>{
  const data =  localStorage.getItem('orders');
   
  if (data){
   const updatedData =  JSON.parse(data);
    setDataOrder(updatedData)
  console.log(updatedData);
  }



  

}


useEffect(()=>{
    dataOrdered()
    
},[])

  return (

    <>

        <Nav/>



     <div className='flex justify-center flex-col items-center '>

      <div className=''>


 <h1 className='text-[26px] font-bold'>Your Orders</h1>

       {dataOrder && (
        dataOrder.map((para)=>(
        
        

 <CardOrder orderDate={para.orderDate} orderId={para.orderId} totalPrice={para.totalCents} orderData={para.items} />

        
         
           
        ))
       )}

       


      </div>

     


    </div>
    
    </>
   
  )
}

export default CartHistoryPage
