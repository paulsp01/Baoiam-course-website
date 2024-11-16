import React from 'react'
import Change from '../../assets/change.png'

const Change_pass = () => {
  return (
    <>
    
    <div className='w-[80%] mx-[10%] md:flex md:flex-row flex-col mt-10'>
      
      <div className='w-[100%] md:w-[50%] md:mt-[2rem] lg:mt-[4rem] xl:mt-[5rem]'>
         <img src={Change}/>
      </div>
 
 
      <div className='w-[100%] md:w-[50%] pt-[2rem] xl:mt-[3.5rem] lg:mt-[2rem] md:pl-[2rem] justify-center'>
      
      <div className='font-bold text-[2rem]  xl:text-[2.5rem] lg:text-[2.3rem] md:text-[1.5rem] sm:text-[2.3rem]'><h1>Change Password</h1>
      </div>
 
      <form>
      <div className='py-[0.4rem] md:py-[0.1rem] xl:py-[0.5rem]'>
        <label className='font-semi-bold text-[1.5rem] xl:text-[2rem] lg:text-[2rem] md:text-[1.3rem] sm:text-[1.9rem]' for="current_pass">Current Password</label>
        <input type="password" id="current_pass" required className='text-[1rem] xl:text-[1.5rem] sm:text-[1.4rem] lg:text-[1.4rem] md:text-[1rem] border-2 border-gray-500 w-[100%] p-2' placeholder='Enter here'/></div>

        <div className='py-[0.4rem] md:py-[0.1rem] xl:py-[0.5rem]'>
        <label className='font-semi-bold text-[1.5rem] xl:text-[2rem] lg:text-[2rem] md:text-[1.3rem] sm:text-[1.9rem]' for="current_pass"> New Password</label>
        <input type="password" id="current_pass" required className='text-[1rem] xl:text-[1.5rem] sm:text-[1.4rem] lg:text-[1.4rem] md:text-[1rem] border-2 border-gray-500 w-[100%] p-2' placeholder='Enter here'/></div>

        <div className='py-[0.4rem] md:py-[0.1rem] xl:py-[0.5rem]'>
        <label className='font-semi-bold text-[1.5rem] xl:text-[2rem] lg:text-[2rem] md:text-[1.3rem] sm:text-[1.9rem]' for="current_pass">Confirm Password</label>
        <input type="password" id="current_pass" required className='text-[1rem] xl:text-[1.5rem] sm:text-[1.4rem] lg:text-[1.4rem] md:text-[1rem] border-2 border-gray-500 w-[100%] p-2' placeholder='Enter here'/></div>



      <div><button className='text-[1rem] mt-4 md:text-[1rem] lg:text-[1.5rem] xl:text-[1.4rem] xl:mt-4 sm:text-[1.6rem] w-[100%] border-2 border-blue-700 text-white bg-blue-700 rounded-lg p-2'>Update Password</button></div>
      </form>
      </div>
 
     </div>

    </>
  )
}

export default Change_pass
