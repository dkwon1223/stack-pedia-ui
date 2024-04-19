import React from 'react';
import { hatch } from 'ldrs';

hatch.register()

// Default values shown

const Loading = () => {
  return (
    <section className="h-screen w-full flex justify-center items-center bg-loading bg-no-repeat bg-cover">
        <l-hatch
        size="150"
        stroke="20"
        speed="5.0" 
        color="#F87417" 
        ></l-hatch>
        <h1 className='lg:text-8xl xsm:text-2xl font-bold text-[#F87417] mt-12'>Loading...</h1>
        <l-hatch
        size="150"
        stroke="20"
        speed="5.0" 
        color="#F87417" 
        ></l-hatch>
    </section>
  )
}

export default Loading;