import React from 'react'
import Button from '../Button/Button'
import ArrowIcon from '../assets/icons/arrow-right.svg'
import DevGraphic from '../assets/images/dev-graphic.png'

const Hero = () => {
  return (
    <section id="home" className='w-screen flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 ml-5'>
        <h1 className='mt-10 font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
            <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>Explore new technologies</span>
            <br/>
            Discover your <span className='text-coral-red inline-block mt-3'>stack</span>
        </h1>
        <p className='font-monserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Your destination to evolve as a developer. Innovate and grow your tools.</p>
        <Button label="Learn More" iconUrl={ArrowIcon}/>
        <article className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          <div>
            <p className='text-4xl font-palanquin font-bold'>30+</p>
            <p className='leading-7 font-montserrat text-slate-gray'>Technologies</p>
          </div>
          <div>
            <p className='text-4xl font-palanquin font-bold'>10+</p>
            <p className='leading-7 font-montserrat text-slate-gray'>Tech Stacks</p>
          </div>
        </article>
      </div>

      <figure className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-4 bg-primary bg-hero bg-cover bg-center'>
        <img 
        src={DevGraphic}
        alt="developer coding at the computer"
        width={510}
        height={500}
        className='object-contain relative z-10'
        />
      </figure>
    </section>
  )
}

export default Hero