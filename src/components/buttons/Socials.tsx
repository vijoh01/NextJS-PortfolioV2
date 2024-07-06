"use client"
import React from "react";

import { PiLinkedinLogo, PiGithubLogo, PiEnvelope } from "react-icons/pi";

const Socials = ({dark, iconSize} : any) => {
  return (
    <div className="flex justify-between items-center w-full max-w-28">
      <PiLinkedinLogo size={iconSize} className={`${dark ? "fill-primary-dark" : "fill-primary-light"}`}/>
      <PiGithubLogo size={iconSize} className={dark ? "fill-primary-dark" : "fill-primary-light"}/>
      <PiEnvelope size={iconSize} className={dark ? "fill-primary-dark" : "fill-primary-light"}/>
    </div>
  );
};

export default Socials;