import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faPhone, faEnvelope, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'; 
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center pt-1 p-5'>

            {/* Left Section (Phone & Email) */}
            <div className='flex items-center space-x-1'>
                {/* Phone Icon */}
                <div className='bg-[#ff5202] p-[5px] w-6 h-6 flex items-center justify-center rounded-full'>
                    <FontAwesomeIcon icon={faPhone} className="text-xs text-white" />
                </div>
                <p className="text-[#007bff] hover:text-[#0056b3] hover:underline px-2 py-1 transition duration-300">
                    +91-9540349392
                </p>

                {/* Email Icon */}
                <div className='bg-[#ff5202] p-[5px] w-6 h-6 flex items-center justify-center rounded-full'>
                    <FontAwesomeIcon icon={faEnvelope} className="text-xs text-white" />
                </div>
                <p className="text-[#007bff] hover:text-[#0056b3] hover:underline px-2 py-1 transition duration-300">
                    contact@schoolaura.com
                </p>
            </div>

            {/* Right Section (Buttons) */}
            <div className='flex items-center space-x-3 p-3 pt-0'>
                <button className="flex items-center gap-2 bg-[#1bd741] px-3 py-1 rounded-sm text-white text-sm font-medium transition duration-300 hover:bg-green-600">
                    <FontAwesomeIcon icon={faWhatsapp} className="text-sm text-white" />
                    WhatsApp
                </button>

                <button className="flex items-center gap-2 bg-[#8fd71b] px-3 py-1 rounded-sm text-white text-sm font-medium transition duration-300 hover:bg-green-600">
                    <FontAwesomeIcon icon={faMobileScreenButton} className="text-sm text-white" />
                    MobileApp
                </button>

                <button className="flex items-center gap-2 bg-black px-3 py-1 rounded-sm text-white text-sm font-medium transition duration-300 hover:bg-green-600">
                    Login
                </button>

                <button className="flex items-center gap-2 bg-black px-3 py-1 rounded-sm text-white text-sm font-medium transition duration-300 hover:bg-green-600">
                    Register
                </button>
            </div>

        </div>
    );
};

export default Navbar;