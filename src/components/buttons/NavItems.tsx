"use client"
import React, { useState } from "react";

const NavItems = ({dark, iconSize} : any) => {

    const [active, setActive] = useState(null);

    const handleClick = (type: any) => {
        setActive(type);
        const targetElement = document.getElementById(`${type}`);
        if (targetElement) {
            const offset = -150;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: targetPosition + offset,
                behavior: "smooth",
            });
        }
    }
    
  return (
    <div className="flex justify-between items-center w-[30rem] min-w-[20rem]">
        <button onClick={() => handleClick('about')} className={`text-primary-dark dark:text-primary-light`}>About</button>
        <button onClick={() => handleClick('knowledge')} className={`text-primary-dark dark:text-primary-light`}>Knowledge</button>
        <button onClick={() => handleClick('projects')} className={`text-primary-dark dark:text-primary-light`}>Projects</button>
        <button onClick={() => handleClick('contact')} className={`text-primary-dark dark:text-primary-light`}>Contact</button>
        <a className={`text-primary-dark dark:text-primary-light`} href="/SuppleX/about">SuppleX</a>
    </div>
  );
};

export default NavItems;