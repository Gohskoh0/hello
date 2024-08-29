"use client"
import React, { useEffect } from "react";
import Image from "next/image";


export default function AboutUs() {
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
        <main className="min-h-screen bg-gradient-to-b from-[#B6BBC4] via-[#E0E4E9] to-[#FFFFFF]">
            <div className="text-2xl flex items-center mx-0 px-4 md:px-40 md:mx-12 pt-12 md:pt-20">
                        <img src="/logo KE.png" alt="logo" className="w-[50px] md:w-[70px]" />
                    </div>
            <section className="p-6 md:p-10">
                <div className="md:px-40 pt-16 md:pt-12">
                    <p className="text-[#021526] text-xl md:text-3xl font-bold">About our company</p>
                    <p className="text-sky-500 text-2xl md:text-5xl font-bold w-full md:w-[600px] mt-4">We help repair and maintain heating systems</p>
                    <p className="text-[#021526] w-full md:w-[700px] mt-4">
                        <span className="text-[#021526] font-bold">Kreenox Engineering</span> is a company committed to delivering efficient and future-ready heating system solutions. We focus on providing cost-effective, reliable repairs that meet today's needs while being adaptable for future enhancements.
                    </p>
                </div>
            </section>

            <div className="bg-blue-500 w-full pt-8 md:pt-16">
                <div className="px-4 md:px-48 py-10 md:py-20">
                    <h1 className="text-2xl md:text-6xl text-white md:w-[600px]">Get to know About who we are..</h1>
                    <p className="text-[#021526] text-xl md:text-3xl text-white mt-6">Mission</p>
                    <p className="text-white text-base md:text-2xl mt-3 md:mt-6 md:w-[600px]">
                        Growing organically through careful planning and rightful application of sound business principles. At Kreenox, we believe that the only way to discover the limits of the possible is to go beyond the impossible. To become the foremost integrated security and business solution company in Africa.
                    </p>
                </div>
            </div>

            <blockquote className="px-4 md:px-48 pt-12 md:pt-16 bg-gradient-to-b from-[#B6BBC4] via-[#E0E4E9] to-[#FFFFFF]">
                <div className="flex flex-col md:flex-row gap-8 md:gap-16 h-auto md:h-[550px]">
                    <div className="flex flex-col">
                        <p className="text-2xl md:text-3xl text-[#021526] w-full md:w-[500px]">Our Vision</p>
                        <p className="text-[#021526] text-base md:text-lg mt-4 md:mt-8 md:w-[500px] leading-7">
                            To become the foremost integrated security company and business solutions provider in Africa, offering innovative, reliable, and comprehensive services that empower our clients to achieve their goals with confidence. We are committed to setting new standards in security and business solutions through cutting-edge technology, exceptional customer service, and a deep understanding of our clients' unique needs. Our vision is to be the trusted partner for businesses across the continent, delivering solutions that drive growth, enhance security, and ensure long-term success.
                        </p>
                    </div>
                    <div className="flex justify-center md:block pb-8 md:pb-0">
                        <Image width={450} height={450} className="rounded-full mt-8 md:mt-0 pb-4" src="/our vision.jpeg" alt="Our Vision" />
                    </div>
                </div>
            </blockquote>
        </main>
    );
}



















