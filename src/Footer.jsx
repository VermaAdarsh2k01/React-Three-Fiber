import React from 'react'
import { FooterContent } from './FooterContent'

const Footer = () => {
  return (
    <div 
      className='relative h-[800px] bg-black'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='relative h-[calc(100vh+800px)] -top-[100vh]'>
        <div className='sticky top-[calc(100vh-800px)] h-[800px]'>
          {/* Content */}
          <FooterContent />
          
        </div>
      </div>
    </div>
  )
}

export default Footer