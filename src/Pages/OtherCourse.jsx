import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CollegeCourseData, OtherCourseData, School } from "../Data";
import { CourseDesc2, CourseOverview } from "../assets/assets";
import {
  FaArrowRight,
  FaArrowRightLong,
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
  FaDownLong,
  FaGraduationCap,
} from "react-icons/fa6";
import { MdCheck } from "react-icons/md";

import * as MDIcons from "react-icons/md";
import * as FCIcons from "react-icons/fc";
import * as GRIcons from "react-icons/gr";
import * as SLIcons from "react-icons/sl";
import * as GOIcons from "react-icons/go";
import * as PiIcons from "react-icons/pi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const OtherCourse = () => {
  const planRef = useRef();
  const navigate = useNavigate();
  const enrollNowScroll = () => {
    planRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const { id } = useParams();
  const course = OtherCourseData.find((cate) =>
    cate.subCate.find((subCate) => parseInt(subCate.id) === parseInt(id))
  );
  console.log("other course:", course);
  const subCourse = course.subCate.find(
    (subCate) => subCate.id === parseInt(id)
  );
  //   const [subCourse, setsubCourse] = useState([]);
  console.log("sub other course:", subCourse);
  const [courseDetails, setCourseDetails] = useState({});
  const getCourseDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://api.baoiam.com/api/courses?subcategory=${id}`
      );
      console.log(data);
      setCourseDetails(data);
    } catch (error) {
      console.log(error.stack);
    }
  };
  // console.log(subCourse?);

  const [swiper, setSwiper] = useState(null);

  const handleNextClick = () => swiper.slideNext();
  const handlePrevClick = () => swiper.slidePrev();

  // For? maping icons dynamically
  const highlightIcons = (icon) => {
    if (icon.startsWith("Md")) {
      return MDIcons[icon];
    } else if (icon.startsWith("Fc")) {
      return FCIcons[icon];
    } else if (icon.startsWith("Gr")) {
      return GRIcons[icon];
    } else if (icon.startsWith("Sl")) {
      return SLIcons[icon];
    } else if (icon.startsWith("Go")) {
      return GOIcons[icon];
    } else if (icon.startsWith("Pi")) {
      return PiIcons[icon];
    } else {
      return "not found";
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getCourseDetails();
    return () => {};
  }, [id]);

  return (
    <div>
      {/* Banner */}
      {/* <div className="lg:w-full lg:h-[68vh] xl:h-[80vh]">
        <img
          src={subCourse?.banner}
          alt={`${subCourse?.course} Banner`}
          className="w-full h-full object-cover object-top"
        />
      </div> */}

      {/* Course Description */}
      <div className="flex items-center flex-col md:flex-row gap-12 md:gap-4 lg:gap-24 justify-between px-4 lg:px-24 my-12">
        <div className="flex flex-col gap-4">
          <h3 className="text-[1.7rem] lg:text-4xl font-bold text-neutral-600 dark:text-white">
            {Object.keys(courseDetails).length == 0
              ? subCourse?.course
              : courseDetails.title}
          </h3>
          {Object.keys(courseDetails).length == 0 ? (
            subCourse?.desc
          ) : (
            // subCourse?.desc?.map((d, i) => {
            //   return (
            //     <p className="text-[0.8rem] lg:text-base" key={i}>
            //       {d}
            //     </p>
            //   );
            // })
            <p className="text-[0.8rem] lg:text-base">
              {courseDetails.description}
            </p>
          )}

          <div className="flex flex-col md:flex-row lg:flex-row  gap-2">
            <button
              onClick={enrollNowScroll}
              className="pl-4 mr-6 pr-6 py-2 border text-sm lg:text-base border-orange-400 text-orange-400 font-semibold w-fit flex items-center gap-4 group hover:bg-orange-400 transition duration-300 hover:text-white"
            >
              Enroll Now{" "}
              <FaArrowRight size={22} className="group-hover:animate-pulse" />{" "}
            </button>
            <button className="pl-4 pr-6 py-2 border text-sm lg:text-base border-orange-400 text-orange-400 font-semibold w-fit flex items-center gap-4 group hover:bg-orange-400 transition duration-300 hover:text-white">
              Download Brochure{" "}
              {/* <FaDownLong size={22} className="group-hover:animate-pulse" />{" "} */}
              <FaDownload size={18} />
            </button>
          </div>
        </div>

        <img
          src={CourseDesc2}
          alt=""
          className="w-72 h-72 lg:w-full lg:h-96 rounded-ss-[7rem] rounded-ee-[7rem] shadow-2xl shadow-black"
        />
      </div>

      {/* Course Overview */}
      <div className="px-8 lg:px-24 my-12 py-12 flex justify-between flex-col-reverse md:flex-row gap-12 md:gap-8 lg:gap-24 w-full">
        <div className="w-full md:w-[40%]">
          <img
            src={CourseOverview}
            alt=""
            className="w-full md:w-72 h-72 lg:w-full lg:h-96 object-cover shadow-[-15px_15px_#ea580c] lg:shadow-[-20px_20px_#ea580c]"
          />
        </div>
        <div className="w-full md:w-[60%]">
          <h4 className="text-[1.6rem] lg:text-4xl font-semibold mb-2 lg:mt-12 lg:mb-4">
            Course{" "}
            <span className="border-b border-orange-500 text-orange-500">
              Overview
            </span>
          </h4>

          <ul className="list-inside list-disc marker:text-orange-600 marker:text-md flex flex-col gap-2 w-full">
            {!courseDetails.program_overview
              ? subCourse?.overview?.map((v, i) => {
                  return (
                    <li
                      key={i}
                      className="font-medium text-[0.8rem] lg:text-base"
                    >
                      <span className="font-bold">{v.split(":")[0]}:</span>
                      {v.split(":")[1]}
                    </li>
                  );
                })
              : courseDetails.program_overview.split(".").map((v, i) => {
                  return (
                    <li
                      key={i}
                      className="font-medium text-[0.8rem] lg:text-base"
                    >
                      {v + "."}
                    </li>
                  );
                })}
          </ul>
        </div>
      </div>

      {/* Course Curriculum */}
      <div className="w-full px-8 lg:px-24 my-12 md:my-20 h-full flex flex-col items-center">
        <h4 className="text-[2rem] lg:text-4xl font-semibold text-neutral-600 mb-2 lg:mb-4 dark:text-white">
          Course{" "}
          <span className="text-orange-500 border-b border-orange-500">
            Curriculum
          </span>
        </h4>

        <ul className="list-inside list-disc marker:text-orange-500 marker:text-md">
          {subCourse?.curriculum?.map((c, i) => {
            return c.weekTitle ? (
              <details className="mb-2">
                <summary className="font-semibold">{c.weekTitle}</summary>
                <ul className="list-disc pl-10 max-w-[380px]">
                  {c.topics && c.topics.map((topic, id) => <li>{topic}</li>)}
                </ul>
              </details>
            ) : (
              <ul className="list-disc ml-5 font-semibold text-[#F97316]">
                {c.topics && c.topics.map((topic, id) => <li>{topic}</li>)}
              </ul>
            );
          })}
        </ul>
      </div>

      {/* Course Highlights */}
      <div className="py-8 px-8 lg:px-24 w-full h-full">
        <h4 className="text-4xl font-semibold mb-8">
          Course{" "}
          <span className="border-b text-orange-500 border-orange-500">
            Highlights
          </span>
        </h4>

        <div className="flex items-center justify-center flex-wrap gap-x-6 gap-y-4 text-black">
          {subCourse?.highlights?.map((h, i) => {
            return (
              <div
                key={i}
                className="bg-white group hover:scale-105 overflow-hidden lg:h-[230px] justify-center shadow-2xl px-4 py-8 md:h-[210px] rounded-xl flex flex-col gap-4 w-[21rem] lg:w-64"
              >
                <span className="text-4xl drop-shadow-2xl group-hover:text-orange-600 group-hover:shadow-orange-600 group-hover:animate-bounce transition-all ease-in-out">
                  {React.createElement(highlightIcons(h.icon))}
                </span>
                <p className="tracking-tighter">
                  <span className="text-2xl font-semibold leading-tight tracking-tighter">
                    {h.head}
                  </span>{" "}
                  <br /> <span>{h.desc}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Join we us */}
      <div
        id="plans"
        ref={planRef}
        className="my-12 px-8 lg:px-24 w-full h-full"
      >
        <div className="bg-white dark:bg-[#080529] py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <h2 className="mb-4 text-center text-[1.8rem] font-bold text-gray-800 dark:text-white md:mb-8 lg:text-4xl xl:mb-12">
              Join With Us Find the{" "}
              <span className="text-orange-500 border-b border-orange-500">
                Right Course
              </span>
            </h2>

            <div className="mb-6 flex justify-center flex-wrap gap-10">
              {subCourse?.plans?.map((p, i) => {
                return (
                  <div
                    key={i}
                    className={`flex  flex-col  rounded-lg border ${
                      p.name === "Premium" ? "border-orange-500 relative" : ""
                    } p-4 pt-6`}
                  >
                    <div className="mb-12">
                      {p.name === "Premium" ? (
                        <>
                          <div className="absolute inset-x-0 -top-3 flex justify-center">
                            <span className="flex h-6 items-center justify-center rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                              most popular
                            </span>
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      <div className="mb-2 text-center text-2xl font-bold text-gray-800 dark:text-white">
                        {p.name}
                      </div>

                      <div className="space-y-2">
                        {p?.courseItems?.map((item, index) => {
                          return (
                            <div key={index} className="flex gap-2">
                              <MdCheck size={22} className="text-orange-500" />
                              <span className="text-gray-600 dark:text-white">
                                {item}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-auto flex flex-col gap-8">
                      <div className="flex items-end justify-center gap-1">
                        <span className="self-start text-gray-600 dark:text-white">
                          ₹
                        </span>
                        <span className="text-4xl font-bold text-gray-800 dark:text-white">
                          {p.price}
                        </span>
                        <span className="text-gray-500 dark:text-white">
                          /Full Course
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          if (localStorage.getItem("access_token"))
                            navigate(
                              `/checkout/other/${id}/${
                                p.name == "Premium" ? "Premium" : "Plus"
                              }`
                            );
                          else navigate("/login");
                        }}
                        className={`block  rounded-lg ${
                          p.name === "Premium"
                            ? "bg-orange-500 text-white"
                            : "bg-gray-500"
                        } px-8 py-3 text-center text-sm font-semibold text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 hover:text-gray-500 focus-visible:ring active:text-gray-700 md:text-base`}
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center text-sm text-gray-500 dark:text-white sm:text-base">
              Need help deciding?{" "}
              <Link
                to={"/"}
                className="text-gray-600 dark:text-orange-500 underline transition duration-100 hover:text-orange-600 active:text-orange-400"
              >
                Get in touch
              </Link>
              .
            </div>
          </div>
        </div>
      </div>

      {/* Emi & Placement */}
      <div className="w-full h-auto flex justify-center items-center relative">
        <div className="relative xs:w-[300px] w-[350px] lg:w-[530px] mx-auto">
          <img
            className="z-0 opacity-40 absolute inset-0 w-full h-full object-cover"
            src="https://images.stockcake.com/public/1/a/3/1a34b575-b411-49cf-8943-922dcb8fc637_large/payment-in-progress-stockcake.jpg"
            alt="EMI background"
          />
          <div className="relative z-20 w-full text-white p-4 flex justify-center flex-col text-center">
            <p className="font-semibold text-black text-[1.2rem] lg:text-2xl mb-2 dark:text-white">
              Easy EMI
            </p>
            <p className="text-black dark:text-white mb-2 text-sm lg:text-base">
              Easy monthly payment options with our emi facilities
            </p>
            <ul className='list-["✓"] list-inside marker:text-green-500 marker:text-xl text-black dark:text-white'>
              <li className="text-sm lg:text-base">
                No upfront payment required
              </li>
              <li className="text-sm lg:text-base">
                Fixed monthly installments
              </li>
              <li className="text-sm lg:text-base">
                Flexible repayment options
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Amazing Offer */}
      <div className="py-8 px-8 lg:px-24 my-20 w-full h-full text-white bg-[#F6A611] dark:bg-gray-700 text-center">
        <h4 className="text-[2rem] lg:text-4xl font-semibold mb-2 lg:mb-4">
          Amazing <span className="border-b">Career</span>
        </h4>
        <p className="text-sm lg:text-lg">
          Grab these exclusive offers available only once a year.
        </p>

        <div className="flex items-center flex-col md:flex-row gap-4 justify-center w-full mt-8">
          <div className="bg-white w-80 rounded-3xl px-6 py-4 shadow-xl dark:bg-gray-500 ">
            <p className="text-center font-semibold text-neutral-500 text-[1rem] dark:text-white lg:text-xl mb-2">
              BUY 2 COURSES & GET
            </p>
            <p className="mb-2 text-2xl font-bold text-orange-500">15% OFF</p>
          </div>
          <div className="bg-white w-80 rounded-3xl px-6 py-4 shadow-xl dark:bg-gray-500 ">
            <p className="text-center font-semibold text-neutral-500 text-[1rem] dark:text-white lg:text-xl mb-2">
              BUY 3 COURSES & GET
            </p>
            <p className="mb-2 text-2xl font-bold text-orange-500">20% OFF</p>
          </div>
          <div className="bg-white w-80 rounded-3xl px-6 py-4 shadow-xl dark:bg-gray-500 ">
            <p className="text-center font-semibold text-neutral-500 text-[1rem] dark:text-white lg:text-xl mb-2">
              BUY 4 COURSES & GET
            </p>
            <p className="mb-2 text-2xl font-bold text-orange-500">25% OFF</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherCourse;
