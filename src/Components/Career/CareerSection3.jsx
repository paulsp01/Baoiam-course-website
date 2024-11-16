import image1 from "../../assets/ITIE&Entre/onlineLearning2.avif";

export const CareerSection3 = () => {
  const features = [
    { id: 1, title: "Quality Job", icon: "🏅" },
    { id: 2, title: "Top Companies", icon: "🏢" },
    { id: 3, title: "No Extra Charge", icon: "💸" },
    { id: 4, title: "International Job", icon: "🌍" },
  ];
  return (
    <>
      <div className='flex flex-col md:flex-row gap-10 items-center dark:bg-black bg-white px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28 py-8 mx-0  lg:mt-2 w-full'>
        {/* Left Section */}
        <div className='md:w-1/2 text-left mb-8 md:mb-0 '>
          <h2 className='text-3xl dark:text-zinc-400 sm:text-4xl lg:text-5xl font-bold  text-[#0a0a0a] mb-4'>
            Why We Are Most Popular
          </h2>
          <p className='text-gray-600 mb-8'>
            Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
            maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse
            ultrices gravida.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {features.map((feature) => (
              <div
                key={feature.id}
                className='flex items-center bg-gray-100 p-4 rounded-lg shadow'
              >
                <span className='text-xl sm:text-2xl mr-4'>{feature.icon}</span>
                <span className='text-base sm:text-lg font-medium text-gray-700'>
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className='md:w-1/2 flex justify-center items-center '>
          <div className='relative w-full max-w-md md:max-w-lg lg:max-w-full'>
            <img
              src={image1}
              alt='Why We Are Most Popular'
              className='rounded-lg w-full'
            />
            <div className='absolute top-4 left-4 bg-white p-2 rounded-full shadow-lg flex items-center'>
              <span className='text-sm font-medium text-gray-700 sm:text-xs'>
                100% Trusted
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
