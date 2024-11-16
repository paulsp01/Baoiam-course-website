import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEnrolledCourses } from '../../Redux/slices/courseSlice';
import BeatLoader from 'react-spinners/BeatLoader'; // Import the spinner


// const courses = [
//   { id: 1, title: 'React for Beginners', description: 'Learn the basics of React.', image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png' },
//   { id: 2, title: 'Advanced Node.js', description: 'Deep dive into Node.js.', image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png' },
//   { id: 3, title: 'Full-Stack Development', description: 'Become a full-stack developer.', image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png' },
//   { id: 4, title: 'Python Programming', description: 'Master Python from scratch.', image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png' },
//   { id: 5, title: 'Database Design', description: 'Learn how to design efficient databases.', image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png' },
//   { id: 6, title: 'UI/UX Design Principles', description: 'Design beautiful and usable interfaces.', image: 'https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png' },
// ];



const Courses = () => {
  const dispatch = useDispatch();

  const { enrolledCourses, status, error } = useSelector((state) => state.courses);


  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (status === 'idle') {
      dispatch(fetchEnrolledCourses(token));
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return  <div className="flex justify-center items-center">
              <BeatLoader color="#4F46E5" loading={true} size={15} />
            </div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  if (enrolledCourses.length === 0) {
    return <div>No enrolled courses found</div>;
  }
  return (
    <section className="p-6 dark:bg-black dark:text-white  ">
      <h2 className="text-3xl font-semibold mb-6 text-center">All Enrolled Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {enrolledCourses.map((course) => (
          <div key={course.id} className="shadow-md dark:border bg-white dark:border-white rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <img
              src={course.course_image ? course.course_image : "https://miro.medium.com/v2/resize:fit:720/1*aBQrwweY6-qFVWeizUrTnQ.png"}
              alt={course.course_title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">{course.course_title}</h3>
              <span className='text-green-500'>{course.plan_type}</span>
              <p> Enrolled on: {new Date(course.created_at).toLocaleDateString()} </p>
              <button className="mt-4 bg-gradient-to-r from-indigo-700 to-indigo-500 text-white py-2 px-4 rounded hover:bg-gradient-to-l">
                View Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
