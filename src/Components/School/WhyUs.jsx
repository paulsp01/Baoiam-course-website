import React from "react";
import { FiCheckCircle, FiTrendingUp, FiClock } from "react-icons/fi";
import { FaHandsHelping } from "react-icons/fa";

const WhyUs = () => {
  return (
    <section className="py-16 dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Why we stand out?
          </h2>
          <p className="mt-4 text-lg ">
            We furnish exceptional services with a superior standard quality.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div className="bg-indigo-600 p-4 rounded-full mb-4">
              <FiCheckCircle className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold">Quality</h3>
            <p className="mt-2 text-center">
              We provide the unmatched quality, our work speaks for itself.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-indigo-600 p-4 rounded-full mb-4">
              <FiTrendingUp className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold ">Innovation</h3>
            <p className="mt-2 text-center">
              Our projects are fueled by latest technology and groundbreaking
              Innovation.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-indigo-600 p-4 rounded-full mb-4">
              <FiClock className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold">Reliability</h3>
            <p className="mt-2 text-center">
              Expect on time delivery from us, every single time.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-indigo-600 p-4 rounded-full mb-4">
              <FaHandsHelping className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold">Support</h3>
            <p className="mt-2 text-center">
              We're always on hand, ready to assist at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
