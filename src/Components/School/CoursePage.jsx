import React from 'react';
import { useParams } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';

const subcategories = {
  course1: ['Subcategory 1A', 'Subcategory 1B', 'Subcategory 1C'],
  course2: ['Subcategory 2A', 'Subcategory 2B', 'Subcategory 2C'],
  course3: ['Subcategory 3A', 'Subcategory 3B', 'Subcategory 3C'],
  course4: ['Subcategory 4A', 'Subcategory 4B', 'Subcategory 4C'],
  course5: ['Subcategory 5A', 'Subcategory 5B', 'Subcategory 5C'],
  course6: ['Subcategory 6A', 'Subcategory 6B', 'Subcategory 6C'],
  
};

const CoursePage = () => {
  const { courseId } = useParams();
  const selectedSubcategories = subcategories[courseId] || [];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Subcategories</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {selectedSubcategories.map((subcategory, index) => (
          <button
            key={index}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition"
          >
            <FaReact className="text-xl" />
            {subcategory}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
