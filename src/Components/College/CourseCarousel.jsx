// CourseCarousel.js
import React from 'react';
import Slider from 'react-slick';

// Import your icons here, or use react-icons
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const courses = [
    { category: 'Personal Development', count: 1234, icon: '🧠' },
    { category: 'Business', count: 1574, icon: '📈' },
    { category: 'Sales & Marketing', count: 407, icon: '📊' },
    { category: 'Engineering & Construction', count: 772, icon: '🏗️' },
    { category: 'Management', count: 939, icon: '👥' },
];

const NextArrow = ({ onClick }) => (
    <div
        className="absolute top-1/2 right-2 transform -translate-y-1/2 translate-x-1/2 cursor-pointer z-10"
        onClick={onClick}
    >
        <FaChevronRight size={40} className="text-blue-600 bg-white rounded-full aspect-square p-2 shadow-md"/>
    </div>
);

const PrevArrow = ({ onClick }) => (
    <div
        className="absolute top-1/2 left-2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer z-10"
        onClick={onClick}
    >
        <FaChevronLeft size={40} className="text-blue-600 bg-white rounded-full aspect-square p-2 shadow-md"/>
    </div>
);

const CourseCarousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
                Explore Free Online Courses With Certificates & Diplomas
            </h2>
            <Slider {...settings}>
                {courses.map((course, index) => (
                    <div key={index} className="p-2 ">
                        <div className="bg-white rounded-lg flex gap-4 h-32 shadow-md p-6 items-center">
                            <div className="text-4xl mb-4">{course.icon}</div>
                            <div className=''>
                                <h3 className="font-semibold text-lg mb-2">{course.category}</h3>
                                <p className="text-gray-500">{course.count} Courses</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CourseCarousel;
