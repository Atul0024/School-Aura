import React, { useState } from 'react';

const WebsiteFooter = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    console.log('Email submitted:', email);
    alert('Thank you for subscribing to our newsletter!');
    setEmail('');
  };
  
  return (
    <footer className="w-full bg-navy-900 text-white" style={{ backgroundColor: "#0d1028" }}>
      {/* Newsletter Section */}
      <div className="w-[80%] bg-gray-100 py-6 px-4 m-auto translate-y-[-50%]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl font-bold">
              <span className="text-navy-900 text-black">SUBSCRIBE OUR</span>{""}<br/>
              <span className="text-orange-500">NEWSLETTER</span>
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 w-full md:w-64 border border-gray-300 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 hover:bg-orange-600 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto py-12 px-4" >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-6">About US</h3>
            <p className="text-gray-300">
              SchoolAura Smart Education Platform is a step towards making learning better and effective for the students and help to acheiving their goals.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-6">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Benefits', 'Blogs', 'Testimonials', 'Featurs'].map((link) => (
                <li key={link} className="flex items-center">
                  <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <a href="#" className="hover:text-orange-500 transition duration-300">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Help & Support */}
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-6">Help & Support</h3>
            <ul className="space-y-2">
              {['Services', 'Support', 'Terms & condition', 'Privacy Policy', 'Sitemap'].map((link) => (
                <li key={link} className="flex items-center">
                  <svg className="w-4 h-4 text-orange-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <a href="#" className="hover:text-orange-500 transition duration-300">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Follow Us */}
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-6">Follow Us</h3>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:opacity-80 transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center hover:opacity-80 transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center hover:opacity-80 transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.39 4.49A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:opacity-80 transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.72 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a9.869 9.869 0 01-1.516-5.26c0-5.445 4.455-9.885 9.942-9.885a9.865 9.865 0 017.021 2.91 9.788 9.788 0 012.909 6.99c-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 005.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Call Us */}
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </div>
            <div>
              <h4 className="text-orange-500 font-bold">CALL US</h4>
              <a href="tel:+919540349392" className="text-blue-400 hover:underline">+91-9540349392</a>
            </div>
          </div>
          
          {/* Mail Us */}
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <div>
              <h4 className="text-orange-500 font-bold">MAIL US</h4>
              <a href="mailto:contact@schoolaura.com" className="text-blue-400 hover:underline">contact@schoolaura.com</a>
            </div>
          </div>
          
          {/* Office Address */}
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mr-4">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="text-orange-500 font-bold">Office Address</h4>
              <p className="text-gray-300">
                E 44/3, Pocket D, Okhla Phase II, Okhla Industrial Area, New Delhi, Delhi 110020, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WebsiteFooter;