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
            <section className="p-6 md:p-10">
                <div className="px-4 md:px-40 pt-16 md:pt-32">
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
                        <p className="text-black text-base md:text-lg mt-4 md:mt-8 md:w-[500px] leading-7">
                            To become the foremost integrated security company and business solutions provider in Africa, offering innovative, reliable, and comprehensive services that empower our clients to achieve their goals with confidence. We are committed to setting new standards in security and business solutions through cutting-edge technology, exceptional customer service, and a deep understanding of our clients' unique needs. Our vision is to be the trusted partner for businesses across the continent, delivering solutions that drive growth, enhance security, and ensure long-term success.
                        </p>
                    </div>
                    <div className="flex justify-center md:block">
                        <Image width={450} height={450} className="rounded-full mt-8 md:mt-0 pb-4" src="/our vision.jpeg" alt="Our Vision" />
                    </div>
                </div>
            </blockquote>
        </main>
    );
}



















// import { GiEternalLove } from "react-icons/gi";
// import Link from "next/link";
// import Image from "next/image";

// export default function AboutUs() {
//     return (
//         <main className="bg-white min-h-screen">
//             <section>
//                 <div className="bg-slate-100 pt-20 pb-6 flex justify-center flex-col items-center">
//                     <p className="bg-[#021526] text-white w-[150px] h-[50px] flex justify-center pt-2 px-6 rounded-full font-bold text-sky-950 text-lg md:text-xl mb-12 font-Oswald">
//                         About Us
//                     </p>
//                     <div className="flex justify-center items-center flex-col gap-2">
//                         <p className="text-2xl md:text-5xl text-center w-[280px] sm:w-[400px] md:w-[700px] font-bold text-sky-950 mb-2">
//                             <span className="text-red-700">Kreenox Engineering LLC</span>
//                         </p>
//                         <p className="text-3xl md:text-5xl text-sky-950 font-bold mb-12">
//                             U.S.A
//                         </p>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-100 md:h-auto flex justify-center items-center px-4 sm:px-10 md:px-60">
//                         <div className="flex flex-col justify-center w-full py-8 md:py-0">
//                             <blockquote className="text-sky-950 text-md text-center md:text-start md:h-auto h-auto w-full sm:w-[350px] md:w-[450px]flex justify-center">
//                                 <p className="pb-8 pt-8 text-2xl md:text-4xl font-bold text-center md:text-center">Who Are We</p>
//                                 <p>Growing organically through careful planning and rightful application of sound business principles.At kreenox, we believe that the only way to discover the limits of the possible is to go beyond the impossible.To become the foremost integrated security and business solution company in Africa.</p>
//                             </blockquote>
//                         </div>
                        
//                     </div>
//                 </div>

//                 <div className="bg-slate-50 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40 pt-8 pb-8 md:px-40 px-0 md:h-[400px] md:pt-16">
//                     <div className="flex flex-col items-center md:items-start px-12">
//                         <img className="w-[50px] md:w-[90px] mt-2" src="/logo KE.png" alt="" />
//                         <p className="text-sm text-start md:text-start mt-4 w-full md:w-auto md:leading-6">
//                             Kreenox Engineering LLC, a Georgia registered company in the USA, is a rapidly growing leader in the
//                              repair and maintenance of air conditioning systems and security cameras. 
//                             Our reputation is built on the trust of our clients, who rely on our expertise and commitment to quality service.
//                         </p>
//                     </div>

//                     <div className="flex flex-col border-t md:border-t-0 md:border-l border-slate-300 pt-10 md:pt-0 px-12 md:px-20 md:h-[250px]">
//                         <p className="font-bold text-lg md:text-xl mb-4">For More Enquiries, Contact us</p>
//                         <div className="flex items-center gap-2 mb-4">
//                             <img className="w-[20px] h-[20px]" src="/whatsapp.png icon.png" alt="WhatsApp" />
//                             <p className="text-sm cursor-pointer">+1(404)690-1367</p>
//                         </div>
//                         <div className="flex items-center gap-2 mb-4">
//                             <AiOutlineMail /> 
//                             <Link href="#"><p className="text-sm cursor-pointer">kreenoxenginerring@gmail.com</p></Link>
//                         </div>
//                         <div className="flex items-center gap-2 mb-4">
//                             <GiEternalLove />
//                             <Link href="#"><p className="text-sm cursor-pointer">www.kreenoxenginerring.com</p></Link>
//                         </div>
//                     </div> 
                    
//                 </div>
//             </section>
//         </main>
//     );
// }
