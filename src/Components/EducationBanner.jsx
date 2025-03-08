import React from 'react';
import { motion } from 'framer-motion';
import photo3 from "../photo3.png";

const EducationBanner = () => {
  return (
    <motion.div
      className='w-full'
      style={{ backgroundColor: "#f1f1f1" }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }} // Triggers animation on scroll
    >
      <div className="flex flex-col md:flex-row p-6 rounded-lg max-w-4xl mx-auto">
        {/* Left side with image */}
        <div className="relative mb-6 md:mb-0 md:w-1/3">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-navy z-0"></div>
          <div className="relative z-10 p-2">
            <img 
              src={photo3} 
              alt="Education professional" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right side with text and stats */}
        <div className="md:w-2/3 md:pl-8 flex flex-col justify-center">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-navy">WE</h2>
            <h2 className="text-3xl font-bold text-orange-500">ARE SPREADING</h2>
            <div className="w-32 h-1 bg-gray-400 mt-2"></div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Stats with icons */}
            {[
              { count: "108+", label: "Happy School", icon: "M12 2L2 7l10 5 10-5-10-5z M2 17l10 5 10-5M2 12l10 5 10-5" },
              { count: "58030+", label: "Students", icon: "M12 8a5 5 0 1 1 0-10M20 21v-2a7 7 0 0 0-14 0v2" },
              { count: "5360+", label: "Happy Parents", icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 1 0-8M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" },
              { count: "10+", label: "Happy Tutors", icon: "M2 3h20v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3zM8 21h8M12 17v4" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }} // Staggered effect
                viewport={{ once: false, amount: 0.2 }}
              >
                <div className="mr-4 text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d={stat.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">{stat.count}</h3>
                  <p className="text-orange-500 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EducationBanner;
