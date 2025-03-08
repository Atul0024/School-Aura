import React, { useState } from "react";
import { motion } from "framer-motion";

const CampusTourSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(true);

  return (
    <div className="max-w-6xl mx-auto my-8 flex flex-col md:flex-row bg-gray-50 shadow-md">
      {/* Left side - Video section */}
      <div className="md:w-1/2 bg-gray-900 relative">
        {videoLoaded ? (
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Campus Tour Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onError={() => setVideoLoaded(false)}
          ></iframe>
        ) : (
          <div className="flex flex-col items-center justify-center text-white p-8 h-full">
            <div className="w-16 h-16 rounded-full border-2 border-gray-400 flex items-center justify-center mb-4">
              <span className="text-3xl">!</span>
            </div>
            <h3 className="text-xl font-medium mb-2">Video unavailable</h3>
            <p className="text-center text-gray-300">
              This video is no longer available because the YouTube account associated with this video has been terminated.
            </p>
            <div className="absolute bottom-4 right-4">
              <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Right side - Text content with repeated animation */}
      <motion.div
        className="md:w-1/2 p-8"
        style={{ backgroundColor: "#f1f1f1" }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ amount: 0.2 }} // Removed "once: true" so it triggers every time
      >
        <h2 className="text-3xl font-bold text-navy-900">
          VISIT OUR CAMPUS <br />
          WITH <span className="text-orange-500">IMAGE GALLERY</span>
        </h2>
        <div className="w-32 h-1 bg-gray-400 my-4"></div>

        <p className="text-gray-600 mb-8">
          Even slightly believable. If you are going use a passage of Lorem Ipsum need
        </p>

        <h3 className="text-3xl font-bold text-navy-900 mb-8">OR WATCH WITH VIDEO</h3>

        <button className="flex items-center text-orange-500 font-bold hover:text-orange-600 transition">
          <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
          PLAY NOW
        </button>
      </motion.div>
    </div>
  );
};

export default CampusTourSection;
