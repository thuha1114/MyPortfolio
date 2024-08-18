/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import { FaBars } from "react-icons/fa6";
import { useState } from 'react';

export default function Navbar({handleSection}) {

    const [isShow, setIsShow] = useState(false)
    const variants = {
        open: { rotate:90, opacity: 0.8, x: 0},
        closed: { opacity: 1, x: "-30%" },
    }
    
    return (
        <div className='fixed top-0 left-0 w-full bg-blue-700/90 z-10'>
            <div className='flex flex-wrap md:flex-nowrap w-full justify-between items-center px-10 py-1  '>
                <div className="flex justify-between items-center w-full">
                    <img src={logo} className='w-48 md:w-52' />
                    <motion.div 
                        animate={isShow ? variants.open : variants.closed}
                        variants={variants}
                        
                    >
                        <FaBars className='sm:block md:hidden text-white text-2xl cursor-pointer' onClick={() => setIsShow(!isShow)} />
                    </motion.div>
                </div>
                <div className={`${isShow ? 'block pt-5' : 'hidden'} w-full md:block `}>
                    <ul className='flex justify-between items-center font-semibold md:text-lg text-white text-base'>
                        <motion.a href="#what-i-learn" onClick={handleSection}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <li>What I Learn</li>
                        </motion.a>
                        <motion.a href='#skills' onClick={handleSection}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <li>Skills</li>
                        </motion.a>
                        <motion.a href="#projects" onClick={handleSection}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <li>Projects</li>
                        </motion.a>
                        <motion.a href="#contact" onClick={handleSection}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <li>Contact</li>
                        </motion.a>
                    </ul>
                </div>
            </div>
        </div>
    )
}
