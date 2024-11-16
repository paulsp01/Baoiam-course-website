import React from 'react';

const MyCourses = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">My Courses</h2>
      <ul className="space-y-2">
        <li className="flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
          Mathematics 101
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
          Advanced Algebra
        </li>
        <li className="flex items-center">
          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
          Geometry Basics
        </li>
      </ul>
    </div>
  );
};

export default MyCourses;