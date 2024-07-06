"use client"
import React from "react";
import Image from 'next/image';

import orange_waves_top from "@/imgs/orange_waves_top.svg"

import { DiJava, DiMysql, DiJqueryLogo, DiReact } from 'react-icons/di'
import { AiFillHtml5, AiFillGithub, AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BsFillHddNetworkFill } from 'react-icons/bs'
import { TiCss3 } from 'react-icons/ti'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiTypescript, SiJavascript, SiMaterialdesignicons, SiExpress } from 'react-icons/si'
import { PiPaintBrush } from "react-icons/pi";

const Knowledge = () => {

    const languages = [
        {
            name: 'React',
            icon: <DiReact />,
        },
        {
            name: 'Next.js',
            icon: <TbBrandNextjs />,
        },
        {
            name: 'HTML',
            icon: <AiFillHtml5 />,
        },
        {
            name: 'CSS',
            icon: <TiCss3 />,
        },
        {
            name: 'JavaScript',
            icon: <SiJavascript />,
        },
        {
            name: 'TypeScript',
            icon: <SiTypescript />,
        },
        {
            name: 'Java',
            icon: <DiJava />,
        },
        {
            name: 'jQuery',
            icon: <DiJqueryLogo />,
        },
        {
            name: 'GitHub',
            icon: <AiFillGithub />,
        },
        {
            name: 'MySQL',
            icon: <DiMysql />,
        },
        {
            name: 'Express.js',
            icon: <SiExpress />,
        },
        {
            name: 'UX DESIGN',
            icon: <SiMaterialdesignicons />,
        },
        {
            name: 'FIGMA',
            icon: <PiPaintBrush />,
        },
        {
            name: 'AGILE',
            icon: <AiOutlineFundProjectionScreen />,
        },
        {
            name: 'REST API',
            icon: <BsFillHddNetworkFill />,
        },
    ];


    return (
        <div className="w-full bg-primary-dark flex flex-col items-center justify-between pt-20 md:pt-10" id="knowledge">
            <div className="flex items-center flex-col text-primary-light max-w-[17rem] sm:max-w-[27rem] pb-20 md:pb-10">
                <h2 className="text-4xl w-full">Knowledge</h2>
                <p className="mt-4 text-lg">I am a fast learner who always seeks to improve and expand my knowledge. With proficiency in programming languages and a diverse skill set, I continuously strive to learn more and enhance my abilities.</p>

                <div className='flex flex-wrap w-full justify-around pointer-events-none mt-5'>
                    {languages.map((lang, index) => (
                        <div key={index} className='w-1/2'>
                            <p className='border p-1 m-1 filter flex items-center px-2'>
                                {lang.icon}<span className="ml-2" />{lang.name}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
            <Image className="pointer-events-none w-full min-w-max inset-0 scale-110" loading="lazy" src={orange_waves_top} alt="Vijoh Light Logo" />
        </div>
    );
};

export default Knowledge;