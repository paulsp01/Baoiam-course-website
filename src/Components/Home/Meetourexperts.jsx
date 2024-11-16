import React from "react";
import meet from "../../assets/Images/meet2.jpeg";
import meet2 from "../../assets/Images/meet3.jpeg";
import meet3 from "../../assets/Images/meet7.jpeg";
import meet4 from "../../assets/Images/meet8.jpeg";
import meet5 from "../../assets/Images/meet5.jpeg";

import meet6 from "../../assets/Images/meet9.jpeg";
import meet7 from "../../assets/Images/meet10.jpeg";
import meet8 from "../../assets/Images/meet11.jpeg";
import meet9 from "../../assets/Images/meet12.jpeg";
import meet10 from "../../assets/Images/meet13.jpeg";
import meet11 from "../../assets/Images/meet14.jpeg";
import meet12 from "../../assets/Images/meet15.jpeg";
import meet13 from "../../assets/Images/meet16.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {

  Pagination,
  Navigation,
  Keyboard,
  Scrollbar,
} from "swiper/modules";

const ExpertsSection = () => {
  const experts = [
    { img: meet, name: "Prasun Kumar", role: "R&D Lead" },
    { img: meet2, name: "Surbhi Vandana", role: "Project Manager" },
    { img: meet3, name: "Vipakshi Joshi", role: "Senior Website Developer" },
    { img: meet4, name: "Prajwal Bera", role: "Software Testing Expert" },
    { img: meet5, name: "Ragini Singh", role: "DevOps Engineer" },
    { img: meet6, name: "Anjali Verma", role: "UI/UX Designer" },
    { img: meet7, name: "Rahi Sharma", role: "Mobile App Developer" },
    { img: meet8, name: "Neha Agarwal", role: "Data Scientist" },
    { img: meet9, name: "Dhiraj Chaudhury", role: "R&D Lead" },
    { img: meet10, name: "Surbhi VPandey", role: "Project Manager" },
    { img: meet11, name: "Rakhsha Sawant", role: "Senior Website Developer" },
    { img: meet12, name: "Purab Das", role: "Software Testing Expert" },

  ];

  return (
    <section className="bg-white text-white py-8">
      <div className="p-4 mx-auto ">
        <div className="flex flex-col  items-center text-center  gap-4 lg:gap-0 justify-between mb-6 px-4 md:px-8">
          <h2 className="text-3xl font-bold w-full  text-black">
            Meet Our <span className="text-indigo-600">Experts</span>
          </h2>
          <p className="text-sm w-full  text-black lg:text-lg pt-2">
            BAOIAM students get mentored by the industry experts who have
            achieved mastery in their respective domains &amp; are passionate
            about helping students to achieve their dreams.
          </p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation
          modules={[Navigation, Keyboard, Scrollbar]}
          className="mySwiper"
          breakpoints={{
            // Define breakpoints for responsive behavior
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {experts.map((expert, index) => (
            <SwiperSlide key={index}>
              <div className="border border-gray-500 flex flex-col items-center bg-white text-black p-4 lg:p-4 lg:m-3 md:m-2 m-6  rounded-lg  transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                <img
                  src={expert.img}
                  alt={expert.name}
                  className="w-[15rem] h-[15rem]  rounded-lg object-cover"
                />
                <div className="mt-4 text-center">
                  <h4 className="md:text-lg lg:text-xl font-bold">
                    {expert.name}
                  </h4>
                  <p className="text-gray-600 text-sm tracking-tight lg:tracking-normal lg:text-base">
                    {expert.role}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
export default ExpertsSection;
