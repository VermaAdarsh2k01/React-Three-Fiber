import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import RotatingWords from './RotatingWords.jsx'


gsap.registerPlugin(ScrollTrigger)

const SecondSection = () => {

    const sectionRef = useRef(null)

    useGSAP(() => {
        if (!sectionRef.current) return;

        const leftElements = sectionRef.current.querySelectorAll('.animate-item:nth-child(1), .animate-item:nth-child(1) .animate-item');
        const rightElements = sectionRef.current.querySelectorAll('.second-section > div:last-child .animate-item');
        
        gsap.set(leftElements, {
            opacity: 0,
            x: -50, 
            y: 30
        });

        gsap.set(rightElements, {
            opacity: 0,
            x: 50, 
            y: 30
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
                end: "bottom 20%",
                scrub: 1,
            }
        });

        tl.to(leftElements, {
            opacity: 1,
            x: 0, 
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.1
        }, 0)
        .to(rightElements, {
            opacity: 1,
            x: 0, 
            y: 0,
            duration: 0.4,
            ease: "power2.out",
            stagger: 0.1
        }, 0.2)

        
        .to([...leftElements, ...rightElements], {
            duration: 0.2,
        }, 0.4)

        
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
        
        <div className='absolute top-24 left-2 lg:left-12 xl:left-30  w-[100%] lg:w-[60%] xl:w-[50%] flex flex-col justify-between items-start animate-item '>
            
            <div>
                <p className='haas-med text-wrap text-[3rem] lg:text-[4.5rem] xl:text-[4rem] leading-none text-start'>
                    Perfect For All{' '}
                    <RotatingWords 
                        words={['Occasions', 'Events', 'Moments', 'Celebrations']}
                        className='text-orange-600'
                    />
                </p>
            </div>

            
            <div className='animate-item w-[99%] lg:w-[60%] text-wrap mt-4 lg:mt-8'>
                <p className="haas text-start text-[1rem] lg:leading-6 leading-[1.2rem]  ">
                From morning meetings to midnight workouts, SUMMR Stick adapts to every body and every agenda. Our balanced, pH-friendly formula neutralises odour without clogging pores, while the clean, unisex scent fades to let your fragrance shine. One glide, zero residue—confidence for everyone, everywhere. 
                </p>
            </div>
        </div>
        
        
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
