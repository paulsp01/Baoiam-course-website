import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa"; // Import the right arrow icon
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
} from "../../assets/swiper-imgs/assets";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("Popular Courses");

  const settings = {
    speed: 500,
    slidesToShow: 3,
    spaceBetween: 20,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          spaceBetween: 40,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = {
    "Popular Courses": [
      {
        name: "Popular Course 1",
        img: img1,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Popular Course 2",
        img: img2,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Popular Course 3",
        img: img3,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Popular Course 4",
        img: img4,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Popular Course 5",
        img: img5,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
    "Top Diplomas": [
      {
        name: "Top Diploma 1",
        img: img6,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Top Diploma 2",
        img: img7,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Top Diploma 3",
        img: img8,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Top Diploma 4",
        img: img10,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Top Diploma 5",
        img: img9,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
    "Top Certificates": [
      {
        name: "Top Certificate 1",
        img: img11,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Top Certificate 2",
        img: img12,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Top Certificate 3",
        img: img13,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Top Certificate 4",
        img: img11,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Top Certificate 5",
        img: img12,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
    "New Courses": [
      {
        name: "New Course 1",
        img: img14,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "New Course 2",
        img: img15,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "New Course 3",
        img: img12,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "New Course 4",
        img: img15,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "New Course 5",
        img: img14,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  };

  const categoryColors = {
    "Popular Courses": "text-indigo-500 hover:text-indigo-800",
    "Top Diplomas": "text-indigo-500 hover:text-indigo-800",
    "Top Certificates": "text-indigo-500 hover:text-indigo-800",
    "New Courses": "text-indigo-500 hover:text-indigo-800",
  };

  const handleCategoryClick = (event, category) => {
    event.preventDefault();
    setSelectedCategory(category);
  };

  return (
    <div className="dark:bg-black dark:text-white  w-[90%] m-auto mt-2">
      {/* Navigation Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center py-3 border-b border-gray-300">
        {[
          "Popular Courses",
          "Top Diplomas",
          "Top Certificates",
          "New Courses",
        ].map((category) => (
          <div key={category} className="text-center">
            <a
              href="#"
              className={`text-lg font-bold ${
                selectedCategory === category
                  ? categoryColors[category]
                  : "text-white"
              }`}
              onClick={(event) => handleCategoryClick(event, category)}
            >
              {category}
            </a>
            {selectedCategory === category && (
              <div className={`w-24 h-1 bg-indigo-600 mt-2 mx-auto`}></div>
            )}
          </div>
        ))}
      </div>

      {/* Slider */}
      <div className="dark:bg-black dark:text-white w-full mt-10">
        <Slider {...settings} className="flex gap-8">
          {data[selectedCategory].map((d, index) => (
            <div
              key={index}
              style={{ margin: "10px" }}
              className="bg-indigo-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border-2 m-5 border-slate-300 slick-slide gap-5 p-4 shadow-lg rounded-xl dark:bg-black dark:text-white w-[90%] mt-10"
            >
              <div
                className={`h-40 w-full rounded-t-xl bg-amber-100 flex justify-center items-center`}
              >
                <img
                  src={d.img}
                  alt={d.name}
                  className="h-full w-full rounded-full border-4 border-white"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-2xl font-semibold">{d.name}</p>
                <p className="text-center">{d.review}</p>
                <button className="bg-gradient-to-r from-indigo-700 to-indigo-500 text-white text-xl px-6 py-2 rounded-xl hover:bg-gradient-to-l transition duration-300">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={`absolute top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full`}
      onClick={onClick}
      aria-label="Previous"
      style={{ left: "-2rem", zIndex: 10, padding: "0.0rem" }}
    >
      <FaChevronCircleLeft size={24} />
    </button>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={`absolute right-[-3rem] top-1/2 transform -translate-y-1/2 bg-black text-white rounded-full`}
      onClick={onClick}
      aria-label="Next"
      style={{ zIndex: 10, padding: "0.0rem" }}
    >
      <FaChevronCircleRight size={24} />
    </button>
  );
};

export default App;
