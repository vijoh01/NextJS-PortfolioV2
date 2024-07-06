"use client"
import React from "react";
import Image from 'next/image';
import blue_waves_bottom from "@/imgs/blue_waves_bottom.svg"
import { PiLayout } from "react-icons/pi";

const About = () => {
    return (
        <div className="w-full bg-blue-100 flex flex-col items-center justify-between h-[35rem] md:h-[35rem]" id="about">
            <div className="flex flex-col md:flex-row md:justify-evenly items-center w-full h-full  md:pb-10">
                <div className="flex flex-col justify-center max-w-[17rem] sm:max-w-[27rem] h-full">
                    <h2 className="text-4xl text-primary-dark">Innovative Solutions</h2>
                    <p className="mt-4 text-primary-dark text-lg">I have dedicated myself to web development with a
                        passion for programming and several years of experience
                        in the field. My creativity and analytical thinking have been
                        crucial in creating innovative solutions. I thrive in team
                        environments and always have an eye for detail.</p>
                </div>
                <PiLayout size={200} className={"hidden md:flex fill-primary-dark"} />
            </div>
            <Image className="pointer-events-none w-full min-w-max inset-0 scale-110" loading="lazy" src={blue_waves_bottom} alt="Vijoh Light Logo" />


        </div>
    );
};

export default About;