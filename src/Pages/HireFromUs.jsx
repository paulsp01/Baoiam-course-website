import React, { useState } from 'react';
import hireImage from '../assets/hireFromUs.jpg';
import {
  FaUserGraduate, FaBriefcase, FaLevelUpAlt, FaUsers, FaCode, FaDesktop, FaServer,
  FaLaptopCode, FaDatabase, FaAndroid, FaRobot, FaPython, FaJava, FaCogs, FaChalkboardTeacher,
  FaDollarSign, FaRegHandshake, FaCheck,
  FaArrowRight,
  FaArrowLeft
} from 'react-icons/fa';
import { Link } from 'react-router-dom';



const HireFromUs = () => {
    document.title = "Baoiam Innovations | Hire from us";

    const [selectedCard, setSelectedCard] = useState(null);
  
    const cardData = [
      { 
        icon: <FaCode className="text-6xl text-indigo-800" />, 
        title: 'Full Stack Developers',
        content: ["Frontend skills", "Backend skills", "API development", "Database management"]
      },
      { 
        icon: <FaDesktop className="text-6xl text-indigo-700" />, 
        title: 'Frontend Developers',
        content: ["React, Angular, Vue", "Responsive Design", "JavaScript, HTML, CSS", "UI/UX Development"]
      },
      { 
        icon: <FaServer className="text-6xl text-indigo-600" />, 
        title: 'Backend Developers',
        content: ["Node.js, Python", "Database management", "API Integration", "Security and Auth"]
      },
      { 
        icon: <FaLaptopCode className="text-6xl text-indigo-500" />, 
        title: 'Software Engineers',
        content: ["Software architecture", "Data structures", "Algorithms", "Testing and QA"]
      }
    ];

    const rightHalfContent = [
        { icon: <FaDatabase className="text-4xl text-indigo-500" />, title: 'Data Scientists' },
        { icon: <FaAndroid className="text-4xl text-indigo-500" />, title: 'Android Developers' },
        { icon: <FaRobot className="text-4xl text-indigo-500" />, title: 'ML Engineers' },
        { icon: <FaPython className="text-4xl text-indigo-500" />, title: 'Python Developers' },
        { icon: <FaCogs className="text-4xl text-indigo-500" />, title: 'C++ Developers' },
        { icon: <FaJava className="text-4xl text-indigo-500" />, title: 'Java Developers' }
    ];


  return (
    <div className="space-y-16 max-w-11/12 mx-auto">

        <section className="relative min-h-[400px] xl:h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${hireImage})` }}>
            <div className="absolute inset-0 md:gap-4 gap-2 to-black bg-black/60 flex flex-col justify-center items-center">
            <h1 className="text-2xl md:text-4xl xl:text-5xl md:pt-8 pt-16 font-extrabold text-white text-center md:mb-2">
                Discover Top Talent with <span className="bg-gradient-to-r from-pink-500  to-indigo-600 bg-clip-text text-transparent">Baoiam</span>
            </h1>
            <p className="text-base w-10/12 mx-auto md:text-xl xl:text-2xl text-white text-center mb-3">
                Your trusted partner for finding the right candidates
            </p>
            

            <Link to={"#why-choose-us"} >
                {/* <button onClick={()=> navigate('/contact')} className='rounded-full mx-auto  gap-2 flex items-center px-6 py-2 justify-center font-medium text-white group bg-gradient-to-br from-purple-600 to-blue-500 hover:text-black dark:text-white transition-all ease-in-out hover:tracking-wider duration-75'>
                    <p className='relative transition-all ease-in duration-75 group-hover:bg-opacity-0'> 
                    Get Started
                </p>
                    <FaArrowRight />
                </button> */}

                <button
                onClick={() => navigate('/contact')}
                className="relative inline-flex items-center bg-gradient-to-r from-pink-600 to-indigo-500 px-10 py-3 overflow-hidden text-white font-semibold rounded-full hover:text-indigo-600 group"
            >
                <span className="absolute left-0 block w-full h-0 transition-all bg-white opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease-in-out"></span>
                <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                
                <FaArrowRight />
                </span>
                <span className="relative text-sm lg:text-base">Get Started</span>
               </button>
            </Link>

            </div>
        </section>


        <section id='why-choose-us' className="relative px-8 lg:px-20 py-16 bg-gradient-to-r from-white to-indigo-100 text-indigo-500 overflow-hidden">
        
            <h2 className="text-3xl sm:text-5xl font-extrabold text-center mb-8 sm:mb-16 relative z-10 text-gray-800">
                Why <span className='bg-gradient-to-r from-pink-500  to-violet-600 bg-clip-text text-transparent'>Choose Us</span>?
            </h2>

            {/* <div className="absolute inset-0 overflow-hidden">
                <svg className="absolute top-0 left-0 w-full h-full text-gray-100 opacity-40" fill="currentColor" viewBox="0 0 500 500" preserveAspectRatio="none">
                <circle cx="150" cy="150" r="100" />
                <circle cx="350" cy="350" r="150" />
                <circle cx="250" cy="50" r="75" />
                </svg>
            </div> */}

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
                {[
                { icon: <FaUserGraduate className="text-5xl sm:text-6xl text-amber-500" />, title: 'Pre-Trained', description: 'High-quality training with advanced modules.' },
                { icon: <FaBriefcase className="text-5xl sm:text-6xl text-amber-500" />, title: 'Job-Ready', description: 'Prepare for real-world challenges with practical knowledge.' },
                { icon: <FaLevelUpAlt className="text-5xl sm:text-6xl text-amber-500" />, title: 'Entry-Level', description: 'Ideal for those starting their professional journey.' },
                { icon: <FaUsers className="text-5xl sm:text-6xl text-amber-500" />, title: 'Talent-Pool', description: 'Access a diverse pool of skilled professionals.' }
                ].map((feature, index) => (
                <div key={index} className={`relative h-full md:h-auto justify-start bg-white p-6 sm:p-6 rounded-xl shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 ${index % 2 === 0 ? 'md:mt-12' : 'md:mb-12'}`}>
                    <div className="mb-4 sm:mb-6 text-amber-500">
                    {feature.icon}
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold mb-2 text-nowrap text-indigo-700">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-800 text-center">{feature.description}</p>
                    <div className="absolute inset-0 border-2 border-indigo-500 rounded-xl opacity-10 -z-10"></div>
                </div>
                ))}
            </div>
        </section>

        <section className="relative bg-white py-16 px-8 lg:px-20">

            <div className="absolute inset-0 overflow-hidden">
                <svg className="absolute top-0 left-0 w-full h-full text-gray-100 opacity-40" fill="currentColor" viewBox="0 0 500 500" preserveAspectRatio="none">
                <circle cx="200" cy="200" r="150" />
                <circle cx="400" cy="400" r="200" />
                <circle cx="300" cy="100" r="100" />
                </svg>
            </div>


            <div className="text-center mb-12 relative z-10">
                <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4">
                Discover Our <span className="bg-gradient-to-r from-pink-500 to-violet-600 bg-clip-text text-transparent">Profiles</span>
                </h2>
                <p className="text-md md:text-lg max-w-6xl mx-auto text-gray-600">
                Tap into a vast pool of talent from India's largest online tech education platform. Our profiles are curated by experts from IITs, IIITs, and leading tech companies.
                </p>
            </div>

            <div className="text-center mb-12 relative z-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Expertise</h2>
            </div>

            <div className="flex flex-col xl:flex-row w-full gap-10 justify-center relative z-10">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {cardData.map((profile, index) => (
                    <div 
                    key={index}
                    className={`bg-white min-w-fit p-8 rounded-2xl shadow-lg transition-transform duration-300 flex items-center space-x-6 cursor-pointer 
                        ${selectedCard === index ? "bg-indigo-50 border-2 border-indigo-600" : "hover:bg-indigo-50 hover:shadow-xl"}`}
                    onClick={() => setSelectedCard(index)}
                    >
                    <div className="bg-indigo-100 p-4 rounded-full">
                        {profile.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{profile.title}</h3>
                    </div>
                ))}
                </div>


                <div className="w-full">
                    {selectedCard === null ? (
                        <div>
                        <h3 className="text-2xl font-bold xl:hidden text-gray-800 mb-6">Other Profiles</h3>
                        <ul className="space-y-4">
                            {rightHalfContent.map((otherProfile, index) => (
                            <li key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-white shadow-md hover:bg-indigo-50 hover:shadow-lg hover:scale-105 transition-all duration-300">
                                {otherProfile.icon}
                                <span className="text-lg font-medium text-gray-700">{otherProfile.title}</span>
                            </li>
                            ))}
                        </ul>
                        </div>
                    ) : (

                        <div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">{cardData[selectedCard].title} - Skills</h3>
                                <ul className="list-disc list-inside text-left text-gray-700 space-y-3">
                                    {cardData[selectedCard].content.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='mt-5 ml-2'>
                                <button
                                        className="mb-4 text-md text-indigo-600 border border-indigo-600 rounded-full p-2"
                                        onClick={() => setSelectedCard(null)}
                                    >
                                        <div className='flex flex-row justify-center items-center gap-2'>
                                            <FaArrowLeft />
                                            <span>Back to Other Profiles</span>
                                        </div>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>


        <section className="relative bg-gradient-to-r from-indigo-50 via-slate-50 to-indigo-100 py-16 px-8 lg:px-20 overflow-hidden">
            <h2 className="md:text-5xl text-3xl font-extrabold text-center text-gray-800 mb-12 relative z-10">Why <span className='bg-gradient-to-r from-pink-500  to-violet-600 bg-clip-text text-transparent'>Baoiam?</span></h2>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
                {[
                { icon: <FaChalkboardTeacher className="text-6xl text-blue-500" />, title: 'Pre-Trained Developers', details: ['6 months immersive training', 'Project-based learning', '800 hrs of learning'] },
                { icon: <FaUsers className="text-6xl text-green-500" />, title: 'Diverse Talent Pool', details: ['Pan-India candidates', '100+ colleges', '15k+ trained annually'] },
                { icon: <FaDollarSign className="text-6xl text-red-500" />, title: 'Zero Hiring Fees', details: ['No charges for our service', 'Hassle-free hiring', 'Full recruitment support'] },
                { icon: <FaRegHandshake className="text-6xl text-yellow-500" />, title: 'Bulk Hiring', details: ['Entry-level tech talent', 'Replace campus recruitment visits', 'Tailored hiring solutions'] }
                ].map((why, index) => (
                <div key={index} className="relative bg-white p-4 rounded-3xl shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl opacity-30 -z-10"></div>
                    <div className="flex justify-center mb-6">
                    {why.icon}
                    </div>
                    <h3 className="sm:text-xl text-xl font-semibold text-center mb-4 text-gray-800">{why.title}</h3>
                    <ul className="list-disc pl-4 text-gray-600">
                    {why.details.map((detail, i) => <li key={i} className="mb-2 text-md">{detail}</li>)}
                    </ul>
                </div>
                ))}
            </div>
        </section>


        <section className="bg-white py-16 px-4 md:px-8 xl:px-32">
            <div className="lg:flex lg:justify-between lg:items-center">
                <div className='flex flex-col w-2/3 m-5'>
                <h2 className="text-3xl md:text-5xl font-bold text-amber-600 md:mb-8 mb-4 lg:mb-0">Ready to access top talent?</h2>
                <p className='text-md md:text-lg md:mt-5 mt-2 font-semibold'>Partner with you to create a long-term talent-pool, to source candidates that are aligned to your skill requirements, available all year round! We work closely with you to solve your Entry-Level tech hiring needs.</p>
                </div>
                <Link to={"#contact-form"}>
                    <button className="px-8 ml-5 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:scale-105 font-semibold text-white text-lg rounded-lg transition-all duration-300">
                        Contact Us Today
                    </button>
                </Link>
            </div>
        </section>
      

        <section id="contact-form" className="relative py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-indigo-50 via-white to-indigo-100">

            <div className="relative flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-12 lg:space-y-0 lg:space-x-12">
                <div className="lg:w-1/2 w-full bg-white p-8 shadow-lg rounded-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left bg-gradient-to-r from-pink-500  to-violet-600 bg-clip-text text-transparent">Access Our Pre-Trained Talent Today</h2>
                <ul className="space-y-6 text-md text-gray-700">
                    {[
                    'Hire from our Pan-India Talent pool, across 100+ colleges',
                    'Pre-Trained Developers available across 10 profiles',
                    'Experience ranging from 0 to 3 years',
                    'Available for Full-Time as well as Internships',
                    'Complete recruitment services at no additional cost',
                    'Solve your long-term Entry-Level Tech recruitment needs'
                    ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-4">
                        <div className="w-5 min-w-5 mt-0.5 h-5 flex justify-center items-center border-2 border-amber-600 text-amber-600 rounded-full">
                        <FaCheck className="text-sm" />
                        </div>
                        <span>{item}</span>
                    </li>
                    ))}
                </ul>
                </div>


                <div className="lg:w-1/2 w-full bg-white p-8 shadow-lg rounded-lg">
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-800">Get in Touch</h3>
                <form className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-lg" />
                    <input type="text" placeholder="Company Name" className="w-full p-3 border border-gray-300 rounded-lg" />
                    <input type="email" placeholder="Work Email Address" className="w-full p-3 border border-gray-300 rounded-lg" />
                    <input type="text" placeholder="Contact Number" className="w-full p-3 border border-gray-300 rounded-lg" />
                    <input type="text" placeholder="Designation" className="w-full p-3 border border-gray-300 rounded-lg" />
                    </div>
                    <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option value="">Hiring Profile</option>
                    <option value="SDE">SDE</option>
                    <option value="Full Stack">Full Stack Developer</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Data Scientist">Data Scientist</option>
                    </select>
                    <select className="w-full p-3 border border-gray-300 rounded-lg">
                    <option value="">How did you hear about us?</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Employee Recommendation">Employee Recommendation</option>
                    <option value="LinkedIn Ads">LinkedIn Ads</option>
                    <option value="Other">Other</option>
                    </select>
                    <button type="submit" className="w-full text-white p-3 rounded-lg font-semibold hover:bg-indigo-600 transition bg-gradient-to-r from-pink-500  to-violet-600">
                    Get in Touch
                    </button>
                </form>
                </div>
            </div>
        </section>


    </div>
  );
};

export default HireFromUs;


