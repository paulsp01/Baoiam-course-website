import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";

const Account_activation = () => {
  return (
    <>
    
    <div className='w-[60%] border-2 mx-[20%] lg:mx-auto xl:w-[35rem] lg:w-[30rem] my-[10%] p-4 text-center border-black '>

   <div className='flex justify-center text-green-400 xl:text-[6rem] lg:text-[5rem] md:text-[5rem] text-[10vw]'><FaRegCheckCircle/></div>
   <div className='m-2 text-[5vw] lg:text-[2rem] xl:text-[2.5rem] md:text-[2rem]'>Congrats! Account Activated Successfully</div>

    </div>
    
    </>
  )
}

export default Account_activation
