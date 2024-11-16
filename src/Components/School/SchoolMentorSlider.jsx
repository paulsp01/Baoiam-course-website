import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Keyboard, Pagination, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import t1 from "../../assets/Team/t1.jpeg";
import t2 from "../../assets/Team/t2.jpeg";
import t3 from "../../assets/Team/t4.webp";
import t4 from "../../assets/Team/t5.webp";
import t5 from "../../assets/Team/t6.jpeg";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export const swiperData = [
  {
    id: 1,
    image: t3,
    name: "John William",
    role: "Founder & CEO",
    linkedin: "",
  },
  {
    id: 1,
    image: t5,
    name: "John William",
    role: "Founder & CEO",
    linkedin: "",
  },
  {
    id: 1,
    image: t4,
    name: "John William",
    role: "Founder & CEO",
    linkedin: "",
  },
  {
    id: 1,
    image: t2,
    name: "John William",
    role: "Founder & CEO",
    linkedin: "",
  },
  {
    id: 1,
    image: t4,
    name: "John William",
    role: "Founder & CEO",
    linkedin: "",
  },
  {
    id: 1,
    image: t3,
    name: "John William",
    role: "Founder & CEO",
    linkedin: "",
  },
  {
    id: 1,
    image: t5,
    name: "John William",
    role: "Founder & CEO",
    linkedin: "",
  },
  {
    id: 1,
    image: t1,
    name: "John William",
    role: "Founder & CEO",
    linkedin: "",
  },
  {
    id: 1,
    image: t1,
    name: "John William",
    role: "Founder & CEO",
    linkedin: "",
  },
];

export const SchoolMentorSlider = () => {
  return (
    <>
      {" "}
      <Swiper
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        Scrollbar={{ draggable: true }}
        modules={[Keyboard, Pagination, Navigation, Scrollbar]}
        spaceBetween={24}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 4,
          },
        }}
        onSlideChange={() => console.log("hi")}
        onSwiper={(swiper) => console.log("")}
        className='my-8 md:h-[350px] w-full md:w-[90%] m-auto rounded-lg flex flex-col justify-center items-center gap-4'
      >
        {swiperData?.map((el) => {
          return (
            <SwiperSlide
              className='relative bg-zinc-200 rounded-2xl  h-[250px] w-[160px] md:h-[360px] md:w-[130px] flex flex-col justify-center items-center gap-4'
              key={el.id}
            >
              <img
                className='h-full rounded-2xl w-full'
                src={el.image}
                alt={el.name}
              />
              {/* Positioned name at the bottom */}
              <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 w-full'>
                <h3 className='text-center text-white font-sans font-medium text-sm md:text-lg bg-black bg-opacity-50 p-1 rounded-md'>
                  {el.name}
                </h3>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
