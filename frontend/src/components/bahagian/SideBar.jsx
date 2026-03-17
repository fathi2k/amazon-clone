import React from 'react'

const SideBar = () => {
  return (
    <div className='bg-white text-black flex flex-col h-screen max-w-67  justify-between pl-2 pt-2'>
      

      <div className=' flex flex-col gap-4'>
<div className='text-[45px]'>
                 Dashboard Admin
              </div>


          <div className='flex flex-col gap-7'>
               <div className='border-t border-black p-2 cursor-pointer'>Dashboard</div>
               <div className='border-t border-black p-2 cursor-pointer'>Product</div>
               <div className='border-t border-black p-2 cursor-pointer'>Customers</div>
               <div className='border-t border-black p-2 cursor-pointer'>Income</div>
               <div className='border-t border-black p-2 cursor-pointer'>Promote</div>
          </div>
      </div>
              


{/* bahagian bawah */}

          <div className=' flex flex-col gap-2 pb-3'>
            <div>
             <h1>subcribtion</h1>
            <button>Get Pro Now !</button>
            </div>

            <div>
                <h1>bahagian biodata admin</h1>
            </div>
           
          </div>

    </div>
  )
}

export default SideBar
