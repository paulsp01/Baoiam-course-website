// ContentCard.jsx
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function ContentCard({ imageSrc, title, content }) {
  return (
    <div className="relative w-64 h-96">
      {" "}
      {/* Image Div */}
      <div className="relative bg-gradient-to-r from-indigo-700 to-indigo-500 rounded-xl z-10">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      {/* Content Div Positioned Behind */}
      <div className="absolute top-12 left-2 flex flex-col justify-end w-full h-[82%] z-0 bg-white p-4 shadow-md rounded-xl transform translate-x-4 translate-y-4">
        <h3 className="text-2xl text-black font-semibold mb-2">{title}</h3>
        <p className="text-amber-600 text-lg mb-4">{content}</p>
        <div className="flex justify-end space-x-3">
          <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
          <FaTwitter className="text-blue-400 text-2xl cursor-pointer" />
          <FaLinkedin className="text-blue-800 text-2xl cursor-pointer" />
          <FaInstagram className="text-pink-500 text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
