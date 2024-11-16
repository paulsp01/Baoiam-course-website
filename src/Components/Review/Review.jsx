import React from "react";

import review from "../../assets/Images/review.jpeg";







import { FaStar } from "react-icons/fa";
import {
 
  MdPeople,
  MdMenuBook,
} from "react-icons/md";

const CourseDetail = () => {
  return (
    <div className="container mx-auto p-8 max-w-3xl ">
      <div className="flex flex-col md:flex-row lg:flex-row lg:space-x-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="lg:w-1/3 bg-gray-100 flex justify-center items-center p-8">
          <img src={review} alt="Course" className="rounded-lg" />
        </div>
        <div className="lg:w-2/3 p-8">
          <h1 className="text-3xl font-bold mb-4">Instructor</h1>
          <div>
            <h3 className="text-lg font-semibold">Jonas Schmedtmann</h3>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-xl mr-2">
              <FaStar />
            </span>
            <span className="font-semibold text-sm">4.7</span>
            <span className="text-gray-500 ml-2">(159,398 ratings)</span>
          </div>
          <p className="text-base mb-4">
            The modern JavaScript course for everyone! Master JavaScript with
            projects, challenges and theory. Many courses in one!
          </p>
          <div className="flex items-center space-x-4 text-gray-700 mb-4">
            <span className="flex items-center text-xs">
              <MdPeople className="mr-2 text-xl text-blue-500" />
              <span>125,567 students</span>
            </span>
            <span className="flex items-center text-xs">
              <MdMenuBook className="mr-2 text-xl text-blue-500" />
              <span>20 courses</span>
            </span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
