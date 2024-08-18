/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { TypeAnimation } from "react-type-animation";
import learn_img from '../assets/learn.png'

export default function WhatILearn({handleSection}) {

  return (
    <div id="what-i-learn" 
      
      style={{ backgroundImage: `url(${learn_img})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}
    >
      <div className="flex flex-col justify-center items-center h-screen bg-gray-300/90" >
        <span>
            <TypeAnimation
                sequence={[
                    'What did I learn at university?',
                    1000,
                    'What did I learn or during the projects?',
                    1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
                className="pl-5 text-center font-bold text-slate-800 md:font-semibold text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] mb-2"
                repeat={Infinity}
            />
        </span>
        <div className=" text-slate-800 text-justify md:text-center text-base md:text-lg pt-5 font-medium mt-5 mb-10 px-10 md:px-20">During college, I studied languages like Java, JavaScript, PHP, Python, and MySQL. I also gained 
        experience with design tools such as Figma, Drawio, and Balsamiq Mockup. Through university projects, I delved into JavaScript frameworks like ReactJS, NextJS, React Native and
         along with TypeScript. Additionally, I became proficient in using Bootstrap, TailwindCSS, and Headless UI and was also be able to use Ant 
         Design for creating stylish interfaces efficiently.</div>
        <a href="#skills" onClick={handleSection}>
          <button className='hover:scale-105 hover:duration-200 hover:ease-in hover:opacity-90 border-2 border-blue-200 px-10 py-3 rounded-full text-sm md:text-lg uppercase font-semibold bg-blue-600 text-white'>Get started!</button>
        </a>

      </div>
    </div>
  )
}
