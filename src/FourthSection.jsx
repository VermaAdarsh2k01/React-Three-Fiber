import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FourthSection = () => {
  const containerRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 768 })

  // Stagger animation for fourth-stagger elements
  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Get all elements with fourth-stagger class
      const leftElement = containerRef.current.querySelector('.fourth-stagger:first-child');
      const rightElement = containerRef.current.querySelector('.fourth-stagger:nth-child(2)');
      const centerElement = containerRef.current.querySelector('.fourth-stagger:nth-child(3)');
      
      if (!leftElement || !rightElement || !centerElement) return;

      // Set initial states
      gsap.set(leftElement, {
        opacity: 0,
        x: -100, // Start from left
        y: 20
      });

      gsap.set(rightElement, {
        opacity: 0,
        x: 100, // Start from right
        y: 20
      });

      gsap.set(centerElement, {
        opacity: 0,
        y: 50,
        scale: 0.9
      });

      // Create main timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 20%",
          scrub: 1,
        }
      });

      // Phase 1: Elements enter (0% - 40% of scroll)
      tl.to(leftElement, {
        opacity: 1,
        x: 0, // Move to original position
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      }, 0)
      .to(rightElement, {
        opacity: 1,
        x: 0, // Move to original position
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      }, 0) // Same timing as left element 
      .to(centerElement, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      }, 0.2) // More delay for center element

      // Phase 2: Elements stay in place (40% - 60% of scroll)
      .to([leftElement, rightElement, centerElement], {
        duration: 0.2, // Hold position
      }, 0.4)

      // Phase 3: Elements exit - fade out (60% - 100% of scroll)
      .to(leftElement, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.in",
      }, 0.6)
      .to(rightElement, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.in",
      }, 0.6)
      .to(centerElement, {
        opacity: 0.3,
        scale: 0.8,
        y: 30,
        duration: 0.4,
        ease: "power2.in",
      }, 0.6);

    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className='third-section h-[100vh] w-full overflow-hidden relative rounded-b-[4rem] bg-white'>
        
        <div className='absolute bottom-[60%] xs:bottom-[30%] md:bottom-[50%] lg:top-[20%] left-[6%] lg:left-[10%] xl:left-[15%] w-[35%] lg:w-[25%] xl:w-[20%] pointer-events-none flex flex-col text-left fourth-stagger'>
            <img src="/ArrowRight.png" className='w-[60%] lg:w-[40%] lg:ml-auto transform rotate-180 '/>
            <p className='haas-med text-[1.2rem] xs:text-[1.5rem] leading-none xl:whitespace-nowrap'>Ergonomic Contour-Glide Head</p>
            <p className='haas text-[1rem] leading-none mt-2'>The stick’s applicator surface is subtly concave, mirroring the natural curve of the underarm. Users get full, even coverage in a single swipe without digging or dragging.</p>
        </div>


        {isMobile ? (
          (<div className='absolute bottom-[40%] xs:bottom-[60%] lg:top-[20%] right-[6%] lg:right-[10%] xl:right-[15%] w-[35%] lg:w-[25%] xl:w-[20%] pointer-events-none flex flex-col text-right fourth-stagger'>
            <img src="/ArrowLeft.png" className='w-[60%] lg:w-[40%] ml-auto '/>
            <p className='haas-med text-[1.2rem] xs:text-[1.5rem] leading-none lg:whitespace-nowrap'>Clear Reserve Window </p>
            <p className='haas text-[0.9rem] xs:text-[1rem] leading-none mt-2'>A matte, rubberized coating resists fingerprints and offers a secure grip—even with wet hands. A slim, crystal-clear window lets users see exactly how much stick remains, eliminating guesswork and last-minute repurchases.</p>
            
        </div>)
        ) : (<div className='absolute bottom-[30%] lg:top-[20%] right-[6%] lg:right-[10%] xl:right-[15%] w-[30%] lg:w-[25%] xl:w-[20%] pointer-events-none flex flex-col text-right fourth-stagger'>
            
          <p className='haas-med text-[1.5rem] leading-none xl:whitespace-nowrap'>Clear Reserve Window </p>
          <p className='haas text-[0.9rem] xs:text-[1rem] leading-none mt-2'>A matte, rubberized coating resists fingerprints and offers a secure grip—even with wet hands. A slim, crystal-clear window lets users see exactly how much stick remains, eliminating guesswork and last-minute repurchases.</p>
          <img src="/ArrowRight.png" className='w-[40%] mr-auto '/>
      </div>)}
        

       <div className='absolute bottom-[15%] lg:bottom-[30%] left-1/2 -translate-x-1/2 fourth-stagger'>
        <div className='relative flex items-center justify-center'>
          <img src="/Oval.png" alt="Oval background" className='w-[200px] h-auto' />
          <a 
            href="#" 
            className='absolute inset-0 flex items-center justify-center text-black text-lg hover:font-black transition-colors duration-200 cursor-pointer haas-med'
          >
            Avail Now
          </a>
        </div>
       </div>
       <img 
        src="/Instructions.png" 
        className='absolute bottom-10 left-1/2 -translate-x-1/2 w-[150px] h-auto' 
       /> 

       
    </div>
  )
}

export default FourthSection
