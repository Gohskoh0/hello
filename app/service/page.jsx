"use client"
import React, { useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GiEternalLove } from "react-icons/gi";
import Link from "next/link";

export default function Service() {
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
        <main className="bg-white min-h-screen">
            <section>
                <div className="bg-slate-100 pt-20 pb-6 flex justify-center flex-col items-center">
                    <p className="bg-[#021526] text-white p-2 px-4 rounded-full font-bold text-sky-950 text-lg md:text-xl mb-12 font-Oswald">
                        Service
                    </p>
                    <div className="flex justify-center items-center flex-col gap-2">
                        <p className="text-2xl md:text-5xl text-center w-[280px] sm:w-[400px] md:w-[700px] font-bold text-sky-950 mb-2">
                            <span className="text-red-700">Kreenox Engineering LLC</span>
                        </p>
                        <p className="text-3xl md:text-5xl text-sky-950 font-bold mb-12">
                            U.S.A
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-100 md:h-auto flex justify-center items-center px-4 sm:px-10 md:px-60">
                        <div className="flex flex-col justify-center w-full py-8 md:py-0">
                            <blockquote className="text-sky-950 text-md text-center md:text-start md:h-auto h-auto w-full sm:w-[350px] md:w-[450px]">
                                <p className="pb-8 pt-2 md:pt-8 text-2xl md:text-4xl font-bold text-center md:text-start">Our Service</p>
                                Kreenox Engineering is a reputable company specializing in the repair and maintenance of air conditioning systems and CCTV cameras. With a strong focus on providing top-notch services, Kreenox Engineering ensures that your heating and security systems are always operating at peak efficiency.
                                Their expertise spans across a wide range of models and brands, allowing them to deliver reliable and effective repair solutions for both residential and commercial clients. Whether it's a malfunctioning air conditioner during the heat of summer or a CCTV camera that needs immediate attention, Kreenox Engineering offers prompt, professional, and precise services to keep your environment comfortable and secure.
                            </blockquote>
                        </div>
                        <div className="px-4 sm:px-10 md:px-12 pb-4 w-full sm:w-[620px] pt-0 md:pt-0">
                            <p className="text-sky-950 text-md text-center md:text-start pb-8">
                            Committed to quality and customer satisfaction, Kreenox Engineering stands out as a trusted partner for all your heating and security system needs, making them a go-to choice for clients seeking expert repairs in the U.S.
                            </p>
                            <p className="text-sky-950 text-md text-center md:text-start">
                           
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40 pt-8 pb-8 md:px-40 px-0 md:h-[400px] md:pt-16">
                    <div className="flex flex-col items-center md:items-start px-12">
                        <img className="w-[50px] md:w-[90px] mt-2" src="/logo KE.png" alt="" />
                        <p className="text-sm text-start md:text-start mt-4 w-full md:w-auto md:leading-6">
                            Kreenox Engineering LLC, a Georgia registered company in the USA, is a rapidly growing leader in the repair and maintenance of air conditioning systems and security cameras. 
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
            </section>
        </main>
    );
}






