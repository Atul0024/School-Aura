import React from "react";
import { motion } from "framer-motion";
import photo2 from "../photo2.png";

const OnlineEducationBenefits = () => {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="flex flex-col md:flex-row">
        {/* Left Content - Text */}
        <motion.div
          className="w-full md:w-3/5 pr-0 md:pr-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">Benefits of</h1>
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">Online Education</h1>

          <div className="w-24 h-1 bg-gray-300 mb-8"></div>

          <p className="text-gray-700 mb-8">
            Online Education increases engagement by adding a human element. Studying in the comfort of
            your own home is convenient, but there are various other advantages of online study.
          </p>

          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Time and Location Flexibility</li>
            <li>Find Unlimited Course Category</li>
            <li>No Need to Carry Books</li>
            <li>Get Access in any mobile, Tab, Laptop with your credential</li>
            <li>Use your time when you are traveling, Outing and free time</li>
            <li>Exam Practice before exam</li>
          </ul>
        </motion.div>

        {/* Right Content - Image */}
        <motion.div
          className="w-full md:w-2/5 mt-8 md:mt-0 flex justify-center items-end"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="relative">
            <div className="bg-gray-100 rounded-full w-72 h-72 absolute -z-10 top-4"></div>
            <img src={photo2} alt="Happy student giving thumbs up" className="relative z-10" width={"80%"} />
          </div>
        </motion.div>
      </div>

      {/* Statistics Bar (Blue Background Section with Pop-Up Effect) */}
      <motion.div
        className="bg-indigo-900 text-white py-8 px-4 rounded-lg mt-12"
        initial={{ opacity: 0, scale: 0.8 }} // Start with 80% size and invisible
        whileInView={{ opacity: 1, scale: 1 }} // Scale up to 100% and fade in
        transition={{ duration: 2.5, ease: "easeOut" }} // Smooth easing for pop-up effect
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold">10000+</h2>
            <p className="text-xl text-orange-500 font-medium">Total Exams</p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold">600+</h2>
            <p className="text-xl text-orange-500 font-medium">Courses</p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold">3000+</h2>
            <p className="text-xl text-orange-500 font-medium">Success Stories</p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold">4.5/5</h2>
            <p className="text-xl text-orange-500 font-medium">Rating</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OnlineEducationBenefits;
