import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CleanImageCarousel from './CleanImageCarousel.jsx'
import VerticalTextAnimation from './VerticalTextAnimation.jsx'
import RotatingWords from './RotatingWords.jsx'
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(ScrollTrigger)

const SecondSection = () => {

    const sectionRef = useRef(null)

    useGSAP(() => {
        if (!sectionRef.current) return;

        // Get individual elements for different animations
        const leftElements = sectionRef.current.querySelectorAll('.animate-item:nth-child(1), .animate-item:nth-child(1) .animate-item');
        const rightElements = sectionRef.current.querySelectorAll('.second-section > div:last-child .animate-item');
        
        // Set initial states for left elements (main heading and description)
        gsap.set(leftElements, {
            opacity: 0,
            x: -50, // Start from left
            y: 30
        });

        // Set initial states for right elements (specifications)
        gsap.set(rightElements, {
            opacity: 0,
            x: 50, // Start from right
            y: 30
        });

        // Create main timeline with ScrollTrigger
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                end: "bottom 20%",
                scrub: 1,
                markers: true,
            }
        });

        // Phase 1: Elements enter (0% - 40% of scroll)
        tl.to(leftElements, {
            opacity: 1,
            x: 0, // Move to original position
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.1
        }, 0)
        .to(rightElements, {
            opacity: 1,
            x: 0, // Move to original position
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.1
        }, 0.2) // Delay for right elements

        // Phase 2: Elements stay in place (40% - 60% of scroll)
        .to([...leftElements, ...rightElements], {
            duration: 0.2, // Hold position
        }, 0.4)

        // Phase 3: Elements exit - move away from center (60% - 100% of scroll)
        .to(leftElements, {
            opacity: 0,
            y: -20,
            duration: 0.4,
            ease: "power2.in",
            stagger: 0.05
        }, 0.6)
        .to(rightElements, {
            opacity: 0,
            y: -20,
            duration: 0.4,
            ease: "power2.in",
            stagger: 0.05
        }, 0.6);

    }, { scope: sectionRef })

  return (
    <div ref={sectionRef} className='second-section relative h-[100vh] w-full overflow-hidden'>
        {/* Combined heading and description container */}
        <div className='absolute top-24 left-2 lg:left-12 xl:left-30  w-[100%] lg:w-[60%] xl:w-[50%] flex flex-col justify-between items-start animate-item '>
            {/* Main heading */}
            <div>
                <p className='haas-med text-wrap text-[3rem] lg:text-[4.5rem] xl:text-[4rem] leading-none text-start'>
                    Perfect For All{' '}
                    <RotatingWords 
                        words={['Occasions', 'Events', 'Moments', 'Celebrations']}
                        className='text-orange-600'
                    />
                </p>
            </div>

            {/* Description text */}
            <div className='animate-item w-[99%] lg:w-[60%] text-wrap mt-4 lg:mt-8'>
                <p className="haas text-start text-[1rem] lg:leading-6 leading-[1.2rem]  ">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odio amet facilis commodi est dolore repellat architecto numquam. Nam quis odio unde, tempora fugiat iure nesciunt placeat ab eius praesentium. 
                </p>
            </div>
        </div>
        
        {/* Specifications Section - positioned at bottom */}
        <div className="absolute bottom-20 lg:bottom-24 left-2 lg:left-auto lg:right-12 xl:right-30 lg:w-[50%] w-[100%] lg:space-y-4">
            <div className="flex items-center justify-end gap-4 animate-item">
                <p className="haas text-lg lg:text-base xl:text-lg">
                    <span className="haas-med me-2">Protection level:</span> Category 5 - Maximum Summer Defense
                </p>
            </div>
            
            <div className="flex items-center justify-end gap-4 animate-item">
                <p className="haas text-lg lg:text-base xl:text-lg">
                    <span className="haas-med me-2">Sweat Resistance:</span> 48-hour minimum protection from your sweat
                </p>
            </div>
            
            <div className="flex items-center justify-end gap-4 lg:gap-2 animate-item">
                <p className="haas text-lg lg:text-base xl:text-lg">
                    <span className="haas-med me-2">Formula type:</span> Aluminum-free with natural minerals - 15% active protection
                </p>
            </div>
        </div>
    </div>
  )
}

export default SecondSection
