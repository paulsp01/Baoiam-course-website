import React from "react";

const ReviewSection = () => {
  return (
    <div className="max-w-md mx-auto bg-gray-200 overflow-hidden md:max-w-2xl mb-10">
      <div className="p-6 bg-gray-200">
        <h2 className="text-2xl font-bold mb-4">Review</h2>
        <div className="flex justify-between items-center">
          {/* Left Section for Course Rating */}
          <div className="text-center flex flex-col items-center mr-8 mt-0 mb-5">
            <p className="text-5xl font-bold mb-2 mt-0  ">5.0</p>
            <div className="flex items-center">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.392-2.46a1 1 0 00-1.176 0l-3.392 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.34 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                </svg>
              ))}
            </div>
            <h3 className="text-lg text-gray-500 font-semibold  mt-2">Course Rating</h3>
          </div>

          {/* Right Section for Rating Bars */}
          <div className="space-y-4 flex-grow">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center">
                <div className="flex items-center">
                  {Array.from({ length: rating }, (_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.392 2.46a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.392-2.46a1 1 0 00-1.176 0l-3.392 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.34 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.97z" />
                    </svg>
                  ))}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 ml-4">
                  <div
                    className={`bg-gradient-to-r from-yellow-400 to-orange-500 h-2.5 rounded-full`}
                    style={{ width: `${rating * 20}%` }}
                  ></div>
                </div>
                <span className="ml-2 text-sm">{rating * 20}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
