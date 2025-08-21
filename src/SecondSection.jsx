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
    <div ref={sectionRef} className='second-section h-[100vh] w-full overflow-hidden flex items-center justify-start pl-12'>
        <div className='w-[50%] h-full p-24'>
            <div className='flex flex-col justify-between h-full'>
                <p className='haas-med text-wrap text-[4rem] leading-none animate-item'>
                    Perfect For All{' '}
                    <RotatingWords 
                        words={['Occasions', 'Events', 'Moments', 'Celebrations']}
                        fontSize="4rem"
                        lineHeight="4rem"
                    />
                </p>
                <p className="w-full mt-24 flex gap-2 haas animate-item">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi odio amet facilis commodi est dolore repellat architecto numquam. Nam quis odio unde, tempora fugiat iure nesciunt placeat ab eius praesentium. 
                </p>
                
                {/* Specifications Section */}
                <div className="mt-16 space-y-4">
                    <div className="flex items-center gap-4 animate-item">
                        
                        <p className="haas text-lg">
                            <span className="haas-med me-2">Protection level:</span> Category 5 - Maximum Summer Defense
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-4 animate-item">
                        
                        <p className="haas text-lg ">
                            <span className="haas-med me-2">Sweat Resistance:</span> 48-hour protection
                        </p>
                    </div>
                    
                    <div className="flex items-center gap-4 animate-item">
                        
                        <p className="haas text-lg">
                            <span className="haas-med me-2">Formula type:</span>  Aluminum-free with natural minerals - 15% active protection
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default SecondSection
