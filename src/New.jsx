// import React, { useState, useEffect } from 'react';

// const SchoolAuraClone = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('student');
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const testimonials = [
//     {
//       id: 1,
//       content: "SchoolAura has been a game-changer for my studies. The interactive lessons and practice tests have helped me improve my grades significantly.",
//       name: "Rahul Kumar",
//       role: "Student, Class 10"
//     },
//     {
//       id: 2,
//       content: "As a parent, I'm impressed with the comprehensive curriculum and regular progress reports. My child enjoys learning on this platform.",
//       name: "Priya Sharma",
//       role: "Parent"
//     },
//     {
//       id: 3,
//       content: "The teaching tools and resources have made my job easier. I can track student progress and identify areas where they need additional help.",
//       name: "Amit Singh",
//       role: "Teacher"
//     }
//   ];

//   const features = [
//     {
//       id: 1,
//       title: "Interactive Learning",
//       description: "Engaging content with videos, quizzes, and activities",
//       icon: (
//         <svg className="w-12 h-12 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
//         </svg>
//       )
//     },
//     {
//       id: 2,
//       title: "Comprehensive Study Materials",
//       description: "Well-structured content aligned with curriculum",
//       icon: (
//         <svg className="w-12 h-12 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z" />
//         </svg>
//       )
//     },
//     {
//       id: 3,
//       title: "Regular Assessments",
//       description: "Track progress with tests and performance reports",
//       icon: (
//         <svg className="w-12 h-12 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" />
//         </svg>
//       )
//     },
//     {
//       id: 4,
//       title: "Live Classes",
//       description: "Learn directly from expert teachers",
//       icon: (
//         <svg className="w-12 h-12 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
//           <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z" />
//         </svg>
//       )
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % testimonials.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Top Bar */}
//       <div className="bg-white py-2 px-4 flex flex-col sm:flex-row justify-between items-center border-b">
//         <div className="flex items-center space-x-6 mb-2 sm:mb-0">
//           <div className="flex items-center text-gray-700">
//             <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
//               <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//             </svg>
//             <span className="text-sm font-medium">+91-9540349392</span>
//           </div>
//           <div className="flex items-center text-gray-700">
//             <svg className="w-5 h-5 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
//               <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//               <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//             </svg>
//             <span className="text-sm font-medium">contact@schoolaura.com</span>
//           </div>
//         </div>
//         <div className="flex space-x-2">
//           <button className="bg-green-500 text-white px-3 py-1 rounded flex items-center text-sm">
//             <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//               <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
//             </svg>
//             WhatsApp
//           </button>
//           <button className="bg-blue-500 text-white px-3 py-1 rounded flex items-center text-sm">
//             <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//               <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
//             </svg>
//             Mobile App
//           </button>
//           <button className="bg-blue-900 text-white px-3 py-1 rounded text-sm">Login</button>
//           <button className="bg-blue-900 text-white px-3 py-1 rounded text-sm">Registration</button>
//         </div>
//       </div>

