import React, { useState, useEffect, useRef } from 'react';

const OnlineStudySection = () => {
    const [showImage, setShowImage] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const { top } = sectionRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (top < windowHeight * 0.75) {
                    setShowImage(true);
                } else {
                    setShowImage(false); // Hide again when scrolling up
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={sectionRef} className="container mx-auto py-16 px-4 w-[80%] relative">
            <div className="flex flex-col md:flex-row items-center">
                {/* Left Section with Dark Panel and Text */}
                <div 
                    className="md:w-1/3 relative mb-8 md:mb-0 bg-cover bg-center rounded-lg shadow-lg overflow-hidden" 
                    style={{ backgroundImage: "url('https://www.schoolaura.com/Content/new_assets/images/banner-2/Clip.png')" }}
                >
                    {/* Overlay for Royal Blue Shade */}
                    <div className="absolute inset-0 bg-[#341d78] opacity-50"></div>

                    <div className="relative z-10 bg-navy-900 text-white p-8 rounded-lg shadow-lg bg-opacity-80">
                        <div className="py-12">
                            <p className="text-2xl font-semibold mb-4">
                                <span className="inline-block">- 256 Courses</span>
                            </p>
                            <p className="text-2xl font-semibold mb-4">
                                <span className="inline-block">- Expert Teachers</span>
                            </p>
                            <p className="text-2xl font-semibold">
                                <span className="inline-block">- Online Education</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Section with Educational Patterns */}
                <div className="md:w-2/3 md:pl-32 pt-32 md:pt-0 relative">
                    {/* Background Educational Patterns */}
                    <div className="absolute inset-0 z-0 opacity-10">
                        {['📝', '📚', '🔍', '📐', '✏️', '📓', '🎓', '🔖'].map((icon, i) => (
                            <div
                                key={i}
                                className="absolute text-2xl text-gray-300"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    transform: `rotate(${Math.random() * 30}deg)`,
                                }}
                            >
                                {icon}
                            </div>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Why Online Study With SchoolAura
                        </h2>

                        <p className="text-gray-700 mb-6">
                            The world is changing for the better. Because of the advancement of technology, geek
                            minds have grown tired of doing more work, and carrying books, notebooks, and how
                            much to buy books?
                        </p>

                        <p className="mb-2">
                            <span className="font-bold text-gray-900">Solution:</span> Now you can find a simple solution with SchoolAura. These days, almost
                            everyone has a smartphone, tablet, or laptop. So just open your device and start your
                            study from anywhere anytime—whether you are traveling, sitting in the park, etc.
                        </p>

                        <p className="mt-6 text-gray-700">
                            Now, use your time wisely and gain knowledge every second. Use your device for the
                            right things—not to waste your time.
                        </p>
                    </div>
                </div>
            </div>

            {/* ✅ Image Positioned Closer to the Container */}
            <div className="w-full mt-1 flex justify-center overflow-hidden">
                <img
                    src="https://www.schoolaura.com/Content/new_assets/images/banner-2/Layer-20.png"
                    alt="Students studying together"
                    className={`w-full max-w-4xl transition-transform duration-[1500ms] ease-out transform ${showImage ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                />
            </div>
        </div>
    );
};

export default OnlineStudySection;
