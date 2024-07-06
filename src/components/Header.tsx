"use client"
import React from "react";
import Image from 'next/image';
import me from '@/imgs/me.png'
import blue_waves_top from "@/imgs/blue_waves_top.svg"
import { PiArrowSquareOutThin } from "react-icons/pi";

const Header = () => {
  return (
    <div className="w-full bg-primary-light dark:bg-primary-dark flex flex-col items-center justify-between overflow-hidden h-[42rem]">
        <div className="flex items-center md:justify-evenly md:max-w-[60rem] flex-col md:flex-row w-full mt-5 sm:mt-0">
      <Image className="pointer-events-none w-[200px] sm:w-[340px]" src={me} alt="Vijoh Light Logo" />
      <div className="mt-10 md:mt-10 max-w-[17rem] sm:max-w-[27rem] ">
        <h1 className="w-full md:mt-16 text-3xl sm:text-5xl text-primary-dark dark:text-primary-light">Code and Design, I Make Ideas Real.</h1>
        <p className="mt-5 mb-5 text-primary-dark dark:text-primary-light">Discover my expertise in React.js and web development through my latest projects.</p>
        <div className="flex items-center mb-10">
        <a href={"/api/download"} className="flex justify-between items-center bg-primary-dark text-primary-light dark:bg-primary-light dark:text-primary-dark py-2 px-5 rounded-md btn-text font-bold" download>Resume<PiArrowSquareOutThin className="ml-2 fill-primary-light size-4 dark:fill-primary-dark"/></a>
        <a href="#contact" className="text-primary-dark dark:text-primary-light underline ml-10">Contact</a>
        </div>
        
      </div>
      </div>
      <Image className="pointer-events-none w-full min-w-max inset-0 scale-110 z-10" src={blue_waves_top} alt="Vijoh Light Logo" />
    </div>
  );
};

export default Header;