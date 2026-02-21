import React from 'react'
import Nav from '../bahagian/Nav'
import { dataProducts } from '../../data/dataProducts'
import { useState,useEffect } from 'react'

import CardProduct from '../bahagian/CardProduct'


const MainPage = () => {

  const [dataProduct,setDataProduct] = useState([]);
    const [cart,setCart] = useState([]);

  const handledata = async ()=>{
    const data = await dataProducts();
  
      setDataProduct(data);
    
      
  }




  useEffect(()=>{

    if (dataProduct.length === 0){
              handledata()
              
    }
      
      

  },[]) 



useEffect(()=>{
        const saveCart = JSON.parse(localStorage.getItem('dataBarang'));

        if (saveCart){
          setCart(saveCart)
        }
},[cart])





  //add to cart///


  const handleAdd =  (id) =>{
    const dataSama = dataProduct.find((para)=>{
    return  para.id === id 
      
    })


    const updatedCart = [...cart,dataSama];
    setCart(updatedCart);

    //save local //

    localStorage.setItem('dataBarang',JSON.stringify(updatedCart))





    
    
  }


  return (

    <>
    <Nav/>


    {/* bahagian products */}

      
   
            {/* <button onClick={()=> handledata()} className='p-2 bg-green-400'>data</button> */}
<div className='  flex grid  grid-cols-7 '>


     {dataProduct && (
             

              dataProduct.map((para)=>(
                
                <CardProduct key={para.id} picProducts={para.image} title={para.name} price={para.priceCents} onClick={()=>handleAdd(para.id)}/>
              ))



          )}




</div>

   
  
           





    
    </>
   
  )
}

export default MainPage
