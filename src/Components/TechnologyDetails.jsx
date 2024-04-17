import React from 'react';
import { useParams } from 'react-router-dom';
import Nav from './Nav';

const TechnologyDetails = () => {
  const { name } = useParams();
  return (
    <>
      <Nav />
      <section className='h-9/10 w-full border-red-500'>
        <h1>{name}</h1>
      </section>
    </>
  )
}

export default TechnologyDetails