//       {/* Navigation */}
//       <div className="bg-orange-500 text-white sticky top-0 z-50">
//         <div className="container mx-auto px-4">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center py-2">
//               <div className="mr-4">
//                 <div className="flex items-center">
//                   <div className="bg-white p-2 rounded-full">
//                     <div className="w-10 h-10 flex items-center justify-center">
//                       <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
//                       </svg>
//                     </div>
//                   </div>
//                   <div className="ml-2">
//                     <div className="text-xl font-bold">SCHOOL</div>
//                     <div className="text-xl font-bold -mt-1">AURA</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Mobile menu button */}
//             <div className="flex md:hidden">
//               <button 
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className="text-white p-2"
//               >
//                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                   <path 
//                     fillRule="evenodd" 
//                     d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
//                     clipRule="evenodd" 
//                   />
//                 </svg>
//               </button>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex space-x-6">
//               <a href="#" className="py-4 px-2 font-medium hover:bg-orange-600 transition duration-300">Home</a>
//               <div className="relative group">
//                 <a href="#" className="py-4 px-2 font-medium hover:bg-orange-600 transition duration-300 flex items-center">
//                   Exam Solution
//                   <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//                 <div className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg w-48 z-10">
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">Entrance Exams</a>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">Competitive Exams</a>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">School Exams</a>
//                 </div>
//               </div>
//               <div className="relative group">
//                 <a href="#" className="py-4 px-2 font-medium hover:bg-orange-600 transition duration-300 flex items-center">
//                   Online Study
//                   <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//                 <div className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg w-48 z-10">
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">Online Courses</a>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">Live Classes</a>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">Study Materials</a>
//                 </div>
//               </div>
//               <div className="relative group">
//                 <a href="#" className="py-4 px-2 font-medium hover:bg-orange-600 transition duration-300 flex items-center">
//                   Tutor Solution
//                   <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </a>
//                 <div className="absolute hidden group-hover:block bg-white text-gray-800 shadow-lg w-48 z-10">
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">Find Tutors</a>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">Become a Tutor</a>
//                   <a href="#" className="block px-4 py-2 hover:bg-gray-100">Tutor Resources</a>
//                 </div>
//               </div>
//               <a href="#" className="py-4 px-2 font-medium hover:bg-orange-600 transition duration-300">Blogs</a>
//               <a href="#" className="py-4 px-2 font-medium hover:bg-orange-600 transition duration-300">Contact Us</a>
//               <a href="#" className="py-4 px-2 font-medium bg-blue-900 hover:bg-blue-800 transition duration-300 flex items-center">
//                 <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                   <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z" />
//                 </svg>
//                 School Management
//               </a>
//             </nav>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-orange-600`}>
//           <a href="#" className="block py-2 px-4 text-sm hover:bg-orange-700 transition duration-300">Home</a>
//           <div className="relative">
//             <button onClick={() => document.getElementById('mobileExamMenu').classList.toggle('hidden')} className="w-full text-left py-2 px-4 text-sm hover:bg-orange-700 transition duration-300 flex items-center justify-between">
//               Exam Solution
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
//             <div id="mobileExamMenu" className="hidden bg-orange-700 pl-4">
//               <a href="#" className="block py-2 px-4 text-sm hover:bg-orange-800 transition duration-300">Entrance Exams</a>
//               <a href="#" className="block py-2 px-4 text-sm hover:bg-orange-800 transition duration-300">Competitive Exams</a>
//               <a href="#" className="block py-2 px-4 text-sm hover:bg-orange-800 transition duration-300">School Exams</a>
//             </div>
//           </div>
//           <div className="relative">
//             <button onClick={() => document.getElementById('mobileStudyMenu').classList.toggle('hidden')} className="w-full text-left py-2 px-4 text-sm hover:bg-orange-700 transition duration-300 flex items-center justify-between">
//               Online Study
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
//             <div id="mobileStudyMenu" className="hidden bg-orange-700 pl-4">
//               <a href="#" className="block py-2 px-4 text-sm hover:bg-orange-800 transition duration-300">Online Courses</a>
//               <a href="#" className="block py-2 px-4 text-sm hover:bg-orange-800 transition duration-300">Live Classes</a>
//               <a href="#" className="block py-2 px-4 text-sm hover:bg-orange-800 transition duration-300">Study Materials</a>
//             </div>
//           </div>
//           <div className="relative">
//             <button onClick={() => document.getElementById('mobileTutorMenu').classList.toggle('hidden')} className="w-full text-left py-2 px-4 text-sm hover:bg-orange-700 transition duration-300 flex items-center justify-between">
//               Tutor Solution
//               <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//             </button>
//             <div id="mobileTutorMenu" className="hidden bg-orange-700 pl-4">
//               <a href="#" className="block py-2 px-4 text-sm hover:bg-orange-800 transition duration-300">Find Tutors</a>
//               <a href="#" className="block py-2 px-4 text-sm hover:bg-orange-800 transition duration-300">Become a Tutor</a>
//               <a href="#" className="block py-2 px-4 text-sm hover:bg-orange-800 transition duration-300">Tutor Resources</a>
//             </div>
//           </div>
//           <a href="#" className="block py-2 px-4 text-sm hover:bg-orange-700 transition duration-300">Blogs</a>
//           <a href="#" className="block py-2 px-4 text-sm hover:bg-orange-700 transition duration-300">Contact Us</a>
//           <a href="#" className="block py-2 px-4 text-sm bg-blue-900 hover:bg-blue-800 transition duration-300">School Management</a>
//         </div>
//       </div>

