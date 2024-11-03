"use client"
import React, { useState } from "react";
import Image from 'next/image';

import black_wave_footer from "@/imgs/black_wave_footer.svg"
import { sendContactForm } from "@/data-access";

const initValues = { name: "", email: "", msg: "" };
const initState = { values: initValues };

const Contact = () => {
    const [state, setState] = useState(initState);
    const [message, setMessage] = useState("");

    const { values }: any = state;

    const handleChange = ({ target }: any) => setState((prev) => ({
        ...prev, values: {
            ...prev.values,
            [target.name]: target.value,
        }
    }));

    function isCooldownElapsed(cooldownDuration: any) {
        const lastMessageTime = localStorage.getItem('lastMessageTime');
        if (!lastMessageTime) {
            return true;
        }

        const currentTime = Date.now();
        const timeDifference = currentTime - parseInt(lastMessageTime, 10);

        return timeDifference >= cooldownDuration;
    }

    // Function to set the last message time in localStorage
    function setLastMessageTime() {
        const currentTime: any = Date.now();
        localStorage.setItem('lastMessageTime', currentTime);
    }

    // Example usage when sending a message
    const cooldownDuration = 15000; // 1 minute cooldown

    const onSubmit = async (e: any) => {
        e.preventDefault();
        setState((prev) => ({
            ...prev,
        }))
        if (isCooldownElapsed(cooldownDuration)) {
            setMessage('Sending..');
            const res = await sendContactForm(values);
            setMessage(res.message);
            setLastMessageTime();
        } else {

            setMessage('Please wait before sending another message.');
        }
    }

    return (
        <div className="w-full bg-primary-light text-primary-dark flex flex-col items-center pt-20 md:pt-10" id="contact">
      
          
                <form className='flex flex-col w-full sm:w-[40rem] px-5 mb-20'>
                <h1 className="text-4xl w-full">Connect With Me</h1>
                <p className="my-4 text-lg mb-10">Whether you have a project in mind, a question to ask, or just want to say hi, I&apos;m all ears (virtually speaking, of course).</p>
                    <div className="flex w-full flex-col sm:flex-row items-center justify-between">
                        <div className="flex flex-col sm:mr-2 w-full">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" className='px-1 py-1 text-primary-dark border border-primary-dark border-opacity-20' value={values.name} onChange={handleChange} required />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className='px-1 py-1 text-primary-dark border border-primary-dark border-opacity-20' value={values.email} onChange={handleChange} required />
                        </div>
                    </div>
                    <label className='mt-2' htmlFor="msg">Message</label>
                    <textarea name="msg" id="msg" className='pl-1 max-h-52 min-h-[3rem] text-primary-dark border border-primary-dark border-opacity-20' value={values.msg}  onChange={handleChange} required />

                    <button onClick={onSubmit} type='submit' className='w-full bg-primary-dark text-primary-light px-3 py-2 mt-5'>Send Message</button>
                    <p className='mb-2'>{message}</p>
                </form>


          
            <Image className="pointer-events-none w-full min-w-max inset-0 scale-110" loading="lazy" src={black_wave_footer} alt="Vijoh Light Logo" />
        </div>
    );
};

export default Contact;