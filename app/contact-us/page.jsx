


import React from 'react';
import { BsTelephone } from 'react-icons/bs'; // Importing the BsTelephone icon
import { AiOutlineMail } from 'react-icons/ai'; // Importing the AiOutlineMail icon
import { GiEternalLove } from 'react-icons/gi'; // Importing the GiEternalLove icon
import Link from 'next/link'; // Importing Link component from Next.js

export default function ContactInfo() {
    return (
        <main className="min-h-screen bg-slate-50">
            <div className="p-6 md:p-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-40 pt-16 md:pt-28">
                {/* Company Info */}
                <div className="w-full md:w-[650px]">
                    <div className="px-4 md:px-8">
                        <img className="w-[60px] md:w-[70px] h-[50px] md:h-[60px]" src="/logo KE.png" alt="Kreenox Engineering Logo" />
                    </div>
                    <p className="text-xs md:text-sm mt-4 md:mt-6 leading-relaxed">
                        Kreenox Engineering LLC, A Wyoming registered company in USA is one of the fastest 
                        growing fully integrated Investment Wealth Managers, Private Investigators, 
                        Security Automation, Protection and Performance of Assets, New Ideas & Enterprise 
                        Developing holding company. Kreeno Holdings LLC offers a comprehensive range of 
                        capabilities providing quality services to meet the growing demands in the industry. 
                        Read More
                    </p>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col border-t md:border-l md:border-t-0 border-slate-300 px-4 md:px-12 pt-6 md:pt-0">
                    <p className="font-bold text-lg md:text-xl">For More Enquiries, Contact us</p>
                    <div className="mt-4">
                        <div className="flex items-center gap-2">
                            <BsTelephone />
                            <p className="text-xs md:text-sm cursor-pointer">+234708 832 5000</p>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                            <img className="w-[16px] md:w-[20px] h-[16px] md:h-[20px]" src="/whatsapp.png icon.png" alt="WhatsApp Icon" />
                            <p className="text-xs md:text-sm cursor-pointer">+19179054481</p>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                            <AiOutlineMail />
                            <Link href="#">
                                <p className="text-xs md:text-sm cursor-pointer">info@kreenoholdings.com</p>
                            </Link>
                        </div>
                        <div className="flex items-center gap-2 mt-4">
                            <GiEternalLove />
                            <Link href="#">
                                <p className="text-xs md:text-sm cursor-pointer">support@kreenoholdings.com</p>
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


