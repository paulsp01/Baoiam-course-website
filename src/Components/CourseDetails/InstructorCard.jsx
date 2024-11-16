import React from 'react';
import { FaStar, FaUsers, FaBook } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const InstructorCard = () => {
    return (
        <div className="w-[45rem] h-80 mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex gap-2 p-4 items-center">
            {/* Left: Profile Image */}
            <div className="size-36 rounded-full overflow-hidden flex-shrink-0">
                <img
                    src="https://i.pravatar.cc/100"
                    alt="Instructor"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right: Details */}
            <div className="ml-4 flex-1">
                <h2 className="text-2xl mb-2 font-semibold text-gray-800">Abhishek pandit
                </h2>
                <p className="text-sm text-gray-500">Advanced Educator</p>

                <div className="flex items-center mt-2 mb-4 space-x-2">
                    <div className="text-sm text-gray-500 flex items-center">
                        <FaStar className="text-yellow-500" />
                        <span className="ml-1 text-xs">75,254 Reviews</span>
                    </div>
                    <div className="text-sm text-gray-500">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">4.4 Rating</span>
                    </div>
                    <FaUsers className="mr-1 text-xs" />

                    <span className='text-xs'>158,557 Students</span>

                    <span className="mx-2">•</span>

                    <FaBook className="mr-1" />

                    <span className='text-xs'>20 Courses</span>
                </div>

                <p className="mt-2 text-gray-700 text-sm">
                    John is a brilliant educator, whose life was spent for Computer Science and love of nature.
                </p>

                <div className="flex space-x-4 mt-4">
                    <a href="#" className="text-gray-500 bg-slate-300 rounded-full size-8 flex items-center justify-center hover:text-gray-800">
                        <FaFacebookF />
                    </a>
                    <a href="#" className="text-gray-500 bg-slate-300 rounded-full size-8 flex items-center justify-center hover:text-gray-800">
                        <FaTwitter />
                    </a>
                    <a href="#" className="text-gray-500 bg-slate-300 rounded-full size-8 flex items-center justify-center hover:text-gray-800">
                        <FaInstagram />
                    </a>
                    <a href="#" className="text-gray-500 bg-slate-300 rounded-full size-8 flex items-center justify-center hover:text-gray-800">
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;
