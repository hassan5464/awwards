import React, { useEffect } from 'react'
import { useRef,useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from "react-icons/ti";
import { clsx } from 'clsx';
import {useWindowScroll} from "react-use";
import gsap from "gsap";


const Navbar = () => {
  const navContainerRef = useRef(null)
  const navItems = ["Nexus","Vault", "Prologue", "About", "Contact"];
  const audioElementRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive]  = useState(false);
  const {y: currentScrollY} = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState();



 // toggle audio and visual indicator
  const toggleAudioIndicator = () =>{
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  }
  // manage audio playback
  
useEffect(() => {
  if(isAudioPlaying ){
    audioElementRef.current.play();
  }else{
    audioElementRef.current.pause();
  }
}, [isAudioPlaying])

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);

    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);


  return (
    <div ref={navContainerRef} className='inset-x-0 fixed 
      top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6  '
      >
      <header className='absolute top-1/2 w-full -translate-y-1/2'>
          <nav className='flex items-center justify-between size-full p-4'>
            {/* { Logo and product button} */}
            <div className="flex">
              <img src="/img/logo.png" alt='logo'  className='w-10'  />
              <Button 
              id="porduct-button" 
              title="Product"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
              />
            </div> 
            {/* Navigation Links and Audio button */}
            <div className="flex h-full items-center">
              <div className="hidden md:block ">
                {navItems.map((item,index)=>(
                  <a key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn ">
                    {item}
                  </a>
                ))}
              </div>
              <button className='ml-10 flex items-center space-x-0.5' onClick={toggleAudioIndicator }>
                <audio ref={audioElementRef} src='/audio/loop.mp3'  loop className='hidden' />
                {[1,2,3,4].map((bar) => (
                  <div key={bar} className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })} style={{animationDelay: `${bar * 0.1}s`}}/>
                ))}
              </button>
            </div>
          </nav>
      </header>

    </div>
  )
}

export default Navbar