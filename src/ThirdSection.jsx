import React from 'react'

const ThirdSection = () => {
  return (
    <div className='third-section h-[100vh] w-full overflow-hidden relative'>
        <div className='absolute -top-10 left-1/2 -translate-x-1/2 w-full pointer-events-none flex justify-center'>
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
                    className='haas-black text-[20rem] leading-none whitespace-nowrap tracking-[-0.15em] opacity-0'
                >
                    SUMMR
                </p>
            </div>
        </div>

        <div className='absolute bottom-[20%] left-[15%] w-[20%] pointer-events-none flex flex-col text-left'>
            <img src="/ArrowRight.png" className='w-[40%] ml-auto transform rotate-180 '/>
            <p className='haas-med text-[1.5rem] leading-none whitespace-nowrap'>Micro-Vent Seal Cap</p>
            <p className='haas text-[1rem] leading-none mt-2'>A hidden ring magnet snaps the cap shut with a reassuring “click,” while micro-vent grooves equalize pressure so the product stays fresh, not sweaty, in hot bags or gym lockers.</p>
        </div>

        <div className='absolute bottom-[20%] right-[15%] w-[20%] pointer-events-none flex flex-col text-right'>
            
            <p className='haas-med text-[1.5rem] leading-none whitespace-nowrap'>Side-Click Elevation </p>
            <p className='haas text-[1rem] leading-none mt-2'>A low-profile button sits flush along the barrel. One satisfying click advances precisely 1 mm of product—no messy over-twist, and you can operate it single-handedly while on the move.</p>
            <img src="/ArrowRight.png" className='w-[40%] mr-auto  '/>
        </div>

       
    </div>
  )
}

export default ThirdSection