//       {/* Hero Banner */}
//       <div className="bg-orange-500 py-8 px-4 relative overflow-hidden">
//         <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 rounded-full bg-orange-400 opacity-50"></div>
//         <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 rounded-full bg-orange-400 opacity-50"></div>
        
//         <div className="container mx-auto relative z-10">
//           <div className="md:flex items-center">
//             <div className="md:w-1/2 mb-8 md:mb-0">
//               <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 leading-tight animate-fade-in">BE A SMART STUDENT</h1>
//               <p className="text-white text-xl md:text-2xl mb-8">SchoolAura Is A Smart Education Platform</p>
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
//                 {/* Entrance Solution */}
//                 <div className="bg-white rounded-lg p-5 text-center shadow-lg transform transition duration-300 hover:scale-105">
//                   <h3 className="text-gray-800 font-bold text-lg mb-4">ENTRANCE Solution</h3>
//                   <button className="w-full bg-orange-500 text-white py-2 rounded-full mb-2 hover:bg-orange-600 transition duration-300">Exam</button>
//                   <button className="w-full bg-orange-500 text-white py-2 rounded-full mb-4 hover:bg-orange-600 transition duration-300">Courses</button>
//                   <a href="#" className="text-orange-500 font-medium flex items-center justify-center hover:text-orange-600 transition duration-300">
//                     READ MORE
//                     <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </a>
//                 </div>
                
//                 {/* Competitive Solution */}
//                 <div className="bg-white rounded-lg p-5 text-center shadow-lg transform transition duration-300 hover:scale-105">
//                   <h3 className="text-gray-800 font-bold text-lg mb-4">COMPETITIVE Solution</h3>
//                   <button className="w-full bg-orange-500 text-white py-2 rounded-full mb-2 hover:bg-orange-600 transition duration-300">Exam</button>
//                   <button className="w-full bg-orange-500 text-white py-2 rounded-full mb-4 hover:bg-orange-600 transition duration-300">Courses</button>
//                   <a href="#" className="text-orange-500 font-medium flex items-center justify-center hover:text-orange-600 transition duration-300">
//                     READ MORE
//                     <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
//                       <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
            
//             <div className="md:w-1/2 md:pl-12">
//               {/* Login Form */}
//               <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
//                 <div className="flex justify-center mb-6">
//                   <img src="/api/placeholder/80/80" alt="Student Avatar" className="rounded-full" />
//                 </div>
                
//                 <div className="flex mb-4 border-b">
//                   <button 
//                     className={`w-1/2 pb-4 text-center font-medium ${activeTab === 'student' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500'}`}
//                     onClick={() => setActiveTab('student')}
//                   >
//                     Student Login
//                   </button>
//                   <button 
//                     className={`w-1/2 pb-4 text-center font-medium ${activeTab === 'parents' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-500'}`}
//                     onClick={() => setActiveTab('parents')}
//                   >
//                     Parents Login
//                   </button>
//                 </div>
                
//                 <form>
//                   <div className="mb-4">
//                     <input 
//                       type="text" 
//                       placeholder="Mobile Number or Key" 
//                       className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500" 
//                     />
//                   </div>
//                   <div className="mb-6 relative">
//                     <input 
//                       type="password" 
//                       placeholder="Password" 
//                       className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500" 
//                     />
//                     <button type="button" className="absolute right-3 top-2 text-gray-500">
//                       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                         <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
//                         <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
//                       </svg>
//                     </button>
//                   </div>
//                   <button 
//                     type="submit" 
//                     className="w-full bg-blue-900 text-white py-2 rounded font-medium hover:bg-blue-800 transition duration-300"
//                   >
//                     Login
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Key Features Section */}
//       <div className="py-16 px-4 bg-gray-50">
//         <div className="container mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Why Choose SchoolAura?</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">Our platform offers comprehensive educational solutions designed to help students excel in their academic journey.</p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {features.map((feature) => (
//               <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md text-center transform transition duration-300 hover:scale-105 hover:shadow-lg">
//                 <div className="flex justify-center mb-4">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//        {/* Study Packages */}
//        <div className="py-16 px-4 bg-white">
//         <div className="container mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-