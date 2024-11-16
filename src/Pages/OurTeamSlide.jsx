import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { swiperData } from "../Components/OurTeam Components/teamData";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
// import required modules
import {
  Autoplay,
  Pagination,
  Navigation,
  Keyboard,
  Scrollbar,
} from "swiper/modules";
import aboutus1 from "../assets/aboutus (1).jpg";
import aboutus2 from "../assets/aboutus (2).jpg";
import aboutus3 from "../assets/aboutus (3).jpg";
import aboutus4 from "../assets/aboutus (4).jpg";
import aboutus5 from "../assets/aboutus (5).jpg";
import Liam from "../assets/Liam.png";
import Henrik from "../assets/Henrik.png";
import Sylphie from "../assets/Sylphie.png";
import {
  FaHandsHelping,
  FaEye,
  FaLightbulb,
  FaChartLine,
  FaMedal,
} from "react-icons/fa";

const TeamComponent = () => {
     const [data, setData] = useState(swiperData);
  return (
    <div className="team-component">
      <div className="text-center text-xl md:text-4xl p-6 py-8 tracking-wide leading-4 font-bold">
        Our Team
      </div>

      <div className="p-6">
        <Swiper
          keyboard={{ enabled: true }}
          navigation={true}
          scrollbar={{ draggable: true }}
          modules={[Keyboard, Pagination, Navigation, Scrollbar]}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 }, // 1 slide on mobile
            640: { slidesPerView: 2 }, // 2 slides on small tablets
            768: { slidesPerView: 3 }, // 3 slides on larger tablets
            1024: { slidesPerView: 4 }, // 4 slides on desktops
          }}
          onSlideChange={() => console.log("Slide changed")}
          onSwiper={(swiper) => console.log("Swiper initialized")}
          className="md:h-[350px] w-full md:w-[90%] m-auto rounded-lg flex flex-col justify-center items-center gap-4"
        >
          {data?.map((el) => (
            <SwiperSlide key={el.id} className="group flip-card w-96 h-96">
              <div className="flip-card-inner">
                {/* Front Side (Image) */}
                <div className="flip-card-front">
                  <img
                    className="h-full w-full rounded-md object-cover"
                    src={el.image}
                    alt={el.name}
                  />
                </div>

                {/* Back Side (Details) */}
                <div className="flip-card-back bg-black/80 text-white rounded-md flex flex-col justify-center items-center">
                  <h3 className="text-center font-sans font-medium text-lg">
                    {el.name}
                  </h3>
                  <p className="text-center font-bold text-xs">{el.role}</p>
                  <div className="py-2 flex items-center justify-center gap-2">
                    <FaLinkedin className="text-xl" />
                    <FaXTwitter className="text-xl" />
                  </div>
                  <p className="text-xs md:text-sm text-center px-4">
                    {el.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamComponent;
