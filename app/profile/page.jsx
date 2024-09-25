"use client";
import React, { useEffect } from "react";
import Image from "next/image";


export default function CompanyProfile() {
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
        <main className="min-h-screen bg-white">
            <div className="bg-[#021526] h-auto md:h-[600px] flex flex-col md:flex-row justify-center gap-4">
                <div className="mr-0 md:mr-12 text-center md:text-left">
                    <div className="w-[200px] h-[200px] bg-white mt-12 md:mt-48 mx-auto md:ml-24">
                        <Image width={199} height={199} src="/logo KE.png" />
                    </div>
                    <h1 className="text-white text-3xl md:text-5xl mt-4 md:mt-0 text-center w-full md:w-[400px] mb-2">
                        Company Profile
                    </h1>
                    <p className="text-white text-lg md:ml-28">Kreenox Engineering</p>
                </div>
            </div>

            <blockquote className="px-4 md:px-48 mt-16">
                <div className="flex flex-col md:flex-row gap-8 md:gap-48 h-auto md:h-[450px]">
                    <div className="flex justify-center md:block">
                        <Image width={400} height={400} className="rounded-full" src="/uche pic.jpg" alt="" />
                    </div>
                    <div className="text-justify">
                        <p className="text-black w-full md:w-[500px] h-auto md:h-[300px] leading-7">
                        Engr. Dr. Okpala Felix Uchenna is an outstanding expert who work assiduously to carve a niche for himself 
                        ahead of many of his contemporaries in Security Industry. Has several  years of  experience in Electrical engineering, 
                        Power Engineering, Management  Leadership qualities and Safety, 
                        Security skills, has severed in different Industry, served in as Law Enforcement Agencies with remarkable Outstanding 
                        acclaims and recommendations. Certified in Institutions of Security and Intelligent studies 
                        Nigerian. Was elected as Chairperson Young Professional Committee ASIS International 
                        Chapters 273 and a Liaison Council Member in YP ASIS.
                        Has Doctorial Honors in Security and Intelligence Student from Embry Riddle Aeronautical 
                        University Florida,USA. A fellow of Senior member in Security Forensics Studies. Has acquired vast 

                        </p>
                    </div>
                </div>

                <div className="mb-8 text-justify">
                    <p className="leading-7">
                        experiences both in Engineering and Security. Humble, Gallant, Agility, owns a Bachelor of 
                        Engineering in Electrical and Electronic Engineering. He graduated in 2007 with years of working 
                        experience as a Manager in FES-FES Intl' with a lot of awards. He is currently nominated as Regions $ 
                        Chapter Volunteer Leader ASIS Intl. He is also consulting for FNSIS. He is a registered member of the Nigeria 
                        Society of Engineers with a License from the COREN Regulatory body. An active member of various 
                        professional bodies, he believes in making a remarkable impact and is goal-oriented wherever he is found. He is also a team player who pays attention to colleagues and shares collective ideals, implementing them to achieve the organization’s objectives.
                    </p>
                </div>   
            </blockquote>

            <div className="bg-slate-100 h-auto py-16 px-4 sm:px-20 md:px-48 grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="w-full sm:w-[800px] mx-0 md:mx-48">
                    <div className="px-16 sm:px-8 flex flex-col md:flex-row gap-8 md:gap-6 pb-16">
                        <div>
                            <Image width={250} height={250} className="rounded-full" src="/uche5.jpg" alt="" />
                            <p>CEO Kreenox Engineering with staff of Patrol Management team analysing trending Technology devices display template</p>
                        </div>
                        
                        <div>
                            <Image width={250} height={250} className="rounded-full" src="/uche 4.jpg" alt="" />
                            <p>President of Evolutz/ Suzanna Alsayed.Author/ CEO</p>
                        </div>
                        <div>
                            <Image width={250} height={250} className="rounded-full" src="/uche 2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="px-16 sm:px-8 flex flex-col md:flex-row gap-8 md:gap-6 pb-16">
                        <div>
                            <p>CEO Kreenox Engineering with staff of Patrol Management team analysing trending Technology devices display template</p>
                        </div>
                        
                        <div>
                            <p>President of Evolutz/ Suzanna Alsayed.Author/ CEO</p>
                        </div>
                    </div>
                    <h1 className="text-xl md:text-2xl text-center text-[#021526] mt-8">
                    Among the Top 3 Global Winner. ASIS International Young Professionals Experience. (NextGen 2022)
                    </h1>
                </div>
            </div>
        </main>
    );
}
