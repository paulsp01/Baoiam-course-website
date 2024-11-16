import React, { useState } from "react";
import review1 from "../../assets/Images/review1.jpeg";
import review3 from "../../assets/Images/review3.jpeg";
import review2 from "../../assets/Images/review2.jpeg";
import review4 from "../../assets/Images/review4.jpeg";
import review6 from "../../assets/Images/review6.jpeg";
import review7 from "../../assets/Images/review7.jpeg";
import review8 from "../../assets/Images/review8.jpeg";
import review9 from "../../assets/Images/review9.jpeg";
import { FaStar, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

const UserProfileSection = () => {
  const profiles = [
    {
      name: "Abu Zafar Md Akramul Foyej",
      text: "At 29 years old, Abu has shown great determination and skill in the tech industry. His insights and work ethic are highly valued.",
      src: review1,
      rating: 4.5,
    },
    {
      name: "Razon Islam",
      text: "At 23 years old, Razon has already made significant contributions to software development. His passion for learning is inspiring.",
      src: review2,
      rating: 4,
    },
    {
      name: "Shamomo Henderson",
      text: "At 27 years old, Shamomo has demonstrated exceptional leadership qualities and technical expertise.",
      src: review3,
      rating: 5,
    },
    {
      name: "Abu Zafar Md Akramul Foyej",
      text: "At 29 years old, Abu has shown great determination and skill in the tech industry. His insights and work ethic are highly valued.",
      src: review4,
      rating: 4.5,
    },
    {
      name: "Razon Islam",
      text: "At 23 years old, Razon has already made significant contributions to software development. His passion for learning is inspiring.",
      src: review6,
      rating: 4,
    },
    {
      name: "Shamomo Henderson",
      text: "At 27 years old, Shamomo has demonstrated exceptional leadership qualities and technical expertise.",
      src: review7,
      rating: 5,
    },
  ];

  const [visibleReviews, setVisibleReviews] = useState(3);
  const [showMore, setShowMore] = useState(true);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-500" />
        ))}
        {halfStar && (
          <FaStar key="half" className="text-yellow-500 opacity-50" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <FaStar key={`empty-${i}`} className="text-gray-300" />
        ))}
      </>
    );
  };

  const handleShowMore = () => {
    setVisibleReviews((prevVisibleReviews) =>
      prevVisibleReviews + 3 > profiles.length
        ? profiles.length
        : prevVisibleReviews + 3
    );
    setShowMore(false);
  };

  const handleShowLess = () => {
    setVisibleReviews((prevVisibleReviews) =>
      prevVisibleReviews - 3 < 3 ? 3 : prevVisibleReviews - 3
    );
    setShowMore(true);
  };

  return (
    <div className="max-w-md mx-auto bg-indigo-100 overflow-hidden md:max-w-2xl mb-10 p-10">
      <h2 className="text-2xl font-bold mb-6">Featured Reviews</h2>
      <div className="bg-indigo-100 p-6">
        {profiles.slice(0, visibleReviews).map((profile, index) => (
          <div key={index} className="mb-6">
            <div className="flex items-center mb-4">
              <img
                src={profile.src}
                alt={profile.name}
                className="w-12 h-12 rounded-full mr-4 "
              />
              <div>
                <h3 className="text-lg font-semibold">{profile.name}</h3>
                <div className="flex items-center">
                  {renderStars(profile.rating)}
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-4">{profile.text}</p>
            <div className="flex items-center">
              <button className="flex items-center text-green-500 mr-4">
                <FaRegThumbsUp className="mr-1" />
              </button>
              <button className="flex items-center text-red-500">
                <FaRegThumbsDown className="mr-1" />
              </button>
            </div>
          </div>
        ))}
        <div className="text-center">
          {showMore && visibleReviews < profiles.length && (
            <button className="text-blue-500 mt-4" onClick={handleShowMore}>
              Show More
            </button>
          )}
          {!showMore && (
            <button className="text-blue-500 mt-4" onClick={handleShowLess}>
              Show Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfileSection;
