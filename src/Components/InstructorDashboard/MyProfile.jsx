import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import Calendar from './Calendar';
import Profile from '../StudentDasboard/Profile'

const MyProfile = () => {

  const userInfo={
    name: "Name not provided",
    email: "Email not provided",
    college: "College not provided",
    mobile: "Mobile not provided",
    dob: "DOB not provided",
    location: "Location not provided",
    socialLinks: {
      linkedIn: "",
      gitHub: "",
      leetCode: "",
  }
  }
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      {/* Profile Card */}
      <div className='w-full flex-1 space-y-2 lg:w-2/3'>
       {/*  <div className="bg-white shadow-lg rounded-lg p-6 w-full">
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/150"
              alt="Instructor Profile"
              className="rounded-full w-32 h-32 mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">John Doe</h2>
            <p className="text-gray-600">Instructor</p>
          </div>
          <div className="mt-6 flex flex-col gap-2">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> john.doe@example.com</p>
            <p><strong>Date of Birth:</strong> 12th May 1985</p>
            <p><strong>Location:</strong> New York, USA</p>
          </div>
        </div> */}
        <Profile userInfo={userInfo} />

        {/* Courses Summary Card */}
        <div className="shadow-lg rounded-lg p-6 w-full">
          <h3 className="text-xl font-semibold mb-4">Course Overview</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-indigo-100 p-4 rounded-lg text-center">
              <h4 className="text-lg font-semibold">Total Courses</h4>
              <p className="text-2xl font-bold text-indigo-700">12</p>
            </div>
            <div className="bg-indigo-100 p-4 rounded-lg text-center">
              <h4 className="text-lg font-semibold">Enrolled Students</h4>
              <p className="text-2xl font-bold text-indigo-700">450</p>
            </div>
          </div>
        </div>
      </div>
      {/* Calendar and Tasks Card */}
      <div className="bg-indigo-600 flex-1 shadow-lg rounded-lg py-6 px-4 md:px-6 max-w-sm w-xs mx-auto">
        {/* Here you can integrate a calendar library */}
        <Calendar />
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="text-lg font-semibold">Upcoming Tasks</h4>
          <ul className="list-disc pl-6 mt-2">
            <li>Review Assignments - 12th Sept</li>
            <li>Prepare Lecture for next week - 14th Sept</li>
            <li>Course Launch: React Basics - 20th Sept</li>
          </ul>
        </div>
      </div>
      </div>
  );
};

export default MyProfile;
