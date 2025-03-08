import React, { useState, useEffect } from 'react';

const Header = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showContent, setShowContent] = useState(false);

    // Effect to show the content after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 3000);
        
        // Clean up the timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative">
            {/* Background with the orange color */}
            <div className="bg-orange-500 min-h-screen relative overflow-hidden">
                {/* Pattern overlay - education icons */}
                <div className="absolute inset-0 opacity-10">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                transform: `rotate(${Math.random() * 30}deg)`,
                            }}
                        >
                            {i % 3 === 0 ? '🎓' : i % 3 === 1 ? '📚' : '🔬'}
                        </div>
                    ))}
                </div>

                {/* Top Navbar */}
                <div className="bg-orange-500 text-white py-4">
                    <div className="container mx-auto px-4 flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex items-center">
                            <div className="bg-white rounded-full p-2 mr-2">
                                <div className="bg-orange-500 rounded-full p-1">
                                    <span className="text-white font-bold">👓</span>
                                </div>
                            </div>
                            <div className="font-bold text-xl">
                                <span className="text-white">SCHOOL</span>
                                <span className="text-black">AURA</span>
                            </div>
                        </div>

                        {/* Navigation Menu */}
                        <div className="hidden md:flex items-center space-x-6">
                            <a href="#" className="text-white hover:text-gray-200">Home</a>
                            <a href="#" className="text-white hover:text-gray-200">Exam Solution</a>
                            <a href="#" className="text-white hover:text-gray-200">Online Study</a>
                            <a href="#" className="text-white hover:text-gray-200">Tutor Solution</a>
                            <a href="#" className="text-white hover:text-gray-200">Blogs</a>
                            <a href="#" className="text-white hover:text-gray-200">Contact Us</a>
                            <a href="#" className="bg-blue-900 text-white px-4 py-2 rounded flex items-center">
                                <span className="mr-2">🏛️</span> School Management
                            </a>
                        </div>
                    </div>
                </div>

                {/* Main Hero Section with Animation */}
                <div className="container mx-auto px-4 pt-8 pb-32">
                    <div 
                        className={`flex flex-col md:flex-row transition-all duration-500 transform ${
                            showContent 
                                ? "opacity-100 scale-100" 
                                : "opacity-0 scale-90"
                        }`}
                    >
                        {/* Left Section with Student Illustration */}
                        <div className="md:w-2/3 relative">
                            {/* Main Heading */}
                            <div className="text-white pt-12 ml-16">
                                <h1 className="text-6xl font-bold">
                                    BE A <span className="text-black">SMART STUDENT</span>
                                </h1>
                                <p className="text-2xl mt-2">SchoolAura Is A Smart Education Platform</p>
                            </div>

                            {/* Solution Boxes */}
                            <div className="flex flex-wrap mt-12 gap-3 ml-10">
                                {/* Image before the first box */}
                                <img
                                    src="https://www.schoolaura.com/Content/new_assets/images/header/header-girl-icon.png"
                                    alt="Header Girl Icon"
                                    className="w-28 h-60"
                                />

                                {/* Solution Boxes */}
                                {["Entrance", "Competitive", "KG - 12TH SCHOOL", "Tutor"].map((title, index) => (
                                    <div 
                                        key={index} 
                                        className="bg-white rounded-lg p-4 shadow-lg w-44 h-56 flex flex-col justify-between"
                                        style={{
                                            animation: showContent ? `popIn 0.5s ease ${0.2 * (index + 1)}s forwards` : 'none',
                                            opacity: 0,
                                            transform: 'scale(0.8)'
                                        }}
                                    >
                                        <h3 className="text-center text-lg font-semibold mb-4">{title} Solution</h3>

                                        {/* Exam & Courses Buttons */}
                                        <div className="flex flex-col gap-2">
                                            <a href="#" className="block bg-orange-500 text-white text-center py-2 rounded-xl text-sm">
                                                Exam
                                            </a>
                                            <a href="#" className="block bg-orange-500 text-white text-center py-2 rounded-xl text-sm">
                                                Courses
                                            </a>
                                        </div>

                                        {/* Read More */}
                                        <div className="text-center mt-4">
                                            <a href="#" className="inline-flex items-center text-gray-700 text-sm font-medium">
                                                READ MORE
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Section with Login Form */}
                        <div className="md:w-1/3 md:mt-0">
                            <div 
                                className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto mt-12"
                                style={{
                                    animation: showContent ? 'popIn 0.5s ease 0.6s forwards' : 'none',
                                    opacity: 0,
                                    transform: 'scale(0.8)'
                                }}
                            >
                                <div className="flex justify-center -mt-16 mb-4">
                                    <div className="bg-pink-600 rounded-full p-6">
                                        <span className="text-4xl">👓</span>
                                    </div>
                                </div>

                                {/* Login Tabs */}
                                <div className="flex border-b mb-6">
                                    <button className="flex-1 py-2 font-medium text-green-600 border-b-2 border-green-600">
                                        Student Login
                                    </button>
                                    <button className="flex-1 py-2 font-medium text-gray-500">
                                        Parents Login
                                    </button>
                                </div>

                                {/* Login Form */}
                                <form>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2">Mobile Number or Key</label>
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-gray-700 mb-2">Student Password</label>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-orange-500"
                                            />
                                            <button
                                                type="button"
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ?
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478..." />
                                                    </svg> :
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m0 0h6m-6 0H9m0 0H9" />
                                                    </svg>
                                                }
                                            </button>
                                        </div>
                                    </div>

                                    <button className="w-full bg-orange-500 text-white py-2 rounded">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add CSS for the pop-in animation */}
            <style jsx>{`
                @keyframes popIn {
                    0% {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    70% {
                        opacity: 1;
                        transform: scale(1.05);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            `}</style>
        </div>
    );
};

export default Header;