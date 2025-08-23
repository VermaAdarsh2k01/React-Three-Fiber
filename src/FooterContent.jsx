import React, { useState, useEffect } from 'react'
import ScrollBaseAnimation from './components/uilayouts/scroll-text-marque.jsx'

export const FooterContent = () => {
  const [showOutline, setShowOutline] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowOutline(prev => !prev);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full relative text-white overflow-x-hidden overflow-y-hidden">
      
      <div className="absolute top-42  lg:top-32 left-0 w-full">
        <ScrollBaseAnimation 
          baseVelocity={-1} 
          clasname="text-white font-bold haas text-[2rem] xs:text-[3rem] xl:text-[4rem] "
          scrollDependent={true}
        >
           Click → Glide → Go — fresh confidence on repeat with SolarGuard DeoStick™ ..
        </ScrollBaseAnimation>
      </div>

             {/* Middle section with footer navigation */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full lg:px-20 px-2">
        {/* Mobile Layout - All columns in same row */}
        <div className="block xs:hidden">
          <div className="flex justify-between items-start ">
            {/* Left column */}
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-orange-600 transition-all duration-500 text-sm xl:text-lg">Home</a>
              <a href="#" className="text-white hover:text-orange-600 transition-all duration-500 text-sm xl:text-lg">Shop</a>
            </div>
            
            {/* Social links column */}
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-white hover:text-orange-600 transition-all duration-500 text-sm xl:text-lg">Instagram</a>
              <a href="#" className="text-white hover:text-orange-600 transition-all duration-500 text-sm xl:text-lg">Twitter/X</a>
              <a href="#" className="text-white hover:text-orange-600 transition-all duration-500 text-sm xl:text-lg">LinkedIn</a>
              <a href="#" className="text-white hover:text-orange-600 transition-all duration-500 text-sm xl:text-lg">Facebook</a>
            </div>
            
            {/* Copyright section - now in same row */}
            <div className="flex flex-col items-end space-y-2">
              <p className="text-white text-sm xl:text-lg">2025 © Summr</p>
              <p className="text-white text-sm xl:text-lg">All Rights Reserved</p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="hidden xs:flex justify-between items-start">
          {/* Left column */}
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-orange-600 transition-all duration-500 text-lg">Home</a>
            <a href="#" className="text-white hover:text-orange-600 transition-all duration-500 text-lg">Shop</a>
          </div>
          
          {/* Middle-right column */}
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-orange-600 transition-all duration-500 text-lg">Instagram</a>
            <a href="#" className="text-white hover:text-orange-600 transition-all duration-500 text-lg">Twitter/X</a>
            <a href="#" className="text-white hover:text-orange-600 transition-all duration-500 text-lg">LinkedIn</a>
            <a href="#" className="text-white hover:text-orange-600 transition-all duration-500 text-lg">Facebook</a>
          </div>
          
          {/* Right column - Copyright section */}
          <div className="flex flex-col items-end space-y-2">
            <p className="text-white hover:text-orange-600 transition-all duration-500 text-lg">2025 © Summr</p>
            <p className="text-white hover:text-orange-600 transition-all duration-500 text-lg">All Rights Reserved</p>
          </div>
        </div>
      </div>
      
      {/* Bottom section with Summr text and stacked SVGs - pinned to bottom */}
      <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center'>
        <p className='haas-black tracking-[-0.02em] leading-[0px] text-[6rem] lg:text-[16rem] xl:text-[20rem] mb-4'>Summr</p>
        
        {/* Stacked SVGs with switching visibility */}
        <div className="relative hidden lg:block w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] ml-8">
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
