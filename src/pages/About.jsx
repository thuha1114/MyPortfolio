/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import bg_img from '../assets/bg.png'

export default function About() {
    
    const handleScroll = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
    <div className='w-full h-full' style={{ backgroundImage: `url(${bg_img})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
        {/* Introductions */}
        <div className='flex flex-col justify-center items-center h-screen px-0 md:px-10 bg-blue-100/80 '>
            <div className='text-center flex flex-col justify-center items-center w-2/3'>
                <span>
                    <TypeAnimation
                        sequence={[
                            'Hello, I am Thu Ha!',
                            1000,
                            'I am looking for a Front-end internship.',
                            1000,
                            'Let\'s explore my portfolio!',
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ display: 'inline-block' }}
                        className="font-bold text-slate-800 md:font-semibold text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] mb-2"
                        repeat={Infinity}
                    />
                </span>
                <div className='border-b-4 border-yellow-500 md:w-1/6 w-1/4'></div>
                <div className=' text-slate-800 text-justify md:text-center text-base md:text-lg pt-5 font-medium mt-5 mb-10'>
                    Currently, I'm a senior at Sai Gon University. My major is Information Technology. I'm interested in creating websites, especially I would like to
                     become a Front-end developer. Here is some information about me!
                </div>
                <a href="#what-i-learn" onClick={handleScroll}>
                    <button className='hover:scale-105 hover:duration-200 hover:ease-in hover:opacity-90 border-2 border-blue-200 px-10 py-3 rounded-full text-sm md:text-lg uppercase font-semibold bg-blue-600 text-white'>
                        Find Out More
                    </button>
                </a>
            </div>
        </div>
    </div>
    );
}
