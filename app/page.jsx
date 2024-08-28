"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GiAutoRepair } from "react-icons/gi";
import { AiOutlineMail } from "react-icons/ai";
import { GiEternalLove } from "react-icons/gi";
import { CiMenuFries } from "react-icons/ci";
import { BsDashLg } from "react-icons/bs"; // Import the menu close icon

export default function HomePage() {
    const [menuTab, setMenuTab] = useState(false);

    useEffect(() => {
        const favicon = document.createElement('link');
        favicon.rel = 'icon';
        favicon.href = '/logo KE.png';
        document.head.appendChild(favicon);

        return () => {
            document.head.removeChild(favicon);
        };
    }, []);

    return (
        <>
            <main className="bg-white min-h-screen">
                {/* Navigation */}
                <div className="flex justify-between items-center mt-0 md:mt-[48px] pt-8 md:pt-4 h-[70px] py-4 md:py-0">
                    <div className="text-2xl flex items-center mx-0 px-4 md:px-40 md:mx-12">
                        <img src="/logo KE.png" alt="logo" className="w-[50px] md:w-[70px]" />
                    </div>
                    <div className="hidden md:flex flex-row gap-8 md:gap-16 text-[#021526] font-bold mr-0 md:mr-48">
                        <Link href="/">
                            <p className="border-b-2 border-0 border-green-500 py-2">Home</p>
                        </Link>
                        <Link href="/about-us">
                            <p className="hover:border-b-2 border-green-500 py-2">About us</p>
                        </Link>
                        <Link href="/service">
                            <p className="hover:border-b-2 border-green-500 py-2">Service</p>
                        </Link>
                        <Link href="/contact-us">
                            <p className="hover:border-b-2 border-green-500 py-2">Contact Us</p>
                        </Link>
                    </div>
                    <div className="flex md:hidden pr-4">
                        {!menuTab ? (
                            <CiMenuFries onClick={() => setMenuTab(true)} className="text-gray-400 text-3xl cursor-pointer" />
                        ) : (
                            <BsDashLg onClick={() => setMenuTab(false)} className="text-gray-400 text-3xl cursor-pointer" />
                        )}
                    </div>
                </div>

                {/* Dropdown Menu for Mobile */}
                {menuTab && (
                    <div className="md:hidden flex flex-col items-center bg-white shadow-md py-4">
                        <Link href="/" onClick={() => setMenuTab(false)} className="py-2">Home</Link>
                        <Link href="/about-us" onClick={() => setMenuTab(false)} className="py-2">About us</Link>
                        <Link href="/service" onClick={() => setMenuTab(false)} className="py-2">Service</Link>
                        <Link href="/contact-us" onClick={() => setMenuTab(false)} className="py-2">Contact Us</Link>
                    </div>
                )}

                {/* Hero Section */}
                <div className="w-full flex flex-col items-center mb-0 pb-0">
                    <img className="w-full h-auto md:h-[750px] pt-6 md:pt-3" src="https://obuy.pk/wp-content/uploads/2021/07/IMG-3915-removebg-preview.png" alt="" />
                    <div className="bg-blue-950 flex flex-col md:flex-row items-center md:items-start w-full px-4 md:px-40 py-9 md:py-8">
                        <p className="text-white text-lg md:text-2xl text-center w-full md:w-[950px] mb-4 md:mb-0">
                            Looking For a Professional Air Condition and CCTV Cameras Repairer in U.S?
                        </p>
                        <div className="border border-white rounded-md h-[40px] md:h-[50px] w-[150px] md:w-[169px] hover:bg-green-600 bg-white text-center flex justify-center items-center ml-0 md:ml-14">
                            <Link href="/profile">
                                <p className="text-[#021526] font-bold hover:text-white text-xl cursor-pointer">CEO Profile</p>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Welcome Section */}
                <div className="px-4 md:px-28 py-20 bg-slate-200 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
                    <div className="text-start md:mr-12 md:px-12">
                        <p className="text-3xl md:text-5xl text-blue-950">Welcome!</p>
                        <p className="text-2xl md:text-3xl text-green-600 mt-4">Kreenox Engineering</p>
                        <p className="text-sm md:text-base mt-4 w-full md:w-auto">
                            Welcome to Kreenox Engineering, your trusted partner in heating system repairs,
                            specializing in air conditioning and CCTV cameras. With our expertise, we provide top-notch repair services,
                            ensuring your systems are running smoothly and efficiently...
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <img className="w-full md:w-[500px] h-auto md:h-[350px] rounded-md" src="/america air condition.jpeg" alt="" />
                    </div>
                </div>

                {/* Services Section */}
                <div className="p-4 bg-white py-16">
                    <div className="text-center">
                        <p className="text-2xl md:text-4xl">Repair of Air Condition AC</p>
                        <p className="text-sm md:text-lg w-full max-w-2xl mx-auto mt-4">
                            We have invested significant time and resources to offer premium air conditioning repair services tailored for discerning clients.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 mt-10 justify-center">
                        <img className="w-full md:w-[500px] h-auto rounded-md" src="/air condition u.s1.jpeg" alt="" />
                        <img className="w-full md:w-[500px] h-auto rounded-md" src="/air condition u.s2.jpeg" alt="" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 items-center mt-10 px-4 md:px-48">
                        <GiAutoRepair className="text-5xl md:text-8xl text-blue-950" />
                        <p className="border-l border-gray-200 pl-4 md:pl-10 mt-4 md:mt-0">
                            At Kreenox Engineering, we understand how crucial a reliable air conditioning system is to your comfort and well-being. 
                            That's why we've dedicated substantial time and resources to developing top-tier AC repair services.
                        </p>
                    </div>

                    <div className="text-center mt-16">
                        <p className="text-2xl md:text-4xl">Repair of Security Cameras</p>
                        <p className="text-sm md:text-lg w-full max-w-2xl mx-auto mt-4">
                            We have dedicated substantial time and resources to developing specialized repair services for CCTV cameras.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 mt-10 justify-center">
                        <img className="w-full md:w-[500px] h-auto rounded-md" src="/security cameras.jpeg" alt="" />
                        <img className="w-full md:w-[500px] h-auto rounded-md" src="/secutiy cameras1.jpg" alt="" />
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 items-center mt-10 px-4 md:px-48">
                        <GiAutoRepair className="text-5xl md:text-8xl text-blue-950" />
                        <p className="border-l border-gray-200 pl-4 md:pl-10 mt-4 md:mt-0">
                            For our discerning clients, our services are designed to ensure your security systems are maintained to the highest standards.
                            With these plans, you can trust that your CCTV cameras will operate at peak performance, providing the reliable surveillance you need.
                        </p>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="bg-slate-50 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40 pt-8 pb-8 md:px-40 px-0 md:h-[400px] md:pt-16">
                    <div className="flex flex-col items-center md:items-start px-12">
                        <img className="w-[50px] md:w-[90px] mt-2" src="/logo KE.png" alt="" />
                        <p className="text-sm text-start md:text-start mt-4 w-full md:w-auto md:leading-6">
                            Kreenox Engineering LLC, a Georgia registered company in the USA, is a rapidly growing leader in the repair and maintenance 
                            of air conditioning systems and Security Certification courses. 
                            Our reputation is built on the trust of our clients, who rely on our expertise and commitment to quality service.
                        </p>
                    </div>

                    <div className="flex flex-col border-t md:border-t-0 md:border-l border-slate-300 pt-10 md:pt-0 px-12 md:px-20 md:h-[250px]">
                        <p className="font-bold text-lg md:text-xl mb-4">For More Enquiries, Contact us</p>
                        <div className="flex items-center gap-2 mb-4">
                            <img className="w-[20px] h-[20px]" src="/whatsapp.png icon.png" alt="WhatsApp" />
                            <p className="text-sm cursor-pointer">+1(404)690-1367</p>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            <AiOutlineMail /> 
                            <Link href="#"><p className="text-sm cursor-pointer">kreenoxenginerring@gmail.com</p></Link>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            <GiEternalLove />
                            <Link href="#"><p className="text-sm cursor-pointer">www.kreenoxenginerring.com</p></Link>
                        </div>
                    </div> 
                    
                </div>
            
            </main>
        </>
    );
}
