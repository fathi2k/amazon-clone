import React from 'react'
import { useState,useEffect } from 'react'
import KotakCart from '../bahagian/kotakCart';
import { useNavigate } from 'react-router-dom';




const CartPage = () => {

  const [cart,setCart] = useState([]);




const navigate = useNavigate();





//cart asyn so tak update on the spot // 

  useEffect(()=>{

    const data = localStorage.getItem('dataBarang');
    const updateCart = JSON.parse(data)



  if (updateCart){

         setCart(updateCart)
  }

    console.log(updateCart);
    
   
  },[])





// useEffect(() => {
//   const data = localStorage.getItem('dataBarang');
//   const updateCart = JSON.parse(data);

//   if (updateCart.length === 0) {
//     console.log('kosong');
//   } else {
//     console.log('Cart ada isi:', updateCart);
//   }

//   setCart(updateCart);

// }, []); // ✅ kosong dependency


//update///


const handleUpdate = (id , kuantitiBaru)=>{
  const updatedCart = cart.map((item)=>(
      item.id === id ? {...item , kuantiti : Number(kuantitiBaru)} : item
  ))

  if (updatedCart){
    setCart(updatedCart);
    localStorage.setItem('dataBarang',JSON.stringify(updatedCart))
  }
}


//delete///

const handleDelete = (id)=> {
    const samaId = cart.filter((para)=>(
      para.id  !== id
    ))


    if (samaId){
      setCart(samaId)
      localStorage.setItem('dataBarang',JSON.stringify(samaId))
    }

    //tak patut guna removeItem melainkan mmg nak delete hole thing
    
  
}


//order summary//

//total price//


  const subTotalPrice = cart.reduce((total,item)=>(
    total + (item.priceCents * item.kuantiti)
  ),0)



  return (
<>

{/* nav */}

 <div className='flex justify-around py-5'>
      <img onClick={()=> navigate('/')} className='h-[30px] w-[100px] cursor-pointer' src="../../public/images/amazon-logo.png" alt="" />


      <div>
        <h1 className='text-[25px]'>Checkout( {cart.length} items)</h1>
      </div>


      <img className='h-[21px] w-[16px]' src="../../public/images/icons/checkout-lock-icon.png" alt="" />
    </div>


{/* body */}






    <div className='flex py-[5%] gap-[6.5%]  justify-center  '>

   


      {/* kiri */}

      <div className='   w-[738px] h-[273px]
      '>

           <h1 className='mx-[5%] text-[22px] font-bold'>Review your order</h1>
            {cart.length > 0 ? (
              cart.map((para)=>(
                <KotakCart key={para.id} title={para.name} pic={para.image} price={(para.priceCents / 100)} date={para.date} id={para.id} handleDelete={handleDelete} handleUpdate={handleUpdate} kuantiti={para.kuantiti} />
              ))
            ) : (
              <div className=' mx-[5%] mt-[1%]'>
                <h1 className='text-[16px]'>Your cart is empty.</h1>
                <button onClick={()=>navigate('/')} className='bg-amber-300 p-2 rounded-[10px] mt-1'>View products</button>
              </div>
              
            )}
      </div>


      {/* kanan */}

      <div className='border h-[350px] w-[308px] p-4 mt-[3%]  border border-gray-300  flex flex-col gap-2'>
           <h1 className='font-bold text-[18px]'>Order Summary</h1>
           <div className='flex justify-between'>
            <h1>Items ({cart.length}):</h1>
             <h1>RM{(subTotalPrice / 100)}</h1>
           </div>

           <div className='flex justify-between'>
            <h1>Shipping & handling:</h1>
            <h1 className='border-b-1 border-gray-200'>RM 0.00</h1>
           </div>


              <div className='flex justify-between mt-2 items-center'>
            <h1>Total before tax:</h1>
             <h1>RM {subTotalPrice / 100}</h1>
           </div>


              <div className='flex justify-between border-b-1 pb-4 border-gray-200'>
            <h1>Estimated tax (10%):</h1>
             <h1>RM {((subTotalPrice / 100) * 0.10).toFixed(2)}</h1>
           </div>


            <div className='flex justify-between mt-4 text-red-700 font-bold'>
              <h1>Order total:</h1>
              <h1>RM {((subTotalPrice / 100) * 1.10).toFixed(2)}</h1>
            </div>

        
              <button className='bg-amber-400 p-2 mt-7 rounded-[10px]'>Place your order</button>
            

      </div>
      
    </div>


</>
   
  )
}

export default CartPage
