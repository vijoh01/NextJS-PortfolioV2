"use client"
import '../../app/globals.css'
import React from "react";
import Image from 'next/image';
import me from '@/imgs/app.png'
import blue_waves_top from "@/imgs/blue_waves_top.svg"
import { PiArrowSquareOutThin } from "react-icons/pi";

const Header = () => {
  return (
    <main className="w-full bg-primary-light dark:bg-primary-dark flex flex-col items-center justify-center overflow-hidden sm:h-screen">
      <div></div>
        <div className="flex items-center md:justify-evenly md:max-w-[60rem] flex-col md:flex-row-reverse w-full">
      <Image className="pointer-events-none w-[200px] sm:w-[280px] rounded-3xl mt-10 md:mt-0" src={me} alt="Vijoh Light Logo" />
      <div className="mt-10 md:mt-10 max-w-[17rem] sm:max-w-[27rem] sm:ml-10">
        <h1 className="w-full md:mt-0 text-3xl sm:text-5xl text-primary-dark dark:text-primary-light">SuppleX</h1>
        <p className="mt-5 mb-5 text-primary-dark dark:text-primary-light">This app is developed using React Native and is availible on booth <a style={{color: "lightblue"}} href=''>Play Store</a> and <a style={{color: "lightblue"}} href=''>Appstore</a>. Supple is a mobile health app designed to help users track their daily vitamin supplement intake, identify deficiencies, and optimize their vitamin levels. The app is aimed at individuals who want to monitor their nutrient intake, particularly those who use supplements to achieve specific health goals or manage dietary restrictions.</p>

        <p className="mt-5 mb-16 text-primary-dark dark:text-primary-light">By focusing on vitamin intake from supplements, Supple raises awareness of nutritional needs and reduces the risk of vitamin deficiencies. The app provides tools for users to reach their nutritional goals and improve their health over time. Rather than offering food recommendations, Supple supports users in maintaining their supplement regimen as a valuable addition to their diet.

Supple is user-friendly and engaging, motivating users to actively track their supplement intake. By making information easily accessible and tailored to each user&apos;s needs, the app strives to build a solid foundation for a healthier lifestyle. </p>
        <div className="flex flex-wrap items-center mb-10">
        <a className="flex justify-between items-center bg-primary-dark text-primary-light dark:bg-primary-light dark:text-primary-dark py-2 px-3 rounded-md btn-text font-bold" download>Appstore<PiArrowSquareOutThin className="ml-2 fill-primary-light size-4 dark:fill-primary-dark"/></a>
        <a className="flex justify-between items-center bg-primary-dark text-primary-light dark:bg-primary-light ml-2 sm:ml-5 dark:text-primary-dark py-2 px-3 rounded-md btn-text font-bold" download>Play Store<PiArrowSquareOutThin className="ml-2 fill-primary-light size-4 dark:fill-primary-dark"/></a>
        <a href={"/SuppleX/privacy-policy"} className="text-primary-dark dark:text-primary-light underline mt-3 sm:mt-0 sm:ml-10">Privacy Policy</a>
        </div>
        
      </div>
      </div>
    </main>
  );
};

export default Header;