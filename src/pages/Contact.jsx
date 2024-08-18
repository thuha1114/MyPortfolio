import { LuGithub } from "react-icons/lu";
import { FaPhoneFlip } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import contact_img from '../assets/contact-img.png'
import { motion } from "framer-motion";
import { Animator, MoveIn } from "react-scroll-motion";

export default function Contact() {
  return (
    <div id="contact" className='w-full h-screen flex flex-col justify-center items-center mt-10'>
      <Animator  animation={MoveIn(0, -1000)}>
      <div className="flex justify-center items-center">
        <img src={contact_img} alt="Contact Image" className="w-1/2 md:w-full py-10" />

      </div>
      </Animator>
      <Animator  animation={MoveIn(-1000, 0)}>
       <div className='font-bold text-3xl md:text-5xl text-neutral-700 text-center'>Get in touch</div>
      </Animator>
      <Animator  animation={MoveIn(-1000, 50)}>
        <div className="flex justify-center items-center">
          <div className='px-5 md:px-10 text-center font-semibold text-base md:text-xl lg:text-2xl py-10 text-neutral-600'>If you require more information, feel free contact me via some information below:</div>
        </div>
      </Animator>
      
      {/* Personal information */}
      <Animator  animation={MoveIn(0, 1000)}>
        <div className='flex justify-between '>
          <motion.a whileHover={{scale:1.2}} href="https://github.com/thuha1114"  className=" mx-2 w-12 h-12 md:w-14 md:h-14 flex justify-center items-center rounded-full bg-blue-500/90 hover:bg-blue-600 hover:duration-200 hover:transition hover:ease-in-out">
            <LuGithub className="text-xl md:text-3xl text-white" />
          </motion.a>
          <motion.a whileHover={{scale:1.2}} href="tel:0965820121"  className="mx-2 w-12 h-12 md:w-14 md:h-14 flex justify-center items-center rounded-full bg-blue-500/90 hover:bg-blue-600 hover:duration-200 hover:transition hover:ease-in-out">
            <FaPhoneFlip className="text-xl md:text-3xl text-white" />
          </motion.a>
          <motion.a whileHover={{scale:1.2}} href="mailto:nguyenha1234592@gmail.com"  className="mx-2 w-12 h-12 md:w-14 md:h-14 flex justify-center items-center rounded-full bg-blue-500/90 hover:bg-blue-600 hover:duration-200 hover:transition hover:ease-in-out">
            <SiGmail className="text-xl md:text-3xl text-white" />
          </motion.a>
          <motion.a whileHover={{scale:1.2}} href="https://www.linkedin.com/in/ntthuha/"  className="mx-2 w-12 h-12 md:w-14 md:h-14 flex justify-center items-center rounded-full bg-blue-500/90 hover:bg-blue-600 hover:duration-200 hover:transition hover:ease-in-out">
            <SiLinkedin className="text-xl md:text-3xl text-white" />
          </motion.a>
        </div>
      </Animator>
    </div>
  )
}
