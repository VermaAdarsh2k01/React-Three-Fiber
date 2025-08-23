import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='lg:w-[20vw] shadow-black/30 flex items-center justify-between gap-4 rounded-full'>
          {/* Logo/Brand */}
          <div className='flex items-center justify-center'>
            <a href="/" className='w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center'>
              <span className='text-white text-2xl'>✦</span>
            </a>
          </div>

          {/* Navigation Links */}
          <nav className='flex items-center justify-around space-x-2 w-full rounded-full shadow-2xl h-[48px] bg-white backdrop-blur-lg px-8 py-3 border-[0.4px] border-gray-300 shadow-black/30 drop-shadow-2xl haas'>
            <a href="#" className='text-gray-700 hover:text-black transition-colors duration-200 text-[14px] font-medium'>
              Shop
            </a>
            <a href="#" className='text-gray-700 hover:text-black transition-colors duration-200 text-[14px] font-medium'>
              About
            </a>
            <a href="#" className='text-gray-700 hover:text-black transition-colors duration-200 text-[14px] font-medium'>
              Contact
            </a>
          </nav>

          
        </div>
    </>
  )
}

export default Navbar