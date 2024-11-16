import React from "react";

const ProgressBar = ({ percentage, title }) => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-1 relative">
        {/* Title of the progress bar */}
        <h3 className="text-lg font-semibold">{title}</h3>

        {/* Percentage text dynamically placed based on the filled width */}
        <span
          className="absolute text-sm font-medium text-amber-600"
          style={{ left: `calc(${percentage}% + 1rem)` }}
        >
          {percentage}%
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3 relative">
        {/* Filled portion of the progress bar */}
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-700 to-indigo-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
