import React from 'react';
import Button from './Button';
import DocIcon from '../assets/icons/doc-icon.svg';
import Footer from './Footer';

const DetailedTechCard = ({technology}) => {
  return (
    <section>
      <section
        id="techCard"
        className="w-screen flex xl:flex-row flex-col justify-center gap-10 max-container lg:mt-52 xsm:mt-80 md:mt-96"
      >
        <figure className="flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-4 bg-primary bg-hero bg-cover bg-center bg-gradient-to-b-0.2 md:mt-36 lg:mt-0 xsm:mt-12">
          <img
            src={technology.image2_url}
            alt={`cover image showing {${technology.name}}`}
            width={670}
            height={500}
            className="object-contain relative z-10"
          />
        </figure>
        <article className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x ml-10 xsm:ml-2">
          <h1 className="font-palanquin text-4xl max-sm:text-[36px] max-sm:leading-[41px] font-bold mb-2">
            {technology.name} 
            <br />
            <span className="text-coral-red inline-block mt-3 text-3xl">{technology.type}</span>
          </h1>
          <h2 className="font-palanquin text-lg max-sm:text-[36px] max-sm:leading-[41px] font-bold">
              Created by - {technology.creator} 
              <br />
              Created in - {technology.date_created.slice(0,4)} 
          </h2>
          <p className="font-monserrat text-slate-gray text-lg leading-8 mt-6 mb-6 sm:max-w-sm lg:max-w-lg">
            {technology.summary}
          </p>
          <article className="flex justify-start items-start flex-wrap w-full gap-16 mb-12">
            <div>
              <p className="text-xl font-palanquin font-bold">Compatibile with</p>
              <ul className="leading-7 font-montserrat text-slate-gray">
                {technology.compatibilities.map((comp, index) => {
                  return <li key={index}>{comp}</li>
                })}
              </ul>
            </div>
            <div>
              <p className="text-xl font-palanquin font-bold">Use Cases</p>
              <ul className="leading-7 font-montserrat text-slate-gray">
                {technology.use_cases.map((use, index) => {
                  return <li key={index}>{use}</li>
                })}
              </ul>
            </div>
          </article>
          <a href={technology.documentation_link} target="_blank">
              <Button label="Visit Documentation" iconUrl={DocIcon} />
          </a>
        </article>
      </section>
      <Footer />
    </section>
  )
}

export default DetailedTechCard