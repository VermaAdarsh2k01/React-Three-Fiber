import React, { useState, useEffect } from 'react'
import ScrollBaseAnimation from './components/uilayouts/scroll-text-marque.jsx'

export const FooterContent = () => {
  const [showOutline, setShowOutline] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowOutline(prev => !prev);
    }, 2000); // Switch every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full relative text-white overflow-x-hidden overflow-y-hidden">
      {/* Top section with marquee text */}
      <div className="absolute top-32 left-0 w-full">
        <ScrollBaseAnimation 
          baseVelocity={-1} 
          clasname="text-white font-bold haas text-[4rem] "
          scrollDependent={true}
        >
           Click → Glide → Go — fresh confidence on repeat with SolarGuard DeoStick™ ..
        </ScrollBaseAnimation>
      </div>

             {/* Middle section with footer navigation */}
       <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full px-20">
         <div className="flex justify-between items-start">
           {/* Left column */}
           <div className="flex flex-col space-y-4">
             <a href="#" className="text-white hover:font-bold transition-all duration-500 text-lg">Home</a>
             <a href="#" className="text-white hover:font-bold transition-all duration-500 text-lg">Services</a>
           </div>
           
           {/* Middle-left column */}
           <div className="flex flex-col space-y-4">
             <a href="#" className="text-white hover:font-bold transition-all duration-500 text-lg">All Blogs</a>
             <a href="#" className="text-white hover:font-bold transition-all duration-500 text-lg">Contact</a>
             <a href="#" className="text-white hover:font-bold transition-all duration-500 text-lg">About</a>
             <a href="#" className="text-white hover:font-bold transition-all duration-500 text-lg">Privacy Policy</a>
           </div>
           
           {/* Middle-right column */}
           <div className="flex flex-col space-y-4">
             <a href="#" className="text-white hover:font-bold transition-all duration-500 text-lg">Instagram</a>
             <a href="#" className="text-white hover:font-bold transition-all duration-500 text-lg">Twitter/X</a>
             <a href="#" className="text-white hover:font-bold transition-all duration-500 text-lg">LinkedIn</a>
             <a href="#" className="text-white hover:font-bold transition-all duration-500 text-lg">Facebook</a>
           </div>
           
           {/* Right column */}
           <div className="flex flex-col items-end space-y-2">
             <p className="text-white text-lg">2025 © Summr</p>
             <p className="text-white text-lg">All Rights Reserved</p>
           </div>
         </div>
       </div>
      
      {/* Bottom section with Summr text and stacked SVGs - pinned to bottom */}
      <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center'>
        <p className='haas-black tracking-[-0.02em] leading-[0px] text-[20rem]'>Summr</p>
        
        {/* Stacked SVGs with switching visibility */}
        <div className="relative w-[200px] h-[200px] ml-8">
          <img 
            src="/Outline.svg" 
            alt="Outline" 
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              showOutline ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <img 
            src="/Fill.svg" 
            alt="Fill" 
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              showOutline ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>
      </div>
    </div>
  )
}
