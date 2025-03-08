import React, { useState, useEffect, useRef } from 'react';

const EducationalProgramsMenu = () => {
  const [activeCategory, setActiveCategory] = useState('School');
  const [showSection, setShowSection] = useState(false);
  const [showData, setShowData] = useState(true); // Controls delayed data appearance
  const sectionRef = useRef(null);

  const categories = [
    { id: 'School', name: 'School' },
    { id: 'Competitive', name: 'Competitive' },
    { id: 'Entrance', name: 'Entrance' },
    { id: 'Tutors', name: 'Tutors' },
  ];

  // Shared data across all categories
  const sharedClassData = [
    { id: '11', name: '11th Class', count: '182+', icon: 'N' },
    { id: '12', name: '12th Class', count: '178+', icon: 'N' },
    { id: '6', name: '6th Class', count: '151+', icon: 'N' },
    { id: '7', name: '7th Class', count: '150+', icon: 'N' },
    { id: '10', name: '10th Class', count: '150+', icon: 'N' },
    { id: '9', name: '9th Class', count: '141+', icon: 'N' },
    { id: '8', name: '8th Class', count: '135+', icon: 'N' },
    { id: '5', name: '5th Class', count: '87+', icon: 'N' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, bottom } = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight * 0.75 && bottom > 0) {
          setShowSection(true);
        } else {
          setShowSection(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCategoryChange = (category) => {
    setShowData(false); // Hide data immediately
    setActiveCategory(category);

    // Show data again after 1 second (1000ms)
    setTimeout(() => {
      setShowData(true);
    }, 1000);
  };

  return (
    <div ref={sectionRef} className="container mx-auto py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading Section */}
        <div className={`mb-6 transition-transform duration-[1500ms] ease-out transform ${showSection ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-900">PROVIDE</h2>
          <h2 className="text-4xl font-bold text-orange-500">BEST EDUCATIONAL</h2>
        </div>

        {/* Menu Card with Shadow */}
        <div className={`bg-white rounded shadow-lg border border-gray-200 relative transition-transform duration-[3500ms] ease-out transform ${showSection ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
          {/* Orange Accent Bar */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>

          <div className="flex flex-col md:flex-row">
            {/* Left Column - Categories */}
            <div className="w-full md:w-48 border-r border-gray-200">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`py-6 px-4 cursor-pointer border-b border-gray-200 transition duration-200 ${
                    activeCategory === category.id 
                      ? 'bg-white border-l-4 border-l-orange-500' 
                      : 'bg-gray-100 hover:bg-gray-50'
                  }`}
                  onClick={() => handleCategoryChange(category.id)}
                >
                  <p className={`font-medium text-lg ${
                    activeCategory === category.id ? 'text-orange-500' : 'text-gray-700'
                  }`}>
                    {category.name}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Column - Class Items Grid */}
            <div className="flex-1 p-4">
              {showData ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {sharedClassData.map((item) => (
                    <div
                      key={item.id}
                      className={`flex items-center space-x-2 cursor-pointer transition-opacity duration-1000 ease-in-out ${showData ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center rounded">
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                      <div>
                        <p className="text-orange-500 font-medium">{item.name}</p>
                        <p className="text-gray-600 text-sm">{item.count}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 text-lg">Loading data...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalProgramsMenu;
