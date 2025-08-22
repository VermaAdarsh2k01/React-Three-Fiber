import React from 'react'

const FourthSection = () => {
  return (
    <div className='third-section h-[100vh] w-full overflow-hidden relative rounded-b-[4rem] bg-white'>
        
        <div className='absolute top-[20%] left-[15%] w-[20%] pointer-events-none flex flex-col text-left'>
            <img src="/ArrowRight.png" className='w-[40%] ml-auto transform rotate-180 '/>
            <p className='haas-med text-[1.5rem] leading-none whitespace-nowrap'>Ergonomic Contour-Glide Head</p>
            <p className='haas text-[1rem] leading-none mt-2'>The stick’s applicator surface is subtly concave, mirroring the natural curve of the underarm. Users get full, even coverage in a single swipe without digging or dragging.</p>
        </div>

        <div className='absolute top-[20%] right-[15%] w-[20%] pointer-events-none flex flex-col text-right'>
            
            <p className='haas-med text-[1.5rem] leading-none whitespace-nowrap'>Clear Reserve Window </p>
            <p className='haas text-[1rem] leading-none mt-2'>A matte, rubberized coating resists fingerprints and offers a secure grip—even with wet hands. A slim, crystal-clear window lets users see exactly how much stick remains, eliminating guesswork and last-minute repurchases.</p>
            <img src="/ArrowRight.png" className='w-[40%] mr-auto  '/>
        </div>

       <div className='absolute bottom-[30%] left-1/2 -translate-x-1/2'>
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
