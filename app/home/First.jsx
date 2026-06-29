import React from 'react'

const First = () => {
  return (
    <div className="relative fade-section h-screen w-screen flex font-[anzo3]">
      <div className="absolute top-28 right-38 items-center flex justify-center">
        <h1 className="text-9xl fin font-extrabold tracking-widest text-white relative" data-content="FiNova">
          FiNova
        </h1>
      </div>
      <div className="glass bg-[#eeeeee9e] backdrop-blur-2xl h-45 w-150 absolute bottom-10 right-20 rounded-xl">
       <div className='w-1/2 h-full p-2 px-5'>
       <img src="/banner.webp" alt="banner" className='object-left object-contain h-full w-full' />
       </div>
      </div>
    </div>
  )
}

export default First