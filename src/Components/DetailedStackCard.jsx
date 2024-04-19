import React from 'react';
import Button from './Button';
import DocIcon from '../assets/icons/doc-icon.svg';
import Footer from './Footer';

const DetailedStackCard = ({stack}) => {
  return (
    <section>
      <section
        id="stackCard"
        className="w-screen flex xl:flex-row flex-col justify-center gap-10 max-container lg:mt-52 xsm:mt-80 md:mt-96"
      >
        <figure className="flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-4 bg-primary bg-hero bg-cover bg-center bg-gradient-to-b-0.2 md:mt-36 lg:mt-0 xsm:mt-12">
          <img
            src={stack.image2_url}
            alt={`cover image showing {${stack.name}}`}
            width={670}
            height={500}
            className="object-contain relative z-10"
          />
        </figure>
        <article className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x ml-10 xsm:ml-2">
          <h1 className="font-palanquin text-4xl max-sm:text-[36px] max-sm:leading-[41px] font-bold">
            {stack.name} 
            <br />
            <span className="text-coral-red inline-block mt-3 text-3xl">{stack.type}</span>
          </h1>
          <p className="font-monserrat text-slate-gray text-lg leading-8 mt-4 mb-4 sm:max-w-sm lg:max-w-lg">
            {stack.summary}
          </p>
          <article className="flex flex-col justify-start items-start flex-wrap w-full gap-6 mb-6">
            <div className='flex'>
                <div>
                <p className="text-xl font-palanquin font-bold">Potential Downsides</p>
                <ul className="leading-7 font-montserrat text-slate-gray">
                    {stack.downsides.map((downside, index) => {
                    return <li key={index}>{downside}</li>
                    })}
                </ul>
                </div>
                <div>
                <p className="text-xl font-palanquin font-bold">Potential Benefits</p>
                <ul className="leading-7 font-montserrat text-slate-gray">
                    {stack.benefits.map((benefit, index) => {
                    return <li key={index}>{benefit}</li>
                    })}
                </ul>
                </div>
            </div>
            <div>
              <p className="text-2xl font-palanquin font-bold">Used At</p>
              <ul className="leading-7 font-montserrat text-slate-gray text-xl">
                {stack.companies.map((company, index) => {
                  return <li key={index}>{company}</li>
                })}
              </ul>
            </div>
          </article>
          <a href={stack.learn_link} target="_blank">
              <Button label="Learn More" iconUrl={DocIcon} />
          </a>
        </article>
      </section>
      <Footer />
    </section>
  )
}

export default DetailedStackCard