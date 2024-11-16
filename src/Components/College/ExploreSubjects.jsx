import React from 'react';
import CoursesList from '../CoursesList';
import { useParams } from 'react-router-dom';

const ExploreSubjects = () => {
    const course=useParams().course;
  const subjects = CoursesList[course]?.map(item=>item.courseName);

  return (
    <div className="px-6 py-4">
      <h2 className="text-2xl font-bold mb-4">Explore Subjects</h2>
      <div className="flex flex-wrap gap-3">
        {subjects?.map((subject, index) => (
          <button 
            key={index}
            className="bg-gray-100 text-gray-700 font-medium px-4 py-2 rounded-lg shadow-sm hover:bg-gray-200 transition duration-200"
          >
            {subject}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExploreSubjects;
