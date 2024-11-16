import React from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { AiFillStar } from "react-icons/ai"; // Import star icon

function Recommendations() {
  const navigate = useNavigate();
  const recommendedCourses = [
    {
      id: 1,
      name: "Advanced React Patterns",
      rating: 4.5, // Add rating here
      price: '$10',
      image: "https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png",
    },
    {
      id: 2,
      name: "Fullstack Web Development",
      rating: 4.8,
      price: '$10',
      image: "https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png",
    },
    {
      id: 3,
      name: "Advanced React Patterns",
      rating: 4.5, // Add rating here
      price: '$10',
      image: "https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png",
    },
    {
      id: 4,
      name: "Fullstack Web Development",
      rating: 4.8,
      price: '$10',
      image: "https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png",
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, index) => (
          <AiFillStar key={index} className="text-yellow-400" />
        ))}
        {halfStar && <AiFillStar className="text-yellow-400" />}
        {[...Array(emptyStars)].map((_, index) => (
          <AiFillStar key={index + fullStars} className="text-gray-400" />
        ))}
      </div>
    );
  };

  return (
    <div className="h-screen overflow-scroll backdrop-filter bg-indigo-100 shadow-border backdrop-blur-lg dark:bg-black dark:text-white relative dark:border dark:border-white flex flex-col items-center rounded-lg text-black">
      {/* Sticky Heading */}
      <div className="sticky top-0 w-full backdrop-blur-sm left-0 right-0 z-20 dark:bg-black p-4">
        <h2 className="text-xl lg:text-2xl font-bold w-full md:text-base">
          Recommended Courses
        </h2>
      </div>

      {/* Course List */}
      <div className="flex flex-col gap-6 px-4 mt-2">
        {recommendedCourses.map((course) => (
          <div
            key={course.id}
            className="w-full flex bg-indigo-600 flex-col xl:flex-row hover:shadow-md duration-100 ease-in dark:border dark:border-white items-center gap-4 shadow-lg rounded-lg p-4 md:p-6"
          >
            {/* Course Image */}
            <div className="w-full xl:w-fit">
              <img
                src={course.image}
                alt={course.name}
                className="object-cover xl:w-32 xl:h-32 rounded-lg"
              />
            </div>
            {/* Course Info */}
            <div className="flex flex-col flex-1 text-center md:text-left">
              <h3 className="text-lg text-white md:text-xl font-semibold">{course.name}</h3>

              {/* Rating Section */}
              <div className="mt-2 flex flex-col flex-1 text-center">
                {renderStars(course.rating)}
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center mt-6">
                {/* Price Section */}
                <p className="text-sm md:text-base font-bold text-white mb-4 md:mb-0">
                  {course.price}
                </p>

                {/* Enroll Button */}
                <button
                  onClick={() => navigate("/courses/college")}
                  className="relative xl:w-auto flex items-center justify-center bg-white py-2 px-3 lg:py-2 lg:px-4 md:py-1 md:px-2 overflow-hidden text-black font-semibold rounded-full group"
                >
                  <span className="md:text-sm">Know More</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
