import React, { useState } from 'react';
import { FaUser, FaBook, FaChartLine, FaClipboard, FaPlus, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa';
import MyProfile from './MyProfile';
import MyCourses from './MyCourses';
import StudentProgress from './StudentProgress';
import Assignments from './Assignment';
import CreateCourse from './CreateCourse';
import ProfileManage from './ProfileManage';
import Logout from './Logout';
import { IoCloseSharp } from 'react-icons/io5';



const TeacherDashboard = () => {
  document.title = 'Baoiam - Instructor Dashboard'
  const [activeTab, setActiveTab] = useState('My Profile');
  const [isOpen, setIsOpen] = useState(false);
  const openSidebar=()=>{
    setIsOpen(true)
}
  const closeSidebar=()=>{
    setIsOpen(false)
}
  const tabs = [
    { name: 'My Profile', icon: <FaUser /> },
    { name: 'My Courses', icon: <FaBook /> },
    { name: 'Student Progress', icon: <FaChartLine /> },
    { name: 'Assignments', icon: <FaClipboard /> },
    { name: 'Create Course', icon: <FaPlus /> },
    { name: 'Profile Manage', icon: <FaCog /> },
    { name: 'Logout', icon: <FaSignOutAlt /> },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className={`lg:w-1/3 w-sm ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:h-auto lg:translate-x-0 duration-200 text-white z-40 bg-indigo-700 p-6 fixed lg:static h-full`}>
        <IoCloseSharp className="lg:hidden absolute top-3 right-3 cursor-pointer text-2xl"  onClick={closeSidebar}/>
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-2xl font-bold">My Account</h1>
        </div>
        <ul>
          {tabs.map((tab, idx) => (
            <li key={idx} onClick={() => setActiveTab(tab.name)} className={`flex items-center p-4 mb-2 cursor-pointer ${activeTab === tab.name ? 'bg-indigo-900' : 'hover:bg-indigo-800'}`}>
              {tab.icon} <span className="ml-4">{tab.name}</span>
            </li>
          ))}
        </ul>
      </div>
     {isOpen && <div className='fixed w-full h-full bg-black opacity-30 z-30' onClick={closeSidebar}></div>}
      {/* Main Content */}
      <div className="lg:ml-1/4 ml-0 w-full py-6 px-2 md:px-6">
        <button className="lg:hidden mb-6 text-black" onClick={openSidebar}>
          <FaBars className="text-2xl" />
        </button>
        <div>
          {activeTab === 'My Profile' && <MyProfile />}
          {activeTab === 'My Courses' && <MyCourses />}
          {activeTab === 'Student Progress' && <StudentProgress />}
          {activeTab === 'Assignments' && <Assignments />}
          {activeTab === 'Create Course' && <CreateCourse />}
          {activeTab === 'Profile Manage' && <ProfileManage />}
          {activeTab === 'Logout' && <Logout />}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;


