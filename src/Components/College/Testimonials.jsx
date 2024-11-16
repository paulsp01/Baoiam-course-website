import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Andrew De La Rosa',
            title: 'Alison Graduate',
            quote: 'Alison changed my life professionally.',
            image: 'https://via.placeholder.com/150', // Replace with actual image URL
        },
        {
            id: 1,
            name: 'Andrew De La Rosa',
            title: 'Alison Graduate',
            quote: 'Alison changed my life professionally.',
            image: 'https://via.placeholder.com/150', // Replace with actual image URL
        },
        {
            id: 1,
            name: 'Andrew De La Rosa',
            title: 'Alison Graduate',
            quote: 'Alison changed my life professionally.',
            image: 'https://via.placeholder.com/150', // Replace with actual image URL
        },
        {
            id: 1,
            name: 'Andrew De La Rosa',
            title: 'Alison Graduate',
            quote: 'Alison changed my life professionally.',
            image: 'https://via.placeholder.com/150', // Replace with actual image URL
        },
        {
            id: 1,
            name: 'Andrew De La Rosa',
            title: 'Alison Graduate',
            quote: 'Alison changed my life professionally.',
            image: 'https://via.placeholder.com/150', // Replace with actual image URL
        },
        {
            id: 2,
            name: 'Sunil Sarad',
            title: 'Alison Graduate',
            quote: 'Alison certificates add on to your credibility.',
            image: 'https://via.placeholder.com/150', // Replace with actual image URL
        },
        // Add more testimonials as needed
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2  items-center justify-between p-6 bg-indigo-100">
            <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">
                    Over <span className="text-blue-600">40 million learners</span>
                </h2>
                <p className="text-lg text-gray-600">
                    have used <span className='font-semibold text-indigo-500'>BAOIAM</span> to empower themselves
                </p>
            </div>
            <div className="relative flex-1 w-11/12 mx-a md:w-auto max-w-sm  ">
                {/* Slider Controls */}
                <div
                    className="absolute top-1/2 left-1 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer z-10"
                    onClick={handlePrevClick}
                >
                    <FaChevronLeft size={36} className="text-blue-600 bg-white rounded-full aspect-square p-2 shadow-md" />
                </div>
                <div
                    className="absolute top-1/2 right-1 transform -translate-y-1/2 translate-x-1/2 cursor-pointer z-10"
                    onClick={handleNextClick}
                >
                    <FaChevronRight size={36} className="text-blue-600 bg-white rounded-full aspect-square p-2 shadow-md" />
                </div>

                {/* Slider Container */}
                <div className="overflow-hidden relative w-full ">
                    <div
                        className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="w-full flex-shrink-0 flex items-center justify-center p-4 bg-white rounded-lg shadow-md text-center"
                            >
                                <div className="max-w-sm">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 mx-auto mb-4 rounded-full"
                                    />
                                    <p className="text-lg text-blue-600 mb-2">
                                        {testimonial.quote}
                                    </p>
                                    <h3 className="text-gray-800 font-semibold">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
