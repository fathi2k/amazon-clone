import React from 'react'
import { useState,useEffect } from 'react'
import KotakCart from '../bahagian/kotakCart';

const CartPage = () => {

  const [cart,setCart] = useState([]);










//cart asyn so tak update on the spot // 

  useEffect(()=>{

    const data = localStorage.getItem('dataBarang');
    const updateCart = JSON.parse(data)



  if (updateCart.length === 0){

        console.log('kosong')
    }else{

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


const handleUpdate = ()=>{
  console.log('update uii')
}


//delete///

const handleDelete = ()=> {
  console.log('Padammmm');
  
}


  return (
<>

{/* nav */}

 <div className='flex justify-around py-5'>
      <img className='h-[30px] w-[100px]' src="../../public/images/amazon-logo.png" alt="" />


      <div>
        <h1 className='text-[25px]'>Checkout( 5 items)</h1>
      </div>


      <img className='h-[21px] w-[16px]' src="../../public/images/icons/checkout-lock-icon.png" alt="" />
    </div>


{/* body */}






    <div>

      <h1 className='mx-[5%] text-[22px] font-bold'>Review your order</h1>

      <div className=' py-[5%]'>
            {cart.length > 0 ? (
              cart.map((para)=>(
                <KotakCart key={para.id} title={para.name} pic={para.image} price={para.priceCents} date={para.date} id={para.id} handleDelete={handleDelete} handleUpdate={handleUpdate} />
              ))
            ) : (
              <h1>kad kosong</h1>
            )}
      </div>
      
    </div>


</>
   
  )
}

export default CartPage
