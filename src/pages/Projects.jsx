/* eslint-disable no-unused-vars */
import { projects } from "../assets/projects";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Grid, Navigation, Pagination } from 'swiper/modules';
import ProjectDetail from "../components/ProjectDetail";
import { useState} from "react";
import { animated, useSpring } from "@react-spring/web";
import { AnimatePresence, motion } from "framer-motion";

export default function Projects() {

  const [isShow, setIsShow] = useState(false)
  const [itemSelected, setItemSelected] = useState([])

  const handleItemClick = (id) => {
    const data = projects.filter(item => item.id === id)
    if(data){
      setItemSelected(data)
      setIsShow(true)
    }
  }

  return (
    <div id="projects" className="relative h-screen flex flex-col justify-center items-center pt-20 pb-10 px-5">
        <div className="font-bold text-2xl md:text-3xl lg:text-4xl py-6 text-slate-800">Projects</div>
        <Swiper
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          grid={{
            rows: 3,
          }}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay,Grid, Pagination, Navigation]}
          className="mySwiper w-full gap-4"
          breakpoints={{
            640:{
              slidesPerView:3,
              grid:{
                rows:2
              }
            },
            768:{
              slidesPerView:3,
              grid:{
                rows:3
              }
            },
            1024: {
              slidesPerView:3,
              grid:{
                rows:2
              }
            },
          }}

        >

        {projects.map(item => (
          <SwiperSlide key={item.id} className='flex items-center justify-center'>
            <motion.div layoutId={item.id} className='group relative border-2 rounded-lg overflow-hidden h-full w-full hover:transition hover:duration-200 hover:opacity-80 hover:ease-in' onClick={() => handleItemClick(item.id)}>
              <img src={item.imgTN} alt={item.title} className='w-full h-full object-cover' />

              <div className="absolute top-0 hidden group-hover:block cursor-pointer bg-blue-500/95 w-full h-full ">
                <div className="flex flex-col justify-center items-center h-full text-center">
                  <div className="text-sm md:text-lg text-slate-100">{item.techuse}</div>
                  <div className="text-base md:text-xl font-semibold text-white">{item.title}</div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
        </Swiper>

      {isShow && (
        <AnimatePresence>
          <motion.div layoutId={itemSelected[0].id}  className="absolute fixed inset-0 bg-slate-400/90 flex items-center justify-center z-10">
            <ProjectDetail item={itemSelected} isShow={isShow} setIsShow={setIsShow}/>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}
