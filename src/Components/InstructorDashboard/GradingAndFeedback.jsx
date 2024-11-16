import React from 'react';

const GradingAndFeedback = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Grading & Feedback</h2>
      <ul className="space-y-2">
        <li className="flex justify-between items-center">
          <span>Math Quiz #3</span>
          <button className="text-blue-500 hover:underline">Grade</button>
        </li>
        <li className="flex justify-between items-center">
          <span>Algebra Assignment</span>
          <button className="text-blue-500 hover:underline">Grade</button>
        </li>
        <li className="flex justify-between items-center">
          <span>Geometry Project</span>
          <button className="text-blue-500 hover:underline">Grade</button>
        </li>
      </ul>
    </div>
  );
};

export default GradingAndFeedback;