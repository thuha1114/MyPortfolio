/* eslint-disable react/prop-types */

import { IoMdClose } from "react-icons/io";

// eslint-disable-next-line no-unused-vars
export default function ProjectDetail({item, isShow, setIsShow,}) {
  return (
    <div className="relative flex flex items-center justify-center w-full h-screen">
        <div className="hover:duration-200 hover:ease-in-out absolute z-10 top-1/4 right-10 md:top-1/4 md:right-16 lg:top-20 lg:right-48 cursor-pointer hover:opacity-60 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-white flex justify-center items-center">
          <IoMdClose className="md:text-lg lg:text-2xl" onClick={() => setIsShow(false)}/>
        </div>
        <div className="flex flex-col items-center pt-10 ">
          <img className="w-[300px] md:w-[600px] lg:w-[800px]" src={item[0].imgFS} />
          {/* <p className="font-bold text-3xl pt-5 text-slate-800">{item[0].title}</p> */}
          <div className="flex flex-col justify-center items-center h-full text-center pt-5 px-10">
            <div className="md:text-lg lg:text-xl text-slate-100">{item[0].techuse}</div>
            <div className="text-lg md:text-xl lg:text-2xl font-semibold text-white">{item[0].title}</div>
          </div>
        </div>

    </div>
  )
}
