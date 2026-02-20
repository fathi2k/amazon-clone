import React from 'react'
import Nav from '../bahagian/Nav'
import { dataProducts } from '../../data/dataProducts'
import { useState,useEffect } from 'react'
import { data } from 'react-router-dom'
import CardProduct from '../bahagian/CardProduct'


const MainPage = () => {

  const [dataProduct,setDataProduct] = useState([]);


  const handledata = async ()=>{
    const data = await dataProducts();
  
      setDataProduct(data);
    
      
  }




  useEffect(()=>{

    if (dataProduct.length === 0){
              handledata()
              
    }
      
      

  },[dataProduct]) 


  return (

    <>
    <Nav/>


    {/* bahagian products */}

      
   
            {/* <button onClick={()=> handledata()} className='p-2 bg-green-400'>data</button> */}
<div className='  flex grid  grid-cols-7 '>


     {dataProduct && (
             

              dataProduct.map((para)=>(
                
                <CardProduct key={para.id} picProducts={para.image} title={para.name} price={para.priceCents} />
              ))



          )}




</div>

   
  
           





    
    </>
   
  )
}

export default MainPage
