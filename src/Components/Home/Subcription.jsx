import gsap from "gsap";
import React, { useEffect } from "react";
import { FaArrowRight } from 'react-icons/fa6';
import { useNavigate } from "react-router-dom";

const NewsletterBanner = () => {
  const navigate = useNavigate();

useEffect(() => {


  gsap.fromTo('.pap10',{opacity:0,y:30},{
    opacity:1,
    y:0,
    duration:1,
    ease:'back.inOut',
    stagger:0.2,
    scrollTrigger:{
      trigger:'.papdiv6',
      start:'top 90%',
      end:'bottom 80%',
    }
  })


},[])


  return (
    <div className="papdiv6 relative font-[sans-serif]  dark:before:bg-black dark:before:opacity-80 from-amber-600  to-teal-800  before:absolute before:w-full before:h-full before:inset-0 before:opacity-50 before:z-10">
      <img
        src="https://readymadeui.com/photo.webp"
        alt="Banner Image"
        className="absolute inset-0 w-full h-full object-cover object-bottom "
      />
      <div className=" relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center px-6 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="pap10 text-white md:text-5xl text-4xl font-bold">
          Unite with our team
          </h3>
          <p className="pap10 text-gray-300 italic text-lg     mt-4">
          We are searching for passionate people who ensure excellence.
          </p>
          <button onClick={()=> navigate('/contact')} className='pap10 rounded-full mx-auto mt-5 gap-2 flex items-center px-6 py-2 justify-center font-medium text-white group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                    <p className='relative transition-all ease-in duration-75 group-hover:bg-opacity-0'> 
                    Join us
                </p>
                    <FaArrowRight />
                    </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterBanner;
