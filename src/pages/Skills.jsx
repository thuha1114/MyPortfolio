/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import { FaCode, FaUsers } from "react-icons/fa6";
import { IoLanguage } from "react-icons/io5";

export default function Skills() {
  const [category, setCategory] = useState('programming');

  const show = {
    opacity: 1,
    display: "block",
    // transition: { duration: 0.5 }
  };

  const hide = {
    opacity: 0,
    transitionEnd: {
      display: "none"
    },
    // transition: { duration: 0.5 }
  };

  return (
    <div id="skills" className="w-full bg-yellow-200/10">
      <div className="md:pt-10 px-5 md:px-20 grid grid-cols-5 md:grid-cols-6 lg:grid-cols-8 flex items-center justify-center h-full">
        {/* List of skills */}
        <div className="col-span-2 md:col-span-3 lg:col-span-3 bg-yellow-300/10 p-2 md:p-5 rounded-lg border-2 border-gray-200/60 shadow-lg">
          {/* Programming languages */}
          <motion.div
            className="cursor-pointer bg-gradient-to-tl from-red-300 via-orange-200 to-puchsia-800 mb-2 md:mb-5 p-1.5 md:p-2 rounded-lg"
            onClick={() => setCategory('programming')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="flex flex-col md:flex-row justify-center items-center bg-white rounded-lg pt-2 md:p-5">
              <div className="flex items-center justify-center w-8 md:w-24 lg:w-40 h-8 md:h-10 lg:h-16 rounded-full bg-orange-300">
                <FaCode className="text-base md:text-xl lg:text-3xl" />
              </div>
              <div className="text-align ml-1 md:ml-5 flex flex-col justify-center items-center">
                <div className="font-bold text-sm md:text-xl lg:text-2xl text-slate-800 pb-2 text-slate-700">Programming</div>
                <div className="text-sm lg:text-lg hidden md:block">Have many opportunities to utilize many programming languages such as: Java, PHP, Javascript, Python,...</div>
              </div>
            </div>
          </motion.div>

          {/* Team work */}
          <motion.div
            className=" cursor-pointer bg-gradient-to-tr from-red-300 via-orange-200 to-puchsia-800 mb-2 md:mb-5 p-1.5 md:p-2 rounded-lg"
            onClick={() => setCategory('team-work')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="flex flex-col md:flex-row justify-center items-center bg-white rounded-lg pt-2 md:p-5">
              <div className="flex items-center justify-center w-8 md:w-24 lg:w-40 h-8 md:h-10 lg:h-16 rounded-full bg-orange-300">
                <FaUsers className="text-base md:text-xl lg:text-3xl" />
              </div>
              <div className="text-align ml-1 md:ml-5 flex flex-col justify-center items-center">
                <div className="font-bold text-sm md:text-xl lg:text-2xl text-slate-800 pb-2 text-slate-700">Team Work</div>
                <div className="text-sm lg:text-lg hidden md:block">Lead several project teams, focusing on goal achievement and team collaboration.</div>
              </div>
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            className="cursor-pointer bg-gradient-to-tr from-red-300 via-orange-200 to-puchsia-800 p-1.5 md:p-2 rounded-lg"
            onClick={() => setCategory('languages')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="flex flex-col md:flex-row justify-center items-center bg-white rounded-lg pt-2 md:p-5">
              <div className="flex items-center justify-center w-8 md:w-24 lg:w-40 h-8 md:h-10 lg:h-16 rounded-full bg-orange-300">
                <IoLanguage className="text-base md:text-xl lg:text-3xl" />
              </div>
              <div className="text-align ml-1 md:ml-5 flex flex-col justify-center items-center">
                <div className="font-bold text-sm md:text-xl lg:text-2xl text-slate-800 pb-2 text-slate-700">Languages</div>
                <div className="text-sm lg:text-lg hidden md:block">Upper-Intermediate English level with the ability to read and research English documents.</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Description for each skills */}
        <div className="col-span-3 md:col-span-3 lg:col-span-5 w-full flex flex-col justify-center items-center h-screen">
         
          {/* Programming Languages */}
          {category === 'programming' && (
            <motion.div
              // animate={category === 'programming' ? show : hide}
              className="pl-5 md:pl-10 w-full flex flex-col justify-center items-center pt-20 text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <div className="font-bold text-lg md:text-2xl lg:text-4xl text-slate-700">Programming Languages</div>
              <div className="pb-5 pt-10 text-sm md:text-base lg:text-lg text-justify indent-8">
                Besides several programming languages I learned at university, I have also explored JavaScript frameworks such as ReactJS, NextJS, and React Native.
                Additionally, I am proficient in using CSS frameworks like Bootstrap, TailwindCSS, and Ant Design. Visit my github to see my detailed projects.
              </div>
              <a href="https://github.com/thuha1114" className="font-semibold text-sm md:text-base lg:text-lg py-3 px-5 md:px-10 rounded-full bg-blue-700 text-white hover:opacity-90 hover:scale-105 hover:duration-200 hover:ease-out">
                Visit My Github
              </a>
            </motion.div>

          )}

          {/* Team Work */}
          {category === 'team-work' && (
            <motion.div
              className="pl-5 md:pl-10 w-full flex flex-col justify-center items-center pt-20 text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <div className="font-bold text-lg md:text-2xl lg:text-4xl text-slate-700">Team Work</div>
              <div className="pb-5 pt-10 text-sm md:text-base lg:text-lg text-justify indent-8">
                During project periods, my teams commonly use Github to manage our code. Additionally, I have had several opportunities to lead project teams where I
                was responsible for motivating and guiding members to determine and achieve the goals with better results.
              </div>
            </motion.div>

          )}

          {/* Languages */}
          {category === 'languages' && (
            <motion.div
              className="pl-5 md:pl-10 w-full flex flex-col justify-center items-center pt-20 text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <div className="font-bold text-lg md:text-2xl lg:text-4xl text-slate-700">Languages</div>
              <div className="pb-5 pt-10 text-sm md:text-base lg:text-lg text-justify indent-8">
                Upper-Intermediate English level with TOEIC (L/R) score of 770/990. Moreover, I can communicate in English and read English documents related to major theories that
                aids in problem-solving.
              </div>
            </motion.div>

          )}
        </div>
      </div>
    </div>
  );
}
