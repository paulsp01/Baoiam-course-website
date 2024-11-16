import React from 'react';

const StudentProgress = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Student Progress</h2>
      <div className="space-y-3">
        <div>
          <p className="font-medium">Overall Completion</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '70%'}}></div>
          </div>
        </div>
        <div>
          <p className="font-medium">Average Score</p>
          <p className="text-2xl font-bold text-green-600">85%</p>
        </div>
      </div>
    </div>
  );
};

export default StudentProgress;