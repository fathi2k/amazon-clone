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
},[])





  //add to cart///


  const handleAdd =  (id,kuantitiCustom) =>{
  
    //cari dalam cart id tu ada dak
    const adaItems = cart.find((para)=>(
      para.id === id 
    ))

    //kalau ada tambah kuantiti je//

    if (adaItems){
      const updateCard1 = cart.map((para)=>(
        para.id === id ? {...para,kuantiti : para.kuantiti + 1} : para
      ))

      setCart(updateCard1)
      localStorage.setItem('dataBarang',JSON.stringify(updateCard1))

    }else{
        //add baru dengan kuantiti 1 atau custom//


        const adaData = dataProduct.find((para)=>(
          para.id === id 
        ))

        const updateCard = [...cart,{...adaData,kuantiti : Number(kuantitiCustom) || 1 }]

        setCart(updateCard);


    //save local //

    localStorage.setItem('dataBarang',JSON.stringify(updateCard))





    }




    
    



    
    
  }


  return (

    <>
    <Nav amountItems={cart.kuantiti}/>


    {/* bahagian products */}

      
   
            {/* <button onClick={()=> handledata()} className='p-2 bg-green-400'>data</button> */}
<div className='  flex grid  grid-cols-7 '>


     {dataProduct && (
             

              dataProduct.map((para)=>(
                
                <CardProduct key={para.id} picProducts={para.image} title={para.name} price={(para.priceCents / 100)} handleAdd={handleAdd} kuantiti={para.kuantiti} id={para.id}/>
              ))



          )}




</div>

   
  
           





    
    </>
   
  )
}

export default MainPage
