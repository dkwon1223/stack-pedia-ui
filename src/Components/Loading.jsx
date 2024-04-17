import React from 'react'
import { hatch } from 'ldrs'

hatch.register()

// Default values shown

const Loading = () => {
  return (
    <section className='h-full w-full flex justify-start items-center flex-col'>
        <l-hatch
        size="150"
        stroke="20"
        speed="5.0" 
        color="orange" 
        ></l-hatch>
        <h1 className='text-8xl font-bold text-coral-red mb-4'>Loading...</h1>
        <l-hatch
        size="150"
        stroke="20"
        speed="5.0" 
        color="orange" 
        ></l-hatch>
    </section>
  )
}

export default Loading