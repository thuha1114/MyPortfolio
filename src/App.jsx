import { Animator, batch, Fade, FadeIn, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky, Zoom, ZoomIn, ZoomOut } from 'react-scroll-motion';
import './App.css';
import About from './pages/About';
import WhatILearn from './pages/WhatILearn';
import Navbar from './components/Navbar';
import Skills from './pages/Skills';
import { useEffect, useState } from 'react';
import { GrLinkTop } from "react-icons/gr";
import Projects from './pages/Projects';
import { domAnimation, LazyMotion, m, motion } from 'framer-motion';
import Contact from './pages/Contact';

function App() {

  const [isShow, setIsShow] = useState(false);

    
  const handleSection = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    console.log('id: ', targetId)
    console.log('element: ', targetElement)
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });    
    }
  }

  useEffect(()=> {
    
    const handleScroll = () => {
      const height = window.scrollY
      if(height > 400)
        setIsShow(true)
      else
        setIsShow(false)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.addEventListener('scroll', handleScroll)
  },[])

  const handleScrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }


  return (
     <div  className='relative h-full w-full'>
        {isShow && (
          <div className="fixed bottom-5 right-5 cursor-pointer z-10 text-2xl hover:opacity-60 hover:duration-300 font-bold" onClick={handleScrollToTop}>
            <GrLinkTop className='text-blue-700' />
          </div>
        )}
        <Navbar handleSection={handleSection} />
        <ScrollContainer>
          {/* About Page */}
          <ScrollPage>
            <Animator animation={batch(Fade(), MoveOut(0, -200))}>
              <About />
            </Animator>
          </ScrollPage>

          {/* What I Learn Page */}
          <ScrollPage>
            <Animator id animation={batch(Fade(), MoveIn(0, -200))}>
              <WhatILearn handleSection={handleSection} />
            </Animator>
          </ScrollPage>

          {/* Skills Page */}
          <ScrollPage page={2}>
            <Animator animation={batch(FadeIn(), MoveOut(0,-200))}>
              <Skills />
            </Animator>
          </ScrollPage>

          {/* Projects Page */}
          <ScrollPage>
            <Animator animation={batch(Fade())}>
              <Projects />
            </Animator>
          </ScrollPage>

          {/* Contact */}
          <ScrollPage>
            <Animator animation={batch(Fade(),ZoomOut())}>
              <Contact />
            </Animator>
          </ScrollPage>
        </ScrollContainer>


      </div>
  );
}

export default App;
