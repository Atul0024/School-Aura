import React, { useState, useEffect } from 'react';
import picon from "../picon.png";

const ParentTestimonialsSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  
  const testimonials = [
    { id: 1, name: "Rakesh Sharma", location: "Faridabad, Haryana", text: "A parent who has a phobia for math would dread to see her child going through the same. I am glad we found School Aura, which gave a great teacher and a great platform for learning.", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, name: "Varun Kasyap", location: "Uttar Pradesh", text: "School Aura Teachers make sure one understands the concept by giving everyday observations. Thank You!", avatar: "https://randomuser.me/api/portraits/men/2.jpg" },
    { id: 3, name: "Vishal Kumar", location: "Delhi", text: "My daughter used to despise math, but now she can confidently take math tests. She's become enamoured with math, which is fantastic! Thank You School Aura for your tremendous support.", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
    { id: 4, name: "Ravi Kaushal", location: "Indore, Madhya Pradesh", text: "Excellent teacher with a fantastic teaching method; if I had had this teacher in school, I believe I would have achieved my goal of becoming a lecturer.", avatar: "https://randomuser.me/api/portraits/men/4.jpg" },
    { id: 5, name: "Amit Singh", location: "Mumbai, Maharashtra", text: "The best learning experience my child has ever had!", avatar: "https://randomuser.me/api/portraits/men/5.jpg" },
    { id: 6, name: "Neha Verma", location: "Pune, Maharashtra", text: "School Aura transformed my child's approach to learning!", avatar: "https://randomuser.me/api/portraits/women/1.jpg" },
    { id: 7, name: "Suresh Mehta", location: "Jaipur, Rajasthan", text: "Highly recommended for all students!", avatar: "https://randomuser.me/api/portraits/men/6.jpg" },
    { id: 8, name: "Priya Sharma", location: "Kolkata, West Bengal", text: "A wonderful learning experience for my child.", avatar: "https://randomuser.me/api/portraits/women/2.jpg" }
  ];

  const totalSlides = Math.ceil(testimonials.length / 4);
  
  useEffect(() => {
    let interval;
    if (isAutoplay) {
      interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % totalSlides);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoplay, totalSlides]);
  
  const handleDotClick = (index) => {
    setActiveSlide(index);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };
  
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-gray-900">WHAT</span> <span className="text-orange-500">PARENTS SAY</span>
      </h2>
      
      <div className="relative w-full overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
          {[...Array(totalSlides)].map((_, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-4 gap-6">
              {testimonials.slice(slideIndex * 4, slideIndex * 4 + 4).map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-3" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-orange-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{testimonial.text}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-6">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`mx-1 h-2 w-8 rounded-full ${index === activeSlide ? 'bg-orange-500' : 'bg-gray-300'}`}
            aria-label={`Go to testimonial slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ParentTestimonialsSlider;
