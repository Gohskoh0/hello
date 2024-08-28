"use client"
import React, { useEffect } from "react";
import { GiEternalLove } from 'react-icons/gi'; // Importing the GiEternalLove icon
import Link from 'next/link'; // Importing Link component from Next.js

export default function ContactInfo() {
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
        <main className="min-h-screen bg-slate-50">
            <div className="p-6 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-40 pt-16 md:pt-28">
                {/* Company Info */}
                <div className="w-full md:w-[650px]">
                    <div className="px-4 md:px-8">
                        <img className="w-[60px] md:w-[90px] h-[50px] md:h-[60px]" src="/logo KE.png" alt="Kreenox Engineering Logo" />
                    </div>
                    <p className="text-xs md:text-sm mt-4 md:mt-6 leading-relaxed">
                            Kreenox Engineering LLC, a Georgia registered company in the USA, is a rapidly growing leader in the
                             repair and maintenance of air conditioning systems and Security Certification courses. 
                            Our reputation is built on the trust of our clients, who rely on our 
                            expertise and commitment to quality service.
                    </p>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col border-t md:border-l md:border-t-0 border-slate-300 px-4 md:px-12 pt-6 md:pt-0">
                    <p className="font-bold text-lg md:text-xl">For More Enquiries, Contact us</p>
                    <div className="mt-4">
                        
                        <div className="flex items-center gap-2 mt-4">
                            <img className="w-[16px] md:w-[20px] h-[16px] md:h-[20px]" src="/whatsapp.png icon.png" alt="WhatsApp Icon" />
                            <p className="text-xs md:text-sm cursor-pointer">+1(404)690-1367</p>
                        </div>

                        <div className="flex items-center gap-2 mt-4">
                            <GiEternalLove />
                            <Link href="#">
                                <p className="text-xs md:text-sm cursor-pointer">kreenoxenginerring@gmail.com</p>
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                            <GiEternalLove />
                            <Link href="#">
                                <p className="text-xs md:text-sm cursor-pointer">www.kreenoholdings.com</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}


