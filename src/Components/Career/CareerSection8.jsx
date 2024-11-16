import image8 from "../../assets/ITIE&Entre/teamwork13.avif";
import image9 from "../../assets/ITIE&Entre/teamwork14.avif";
import image2 from "../../assets/ITIE&Entre/teamwork12.avif";
import image7 from "../../assets/ITIE&Entre/Biaoam.webp";

export const CareerSection8 = () => {
  return (
    <>
      <section className='dark:bg-black bg-white p-8 w-full mt-8 mb-12'>
        <div className='max-w-screen-xl mx-auto'>
          <div className='flex flex-col lg:items-center text-center'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1f0a6b] mb-6'>
              Hear from the{" "}
              <span className='bg-gradient-to-r from-[#fc5305] to-[#fcbf05] text-transparent bg-clip-text'>
                team
              </span>
            </h2>
            <p className='text-base sm:text-lg lg:text-xl text-[#1f0a6b] mt-4 lg:w-3/4 mx-auto'>
              Get a sneak-peek of what happens at BAOIAM
            </p>
          </div>
          <div className='mt-8 w-full grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-6'>
            {/* Card 1 */}
            <div className='flex flex-col bg-[#f1ebf5] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out overflow-hidden h-full'>
              <img
                src={image7}
                alt='Team member'
                className='w-full h-48 object-cover sm:h-60 lg:h-64'
              />
              <div className='p-6 flex-1'>
                <p className='text-gray-600 italic'>
                  BAOIAM has a great work culture &amp; professional environment
                  for its interns. I learned that every company or organisation
                  has its own culture.
                </p>
                <p className='text-gray-700 font-bold mt-4 text-lg sm:text-xl'>
                  - Shreya Choudhary
                </p>
              </div>
            </div>
            <div className='col-span-1 row-span-4'>
              <img
                src={image2}
                alt='Team Member 2'
                className='w-full h-full  object-cover'
              />
            </div>
          </div>
          <div className='grid grid-cols-1 gap-2'>
            <div className='col-span-1 row-span-4'>
              <img
                src={image9}
                alt='Team Member 3'
                className='w-full h-full  object-cover'
              />
            </div>
            <div className='col-span-1'>
              <img
                src={image8}
                alt='Team Member 4'
                className='w-full h-full  object-cover'
              />
            </div>
          </div>
        </div>
        {/* Text Content */}
        <div className='relative z-10 w-full md:w-1/2 text-left p-4 md:pl-8'>
          <h1 className='text-5xl font-bold mb-4'>
            Take a closer look at the Baoiam team
          </h1>
          <p className='mb-4'>
            We are mostly dog people (but we love cat people, too).
          </p>
          <p className='mb-4'>
            Hubstaffers generally spend their free time cooking, playing games,
            reading, working out, brewing beer, or hanging with the family.
          </p>
          <p className='mb-4'>
            We're big into family. One of the great benefits of remote work is
            being home for bus pickup and drop-off.
          </p>
          <p className='mb-8'>
            Wellness is important to us. Many Hubstaffers lift weights, rock
            climb, and practice yoga — as reported in our #wellness Slack
            channel.
          </p>
        </div>
      </section>
    </>
  );
};
