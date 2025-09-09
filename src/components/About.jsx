import React, {useEffect} from 'react'
import gsap from 'gsap';
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/all";
import AnimatedTitle from './Animatedtitle';

gsap.registerPlugin(ScrollTrigger)




const About = () => {
  

  // useEffect(() => {
  //   const clipAnimation = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#clip",
  //       start: "center center",
  //       end: "+=800 center",
  //       scrub: 0.5,
  //       pin: true,
  //       pinSpacing: true,   // التصحيح هنا
  //     }
  //   });

  //   clipAnimation.to(".mask-clip-path", {
  //     width: "100vw",
  //     height: "100vh",
  //     borderRadius: 0,
  //     ease: "none" // مع scrub غالباً تفضل ease none
  //   });

  //   return () => {
  //     // تنظيف عند إلغاء التثبيت
  //     if (clipAnimation.scrollTrigger) clipAnimation.scrollTrigger.kill();
  //     clipAnimation.kill();
  //   };
  // }, []);


  // ======

    useGSAP(() =>{
    const clipAnimation = gsap.timeline({
      scrollTrigger:{
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      }
    })
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      // تجنّب تحريك width/height كثيراً لأنهم يسببوا reflow/paint ويكونون أثقل. إذا ممكن،
      // استخدم transform: scale() أو clip-path أو translate لأنها GPU-accelerated وتعمل أنعم.
      // scale: 3,
      // transformOrigin: "center center",

      borderRadius: 0,
    })
})





  return (
    <div id="about" className='min-h-screen w-screen'>
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5 ">
        <h2 className="uppercase font-general text-sm md:text-[10px]">
          Welcome to Zentry
        </h2>
        
        <AnimatedTitle title="Disc<b>o</b>ver the world's <br/> l<b>a</b>rgest shared adventure"
        containerClass="mt-5 !text-black text-center"/>

        <div className="about-subtext ">
          <p>The Game of Games begins-your life, now an epic MMORPG</p>
          <p>Zentry unites every player from countless games and platforms</p>
        </div>
      </div>
      <div className="h-dvh w-screen " id="clip">
        <div className="mask-clip-path about-image">
        <img src="img/about.webp" alt="about img" 
        className='absolute top-0 left-0 object-cover size-full'   />
        </div>
      </div> 
    </div>
  )
}

export default About