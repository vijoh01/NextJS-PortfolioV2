"use client"
import React, { useEffect, useState } from "react";

import { PiUser, PiRocketLaunch, PiProjectorScreenChart, PiPaperPlane } from "react-icons/pi";

const MobileNav = () => {
    const [active, setActive] = useState(null);

    const handleClick = (type: any) => {
        setActive(type);
        const targetElement = document.getElementById(`${type}`);
        if (targetElement) {
            const offset = -20;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: targetPosition + offset,
                behavior: "smooth",
            });
        }
    }


    return (
        <div className="w-full h-12 z-30 bg-primary-light filter bg-opacity-70 dark:bg-primary-dark flex justify-evenly items-center fixed bottom-0 sm:hidden">
            <button onClick={() => handleClick('about')} className="text-primary-dark dark:text-primary-light" aria-label="About"><PiUser className={active === 'about' ? `fill-[black] dark:fill-[white]` : `fill-[#00000073] dark:fill-[#ffffff73]`} size={35} /></button>
            <button onClick={() => handleClick('knowledge')} className="text-primary-dark dark:text-primary-light" aria-label="Knowledge"><PiRocketLaunch className={active === 'knowledge' ? `fill-[black] dark:fill-[white]` : `fill-[#00000073] dark:fill-[#ffffff73]`} size={35} /></button>
            <button onClick={() => handleClick('projects')} className="text-primary-dark dark:text-primary-light" aria-label="Projects"><PiProjectorScreenChart className={active === 'projects' ? `fill-[black] dark:fill-[white]` : `fill-[#00000073] dark:fill-[#ffffff73]`} size={35} /></button>
            <button onClick={() => handleClick('contact')} className="text-primary-dark dark:text-primary-light" aria-label="Contact"><PiPaperPlane className={active === 'contact' ? `fill-[black] dark:fill-[white]` : `fill-[#00000073] dark:fill-[#ffffff73]`} size={35} /></button>
        </div>
    );
};

export default MobileNav;