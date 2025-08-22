import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CleanImageCarousel from './CleanImageCarousel.jsx'
import VerticalTextAnimation from './VerticalTextAnimation.jsx'
import RotatingWords from './RotatingWords.jsx'

gsap.registerPlugin(ScrollTrigger)

const SecondSection = () => {

    const sectionRef = useRef(null)

    useGSAP(() => {
        gsap.fromTo('.animate-item', {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.second-section',
                start: 'top 80%',
                end: 'bottom 20%',
            }
        })
    }, { scope: '.second-section' })

  return (
    <div ref={sectionRef} className='second-section relative h-[100vh] w-full overflow-hidden'>
        {/* Combined heading and description container */}
        <div className='absolute top-24 left-12 w-[60%]  flex flex-col justify-between items-start animate-item '>
            {/* Main heading */}
            <div>
                <p className='haas-med text-wrap text-[6.5rem] leading-none text-start'>
                    Perfect For All{' '}
                    <RotatingWords 
                        words={['Occasions', 'Events', 'Moments', 'Celebrations']}
                        fontSize="6.5rem"
                        lineHeight="6.5rem"
                        className='text-orange-600'
                    />
                </p>
            </div>

            {/* Description text */}
            <div className='animate-item w-[60%] text-wrap mt-8'>
                <p className="haas text-start">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odio amet facilis commodi est dolore repellat architecto numquam. Nam quis odio unde, tempora fugiat iure nesciunt placeat ab eius praesentium. 
                </p>
            </div>
        </div>
        
        {/* Specifications Section - positioned at bottom */}
        <div className="absolute bottom-24 right-12 w-[50%] space-y-4">
            <div className="flex items-center justify-end gap-4 animate-item">
                <p className="haas text-lg">
                    <span className="haas-med me-2">Protection level:</span> Category 5 - Maximum Summer Defense
                </p>
            </div>
            
            <div className="flex items-center justify-end gap-4 animate-item">
                <p className="haas text-lg">
                    <span className="haas-med me-2">Sweat Resistance:</span> 48-hour minimum protection from your sweat
                </p>
            </div>
            
            <div className="flex items-center justify-end gap-4 animate-item">
                <p className="haas text-lg">
                    <span className="haas-med me-2">Formula type:</span> Aluminum-free with natural minerals - 15% active protection
                </p>
            </div>
        </div>
    </div>
  )
}

export default SecondSection
