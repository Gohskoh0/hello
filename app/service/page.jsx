
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { IoMailUnread } from "react-icons/io5";
import { GiEternalLove } from "react-icons/gi";
import Link from "next/link";

export default function Service() {
    return (
        <main className="bg-white min-h-screen">
            <section>
                <div className="bg-slate-100 pt-20 pb-6 flex justify-center flex-col items-center">
                    <p className="bg-amber-300 p-2 px-4 rounded-full font-bold text-sky-950 text-lg md:text-xl mb-12 font-Oswald">
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
                                <p className="pb-8 pt-8 text-2xl md:text-4xl font-bold text-center md:text-start">Who Are We</p>
                                Kreenox Engineering is a reputable company specializing in the repair and maintenance of air conditioning systems and CCTV cameras. With a strong focus on providing top-notch services, Kreenox Engineering ensures that your heating and security systems are always operating at peak efficiency.
                                Their expertise spans across a wide range of models and brands, allowing them to deliver reliable and effective repair solutions for both residential and commercial clients. Whether it's a malfunctioning air conditioner during the heat of summer or a CCTV camera that needs immediate attention, Kreenox Engineering offers prompt, professional, and precise services to keep your environment comfortable and secure.
                            </blockquote>
                        </div>
                        <div className="px-4 sm:px-10 md:px-12 pb-4 w-full sm:w-[620px] pt-4">
                            <p className="text-sky-950 text-md text-center md:text-start pb-8">
                            Committed to quality and customer satisfaction, Kreenox Engineering stands out as a trusted partner for all your heating and security system needs, making them a go-to choice for clients seeking expert repairs in the U.S.
                            </p>
                            <p className="text-sky-950 text-md text-center md:text-start">
                           
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 p-10 sm:p-20 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-20">
                    <div className="w-full sm:w-[400px] md:w-[600px]">
                        <div className="px-4 sm:px-8">
                            <img className="w-[70px] h-[60px]" src="/logo KE.png" alt="Kreenox Engineering Logo" /><br />
                        </div>
                        <p className="text-sm leading-relaxed">
                        Kreenox Engineering LLC, a Wyoming registered company in the USA, is a rapidly growing leader in the repair and maintenance of air conditioning systems and CCTV cameras. As a specialized service provider, Kreenox Engineering offers comprehensive repair solutions to ensure the optimal performance and longevity of your heating and security systems. With a commitment to quality and customer satisfaction, Kreenox Engineering is equipped to meet the increasing demands of residential and commercial clients alike.
                        </p>
                    </div>

                    <div className="flex flex-col border-t md:border-t-0 md:border-l border-slate-300 pt-10 md:pt-0 md:px-12">
                        <p className="font-bold text-lg md:text-xl mb-4">For More Enquiries, Contact us</p>
                        <div className="flex items-center gap-2 mb-4">
                            <BsTelephone />
                            <p className="text-sm cursor-pointer">+234708 832 5000</p>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            <img className="w-[20px] h-[20px]" src="/whatsapp.png icon.png" alt="WhatsApp" />
                            <p className="text-sm cursor-pointer">+19179054481</p>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            <AiOutlineMail /> 
                            <Link href="#"><p className="text-sm cursor-pointer">info@kreenoholdings.com</p></Link>
                        </div>
                        <div className="flex items-center gap-2 mb-4"> 
                            <IoMailUnread />
                            <Link href="#"><p className="text-sm cursor-pointer">support@kreenoholdings.com</p></Link>
                        </div>
                        <div className="flex items-center gap-2 mb-4">
                            <GiEternalLove />
                            <Link href="#"><p className="text-sm cursor-pointer">www.kreenoholdings.com</p></Link>
                        </div>
                    </div> 
                </div>
            </section>
        </main>
    );
}






