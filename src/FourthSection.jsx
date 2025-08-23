import React from 'react'
import { useMediaQuery } from 'react-responsive'

const FourthSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  return (
    <div className='third-section h-[100vh] w-full overflow-hidden relative rounded-b-[4rem] bg-white'>
        
        <div className='absolute bottom-[60%] xs:bottom-[30%] lg:top-[20%] left-[6%] lg:left-[10%] xl:left-[15%] w-[35%] lg:w-[25%] xl:w-[20%] pointer-events-none flex flex-col text-left'>
            <img src="/ArrowRight.png" className='w-[60%] lg:w-[40%] lg:ml-auto transform rotate-180 '/>
            <p className='haas-med text-[1.2rem] xs:text-[1.5rem] leading-none xl:whitespace-nowrap'>Ergonomic Contour-Glide Head</p>
            <p className='haas text-[1rem] leading-none mt-2'>The stick’s applicator surface is subtly concave, mirroring the natural curve of the underarm. Users get full, even coverage in a single swipe without digging or dragging.</p>
        </div>


        {isMobile ? (
          (<div className='absolute bottom-[40%] xs:bottom-[60%] lg:top-[20%] right-[6%] lg:right-[10%] xl:right-[15%] w-[35%] lg:w-[25%] xl:w-[20%] pointer-events-none flex flex-col text-right'>
            <img src="/ArrowLeft.png" className='w-[60%] lg:w-[40%] ml-auto '/>
            <p className='haas-med text-[1.2rem] xs:text-[1.5rem] leading-none lg:whitespace-nowrap'>Clear Reserve Window </p>
            <p className='haas text-[0.9rem] xs:text-[1rem] leading-none mt-2'>A matte, rubberized coating resists fingerprints and offers a secure grip—even with wet hands. A slim, crystal-clear window lets users see exactly how much stick remains, eliminating guesswork and last-minute repurchases.</p>
            
        </div>)
        ) : (<div className='absolute bottom-[30%] lg:top-[20%] right-[6%] lg:right-[10%] xl:right-[15%] w-[30%] lg:w-[25%] xl:w-[20%] pointer-events-none flex flex-col text-right'>
            
          <p className='haas-med text-[1.5rem] leading-none xl:whitespace-nowrap'>Clear Reserve Window </p>
          <p className='haas text-[0.9rem] xs:text-[1rem] leading-none mt-2'>A matte, rubberized coating resists fingerprints and offers a secure grip—even with wet hands. A slim, crystal-clear window lets users see exactly how much stick remains, eliminating guesswork and last-minute repurchases.</p>
          <img src="/ArrowRight.png" className='w-[40%] mr-auto '/>
      </div>)}
        

       <div className='absolute bottom-[15%] lg:bottom-[30%] left-1/2 -translate-x-1/2'>
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
