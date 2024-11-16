import gsap from 'gsap';
import { document } from 'postcss';
import React, { useEffect, useRef } from 'react'
import { FaFacebook, FaFacebookF, FaGoogle, FaLinkedin, FaRegEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function AnimatedLogin() {
    const cursorRef = useRef(null);
    const containerRef = useRef(null);
    const rightDivRef = useRef(null);

    useEffect(() => {
        // Mouse move animation logic
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;


            // gsap.to(cursorRef.current, { x: clientX, y: clientY, duration: 0.1 })
            const scrollX = window.innerWidth/2;
            const scrollY = window.innerHeight/2;

            gsap.to(cursorRef.current, {
                x: clientX - scrollX +8 ,
                y: clientY - scrollY - 50,
                duration: 0.6, // Make the duration short for smooth following
            });


            // gsap.to(cursorRef.current, {
            //     x: moveX + 20,
            //     y: moveY - 20,
            //     duration: 0.5,
            // });
        };

        rightDivRef.current.addEventListener('mouseenter', () => {
            console.log("mouseEnter to right Div")
            gsap.to(cursorRef.current, {
                backgroundColor: '#fff',
                duration: 0.2,
                ease:'power2.out',
            });

        })
        rightDivRef.current.addEventListener('mouseleave', () => {
            gsap.to(cursorRef.current, {
                backgroundColor: 'rgb(245,158,11)',
                duration: 0.5,
            });
        })
        containerRef.current.addEventListener('mousemove', handleMouseMove);
        // Cleanup event listener on component unmount
        return () => {
            // containerRef.current.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);


    return (
        <div ref={containerRef} className="flex relative flex-col items-center justify-center w-full flex-1 md:px-20 text-center cursor-none
        ">
            
            <div className="cursor  absolute z-50 bg-amber-500 w-4 aspect-square rounded-full shadow-3xl" ref={cursorRef}></div>
            <div className='shadow-2xl flex  mx-auto max-w-4xl my-10 bg-white rounded-2xl ' >
                <div className='md:w-3/5 w-full p-5'>
                    <div className="text-left font-bold ">
                        <span className="text-amber-500">Company</span> Name
                    </div>
                    <div className="py-10">
                        <h2 className='text-3xl font-bold text-amber-500 mb-2'>
                            Sign Up Section
                        </h2>
                        <div className="border-2 w-10 border-amber-500 inline-block mb-2"></div>
                        <div className="flex justify-center my-2 ">
                            <Link to="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                                <FaFacebookF className='text-sm' />
                            </Link>
                            <Link to="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                                <FaGoogle className='text-sm' />
                            </Link>
                            <Link to="#" className='border-2 border-gray-200 rounded-full p-3 mx-1'>
                                <FaLinkedin className='text-sm' />
                            </Link>
                        </div>
                        <p className="text-gray-400 my-3">OR</p>
                        <div className="flex flex-col items-center">
                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                <FaRegEnvelope className='text-gray-400 m-2' />
                                <input type="text" name="name" id="name" placeholder='Full Name' className='bg-gray-100 outline-none text-sm flex-1' />
                            </div>
                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                <FaRegEnvelope className='text-gray-400 m-2' />
                                <input type="email" name="email" id="email" placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1' />
                            </div>
                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                <FaRegEnvelope className='text-gray-400 m-2' />
                                <input type="password" name="password" id="password" placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1' />
                            </div>
                            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                                <FaRegEnvelope className='text-gray-400 m-2' />
                                <input type="password" name="confirmPassword" placeholder='Confirm Password' className='bg-gray-100 outline-none text-sm flex-1' />
                            </div>
                            <Link to="#" className="border-2 border-amber-500 text-amber-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-amber-500 text-nowrap hover:text-white">Sign Up</Link>

                            <Link to="/login" className='text-gray-400 my-3 text-sm hover:text-gray-800 md:hidden'>Already a User?</Link>
                        </div>
                    </div>
                </div>
                {/* Sign in Section */}

                <div className="w-2/5 md:block hidden bg-amber-500 text-white rounded-r-2xl py-36 px-12 " ref={rightDivRef}>
                    <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
                    <div className="border-2 w-10 border-white inline-block mb-2"></div>
                    {/* <p className="mb-10">Fill up personal info...</p> */}
                    <Link to="/login" className="border-2 mt-4 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white text-nowrap hover:text-amber-500">Sign In</Link>


                </div>
            </div>
        </div>
    )
}

export default AnimatedLogin