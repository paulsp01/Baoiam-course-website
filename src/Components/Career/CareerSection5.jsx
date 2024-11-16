import icon6 from "../../assets/ITIE&Entre/machine-learning.png";
import image1 from "../../assets/ITIE&Entre/onlineLearning2.avif";

export const CareerSection5 = () => {
  return (
    <>
      <div className=' dark:bg-black flex flex-col md:flex-row items-center bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-4 mt-10 lg:mt-7 w-full'>
        {/* Image Section */}
        <div className='md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0'>
          <div className='relative w-full max-w-md md:max-w-full'>
            <img
              src={image1}
              alt='Why We Are Most Popular'
              className='rounded-lg w-[90%] h-[90%]'
            />
            <div className='absolute top-10 right-10 bg-white p-2 rounded-full shadow-lg flex items-center'>
              <span className='text-sm font-medium  text-gray-700'>
                100% Trusted
              </span>
            </div>
          </div>
        </div>

        {/* Left Section */}
        <div className='md:w-1/2 text-left pl-0 md:pl-8 lg:pl-12 xl:pl-16'>
          <img
            src={icon6} // Replace iconSrc with the path to your icon image
            alt='Icon'
            className='w-12 h-12 mb-4'
          />
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-zinc-400 text-[#0a0a0a] mb-4'>
            Trusted & Popular Job Portal
          </h2>
          <p className='text-gray-600 mb-8 text-base sm:text-lg lg:text-xl'>
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse
            ultrices gravida. Quis ipsum suspendisse ultrices gravida. Risus
            commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum
            suspendisse ultrices gravida.
          </p>

          <div className='flex space-x-4'>
            <button className=' bg-[#6366f1] text-white px-6 py-3  font-semibold hover:bg-[#1e3a8a] transition'>
              Post a Job
            </button>
            <button className='bg-gray-200  text-[#6366f1] px-6 py-3  font-semibold hover:bg-gray-300 transition'>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
