import React from 'react';
import phone from '../phone.png';

const SchoolAuraMobileApp = () => {
  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Left side - Phone image with app interface */}
          <img src={phone} alt='phone' width={"30%"}/>
          
          {/* Right side - Content */}
          <div className="w-full md:w-1/2 lg:w-3/5 mt-8 md:mt-0">
            <h1 className="text-4xl font-bold mb-4">
              Easy to Access with <span className="text-orange-500">Mobile APP</span>
            </h1>
            
            <p className="mb-4 text-gray-700">
              If you're looking for easily accessible resources for your classroom, then you're in the right place. Online learning with the Android app is very easy to access. That's why we've hand-curated the School Aura free app and website. Easy to use and learn!
            </p>
            
            <p className="mb-6 text-gray-700">
              To learn online, you need to be reasonably comfortable with Smart Mobile Phone, Tab, Laptops, and the internet. The advantage of learning online via an android app is that you can pause the video/audio whenever you need to take notes or simply absorb what has been said. Another fantastic feature of online learning is that you can re-listen to different parts as needed, which is something you can't do in a live lecture!
            </p>
            
            <div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition duration-300">
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolAuraMobileApp;