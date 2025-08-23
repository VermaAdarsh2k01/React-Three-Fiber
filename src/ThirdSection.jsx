import React, { useRef } from 'react'
import { useMediaQuery } from 'react-responsive'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ThirdSection = () => {
    const containerRef = useRef(null);
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const summrFontSize = isMobile ? "12rem" : "20rem"
    let fontSize 
    if(isMobile){
        fontSize = "3rem"
       
    }
    else{
        fontSize = "6.5rem"
       
    }

    useGSAP(
        () => {
            if (!containerRef.current) return;

            // Get the center video element
            const centerElement = containerRef.current.querySelector('.third-stagger:first-child');
            // Get left and right text components
            const leftElement = containerRef.current.querySelector('.third-stagger:nth-child(2)');
            const rightElement = containerRef.current.querySelector('.third-stagger:nth-child(3)');
            
            if (!centerElement || !leftElement || !rightElement) return;

            // Set initial states
            gsap.set(centerElement, {
                
                y: 50,
            });

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

            // Create main timeline with ScrollTrigger
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    end: "bottom 20%",
                    scrub: 1,
                    markers: true,
                }
            });

            // Phase 1: Elements enter (0% - 40% of scroll)
            tl.to(centerElement, {
                y: 0,
                scale: 1,
                duration: 0.4,
                ease: "power2.out",
            }, 0)
            .to(leftElement, {
                opacity: 1,
                x: 0, // Move to original position
                y: 0,
                duration: 0.4,
                ease: "power2.out",
            }, 0.1) // Slight delay
            .to(rightElement, {
                opacity: 1,
                x: 0, // Move to original position
                y: 0,
                duration: 0.4,
                ease: "power2.out",
            }, 0.1) // Slight delay

            // Phase 2: Elements stay in place (40% - 60% of scroll)
            .to([centerElement, leftElement, rightElement], {
                duration: 0.2, // Hold position
            }, 0.4)

            // Phase 3: Elements exit - move away from center (60% - 100% of scroll)
            .to(centerElement, {
                opacity: 0.3,
                scale: 0.8,
                y: -30,
                duration: 0.4,
                ease: "power2.in",
            }, 0.6)
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
            }, 0.6);

        },
        { scope: containerRef }
    );
  return (
    <div ref={containerRef} className='third-section h-[100vh] w-full overflow-hidden relative'>
        <div className='absolute lg:-top-10 left-1/2 -translate-x-1/2 w-full pointer-events-none flex justify-center third-stagger'>
            <div className='relative'>
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className='absolute inset-0 w-full h-full object-cover'
                    style={{
                        WebkitMask: 'url(data:image/svg+xml;base64,' + btoa(`
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300">
                                <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" 
                                      font-family="Arial Black, sans-serif" font-size="200" font-weight="900" 
                                      letter-spacing="-0.15em">SUMMR</text>
                            </svg>
                        `) + ')',
                        mask: 'url(data:image/svg+xml;base64,' + btoa(`
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 300">
                                <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" 
                                      font-family="Arial Black, sans-serif" font-size="200" font-weight="900" 
                                      letter-spacing="-0.15em">SUMMR</text>
                            </svg>
                        `) + ')',
                        WebkitMaskSize: 'contain',
                        maskSize: 'contain',
                        WebkitMaskRepeat: 'no-repeat',
                        maskRepeat: 'no-repeat',
                        WebkitMaskPosition: 'center',
                        maskPosition: 'center'
                    }}
                >
                    <source src="/SummrVideo.mp4" type="video/mp4" />
                </video>
                <p 
                    className='haas-black text-[8rem] xs:text-[11rem] lg:text-[22rem] xl:text-[20rem] leading-none whitespace-nowrap tracking-[-0.01rem] lg:tracking-[-0.15em] opacity-0'
                >
                    SUMMR
                </p>
            </div>
        </div>

        <div className='absolute bottom-[10%] lg:bottom-[20%] left-[6%] lg:left-[10%] xl:left-[15%] w-[30%] lg:w-[25%] xl:w-[20%] pointer-events-none flex flex-col text-left third-stagger'>
            <img src="/ArrowRight.png" className='w-[60%] lg:w-[40%] ml-auto transform rotate-180 '/>
            <p className='haas-med text-[1.2rem] xs:text-[1.5rem] leading-none lg:whitespace-nowrap'>Micro-Vent Seal Cap</p>
            <p className='haas text-[0.9rem] xs:text-[1rem] leading-none mt-2'>A hidden ring magnet snaps the cap shut with a reassuring “click,” while micro-vent grooves equalize pressure so the product stays fresh, not sweaty, in hot bags or gym lockers.</p>
        </div>


        <div className='absolute bottom-[40%] lg:bottom-[20%] right-[6%] lg:right-[10%] xl:right-[15%] w-[30%] lg:w-[25%] xl:w-[20%] pointer-events-none flex flex-col text-right third-stagger'>
            <p className='haas-med text-[1.5rem] leading-none lg:whitespace-nowrap'>Side-Click Elevation </p>
            <p className='haas text-[0.9rem] xs:text-[1rem] leading-none mt-2'>A low-profile button sits flush along the barrel. One satisfying click advances precisely 1 mm of product—no messy over-twist, and you can operate it single-handedly while on the move.</p>
            <img src="/ArrowRight.png" className='w-[60%] lg:w-[40%] mr-auto  '/>
        </div>

       
    </div>
  )
}

export default ThirdSection