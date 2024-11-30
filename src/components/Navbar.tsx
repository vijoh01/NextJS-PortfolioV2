"use client"
import React from "react";
import lightLogo from "@/imgs/vijoh-light.png"
import darkLogo from "@/imgs/vijoh-dark.png"
import Image from 'next/image';
import Socials from "./buttons/Socials";
import NavItems from "./buttons/NavItems";

const Navbar = () => {
  return (
    <div className="w-full h-8 sm:h-14  bg-primary-light dark:sm:bg-[#0e0e0e76] dark:bg-[#0e0e0e71] flex sm:justify-between items-center pr-12">
      <div className="pointer-events-none inset-0 ">
      <Image className="pointer-events-none sm:ml-12 mr-10 ml-5 sm:mr-24 w-14 sm:w-20 dark:block hidden" src={lightLogo} alt="Vijoh Light Logo" />
      <Image className="pointer-events-none sm:ml-12 mr-10 ml-5 sm:mr-24 w-14 sm:w-20 block dark:hidden" src={darkLogo} alt="Vijoh Light Logo" />
      </div>
      
      <div className="hidden sm:flex w-fit">
      <NavItems/>
      </div>
    </div>
  );
};

export default Navbar;