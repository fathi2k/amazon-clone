import React from 'react'

const CardProduct = ({picProducts,title,stars,price}) => {
  return (
    <div className=' h-[493px] p-3 border-b-1 border-l-1 border-gray-300 flex flex-col  justify-between'>
              <img src={picProducts} className='h-[250px]  w-full' />

             

                <div className=' mt-5'>

 <h1>{title}</h1>
                <div>
              <img src={stars} className='' />
                </div>

                <h1>RM {price}</h1>

                <select className='border px-2 bg-[#F0F0F0] rounded-[7px]'>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">4</option>
                  <option value="">5</option>
                  <option value="">6</option>
                  <option value="">7</option>
                  <option value="">8</option>
                  <option value="">9</option>
                  <option value="">10</option>
                </select>

                </div>
               

              <div className='flex justify-center'>
  <button className='bg-[#FFD814] p-2 w-[200px] rounded-2xl'>Add to Cart</button>
              </div>
              
                
             
    </div>
  )
}

export default CardProduct
