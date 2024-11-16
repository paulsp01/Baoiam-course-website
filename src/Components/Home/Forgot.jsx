import React, { useState } from 'react'
import img1 from '../../assets/vector_image.png'


const Forgot = () => {
  const [email,setEmail] = useState("");
  const [errors,setErrors] = useState([]);
  const handleSubmit = (e)=>{
    e.preventDefault();
    const errors = validate();
    setErrors(errors);
  }

 const validate = ()=>{
  const error = {};
  if(!email){
    error.email = "Email is required";
  } else if(!/\S+@\S+\.\S+/.test(email)){
    error.email = "Enter valid email";
  }else{
    error.email = "";
  }
  return error;
 }

  return (
    <div className='w-[80%] mx-[10%] md:flex md:flex-row flex-col mt-10'>
      
     <div className='w-[100%] md:w-[50%]'>
        <img src={img1}/>
     </div>


     <div className='w-[100%] md:w-[50%] pt-[2rem] xl:mt-[3.5rem] lg:mt-[2rem] md:pl-[2rem] justify-center'>
     
     <div className='font-bold text-[2rem] xl:text-[2.9rem] lg:text-[2.4rem] md:text-[2rem] sm:text-[2.3rem]'><h1>Forgot</h1>
     <h1>Your Password?</h1></div>

     <form onSubmit={handleSubmit}>
     <div className='py-[2rem] md:py-[1.5rem]'><input type="text" onChange={(e)=>setEmail(e.target.value)} className='text-[1rem] xl:text-[1.5rem] sm:text-[1.4rem] lg:text-[1.4rem] md:text-[1.2rem] border-2 border-gray-500 w-[100%] p-2' placeholder='Your Email Please'/>
     {errors.email && <div className='text-red-700 text-2xl mt-1'>{errors.email}</div>}
     </div>
     <div><button className='text-[1rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem] xl:mt-2 sm:text-[1.3rem] w-[100%] border-2 border-blue-700 text-white bg-blue-700 rounded-lg p-2'>RESET PASSWORD</button></div>
     </form>
     </div>

    </div>
  )
}

export default Forgot
