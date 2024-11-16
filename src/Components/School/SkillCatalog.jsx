import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  BsBank,
  BsClipboardCheckFill,
  BsFillPuzzleFill,
  BsGraphUpArrow,
  BsMegaphoneFill,
  BsPeopleFill,
  BsRobot,
} from "react-icons/bs";
import { FaCog, FaHandsHelping, FaSpinner } from "react-icons/fa";
import {
  FaCamera,
  FaChartLine,
  FaCode,
  FaLightbulb,
  FaMicrophone,
  FaPaintbrush,
} from "react-icons/fa6";
import { MdGroup } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import {
  BarLoader,
  BounceLoader,
  CircleLoader,
  ClockLoader,
  DotLoader,
  FadeLoader,
  PulseLoader,
  RingLoader,
  RotateLoader,
} from "react-spinners";

// const courses = [
//   {
//     id: 1,
//     name: "Maths",
//     image:
//       "https://www.shutterstock.com/shutterstock/photos/1859813464/display_1500/stock-vector-math-horizontal-banner-presentation-website-isolated-lettering-typography-idea-with-icons-1859813464.jpg",
//     link: "/course1",
//   },
//   {
//     id: 2,
//     name: "English",
//     image:
//       "https://media.istockphoto.com/id/1047570732/vector/english.jpg?s=612x612&w=0&k=20&c=zgafUJxCytevU-ZRlrZlTEpw3mLlS_HQTIOHLjaSPPM=",
//     link: "/course2",
//   },
//   {
//     id: 3,
//     name: "Computer",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZdgV5S9C5GWwq_c7Zz0iuevDw0j4oR6Igzg&s",
//     link: "/course3",
//   },
//   {
//     id: 4,
//     name: "Speaking",
//     image: "https://live.staticflickr.com/65535/51296941104_c00609f0fd_b.jpg",
//     link: "/course4",
//   },
//   {
//     id: 5,
//     name: "Science",
//     image:
//       "data:image/jpeg;base64,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",
//     link: "/course5",
//   },
//   {
//     id: 6,
//     name: "Personality Development",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_dl074uJUaKxeYeUqT4Zay9CFO9pHuo0zzA&s",
//     link: "/course6",
//   },
// ];

