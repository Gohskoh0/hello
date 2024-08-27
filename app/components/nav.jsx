"use client"

import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi'; // Make sure to import this icon

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <main>
            <nav className="bg-blue-950 p-2 w-full h-[47px] flex justify-between items-center px-48 fixed top-0 left-0 z-50 hidden md:flex">
                {/* Departments Section */}
                <div className="text-white bg-[#021526] px-3 p-1 h-[47px] w-[170px] flex items-center">
                    <p className="text-sm">Kreenox Engineering</p>
                </div>

                {/* Contact Information */}
                <div className="text-white flex flex-row gap-4 p-1 text-sm">
                    <p>30 N Gould St Ste R, Sheridan, WY 82801, USA</p><br />
                    <p>Mon - Fri 8:00 - 5:00</p><br />
                    <p>+1(404)690-1367</p>
                </div>
                
                {/* Language Dropdown */}
                <div className="relative">
                    <div 
                        className="border border-white p-1 px-3 h-[36px] w-[98px] flex items-center gap-2 text-white text-sm cursor-pointer" 
                        onClick={toggleDropdown}
                    >
                        <img className="w-[10px] h-[10px]" src="/U.S flag.png" alt="U.S. flag" />
                        <p>English</p>
                        <FiChevronDown className="ml-1 text-white" />
                    </div>

                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-[98px] bg-white border border-gray-300 shadow-lg">
                            <div className="border border-white p-1 px-3 h-[36px] w-full flex items-center gap-2 text-black text-sm">
                                <img className="w-[10px] h-[10px]" src="/china flag1.jpeg" alt="Chi. flag" />
                                <p className="hover:text-slate-900 cursor-pointer">Chi</p>
                            </div>
                            <div className="bg-slate-100 border-l-3 border-green-600 p-1 px-3 h-[36px] w-full flex items-center gap-2 text-black text-sm">
                                <img className="w-[10px] h-[10px]" src="/U.S flag.png" alt="Eng. flag" />
                                <p className="hover:text-slate-900 cursor-pointer">Eng</p>
                            </div>
                            <div className="border border-white p-1 px-3 h-[36px] w-full flex items-center gap-2 text-black text-sm">
                                <img className="w-[10px] h-[10px]" src="/Russia flag2.png" alt="Rus. flag" />
                                <p className="hover:text-slate-900 cursor-pointer">Rus</p>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </main>
    );
}