const SkillCatalog = () => {
  const [schoolCourses, setSchoolCourses] = useState([]);
  const navigate = useNavigate();

  const static_data = [
    <Link to="/course/school/1">
      <span className="relative z-10 flex items-center gap-4 py-4 px-4">
        <FaMicrophone
          className="text-indigo-600 group-hover:text-white"
          size={22}
        />{" "}
        <span className="truncate">English Speaking/Public Speaking</span>
      </span>
    </Link>,
    <Link to="/course/school/2">
      <span className="relative z-10 flex items-center gap-4 py-4 px-4">
        <FaLightbulb
          className="text-indigo-600 group-hover:text-white"
          size={22}
        />{" "}
        <span className="truncate">Creative writing</span>
      </span>
    </Link>,
    <Link to="/course/school/3">
      <span className="relative z-10 flex items-center gap-4 py-4 px-4">
        <FaPaintbrush
          className="text-indigo-600 group-hover:text-white"
          size={22}
        />{" "}
        <span className="truncate">Art and Craft (DIY)</span>
      </span>
    </Link>,
    <Link to="/course/school/4">
      <span className="relative z-10 flex items-center gap-4 py-4 px-4">
        <FaCog className="text-indigo-600 group-hover:text-white" size={22} />{" "}
        <span className="truncate">Critical Thinking & Problem Solving</span>
      </span>
    </Link>,
    <Link to="/course/school/5">
      <span className="relative z-10 flex items-center gap-4 py-4 px-4">
        <FaHandsHelping
          className="text-indigo-600 group-hover:text-white"
          size={22}
        />{" "}
        <span className="truncate">Life Skills</span>
      </span>
    </Link>,
    <Link to="/course/school/6">
      <span className="relative z-10 flex items-center gap-4 py-4 px-4">
        <FaCamera
          className="text-indigo-600 group-hover:text-white"
          size={22}
        />{" "}
        <span className="truncate">Photography & Editing Skills</span>
      </span>
    </Link>,
    <Link to="/course/school/7">
      <span className="relative z-10 flex items-center gap-4 py-4 px-4">
        <FaCode className="text-indigo-600 group-hover:text-white" size={22} />{" "}
        <span className="truncate">
          Technology Development with AI & Coding
        </span>
      </span>
    </Link>,
    <Link to="/course/school/8">
      <span className="relative z-10 flex items-center gap-4 py-4 px-4">
        <FaChartLine
          className="text-indigo-600 group-hover:text-white"
          size={22}
        />{" "}
        <span className="truncate">Entrepreneurship & Innovation</span>
      </span>
    </Link>,
    <Link to="/course/school/9">
      <span className="relative truncate z-10 flex items-center gap-4 py-4 px-4">
        <MdGroup
          className="text-indigo-600 group-hover:text-white flex-shrink-0"
          size={22}
        />{" "}
        <span className="truncate">Social Media & Digital Marketing</span>
      </span>
    </Link>,
    <Link to="/course/school/10">
      <span className="relative z-10 flex items-center gap-4 py-4 px-4">
        <BsBank className="text-indigo-600 group-hover:text-white" size={22} />{" "}
        <span className="truncate">Finance Education</span>
      </span>
    </Link>,
  ];

  const handleCardClick = (link) => {
    navigate(link);
  };

  const getSchoolCourses = async () => {
    try {
      const { data } = await axios.get(
        "https://api.baoiam.com/api/courses/?category=1"
      );
      // console.log(data);
      setSchoolCourses(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    return () => {
      getSchoolCourses();
    };
  }, []);

  return (
    <div className="container mx-auto pt-10 lg:pr-40 lg:pt-10">
      <h1 className="text-3xl mb-8 font-bold inline-block relative">
        Skill Catalog
        <span className="block h-1 w-20 bg-red-500 rounded-full mt-2"></span>
      </h1>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="relative bg-cover bg-center rounded-lg shadow-md h-64 cursor-pointer"
            style={{ backgroundImage: `url(${course.image})` }}
            onClick={() => handleCardClick(course.link)}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex rounded-xl items-center justify-center hover:bg-opacity-30 transition-opacity duration-300">
              <h3 className="text-white text-xl font-semibold">{course.name}</h3>
            </div>
          </div>
        ))}
      </div> */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 px-8 lg:grid-cols-2 gap-x-8 text-left text-[#031864] font-semibold"> */}
      <ul className="grid grid-cols-1 md:grid-cols-2 px-8 lg:grid-cols-2 gap-x-8 text-left text-[#031864] font-semibold">
        {schoolCourses.length > 0
          ? schoolCourses.map((ele, id) => {
              return (
                <li className="my-6 group rounded-lg hover:before:border-indigo-600 relative overflow-hidden border-l-2 border-indigo-600 bg-white px-3 text-indigo-600 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-indigo-600 before:to-indigo-400 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
                  {" "}
                  <Link to={`/course/school/${ele.id}`}>
                    <span className="relative z-10 flex items-center gap-4 py-4 px-4">
                      <FaMicrophone
                        className="text-indigo-600 group-hover:text-white"
                        size={22}
                      />{" "}
                      <span className="truncate">{ele.title}</span>
                    </span>
                  </Link>
                </li>
              );
            })
          : static_data.map((ele, id) => {
              return (
                <li className="my-6 group rounded-lg hover:before:border-indigo-600 relative overflow-hidden border-l-2 border-indigo-600 bg-white px-3 text-indigo-600 shadow-md transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-indigo-600 before:to-indigo-400 before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full">
                  {ele}
                </li>
              );
            })}
      </ul>
    </div>
    // </div>
  );
};

export default SkillCatalog;
