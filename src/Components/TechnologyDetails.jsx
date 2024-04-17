import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DetailedCard from './DetailedCard';
import Nav from './Nav';
import Loading from './Loading'

const TechnologyDetails = () => {
  const location = useLocation();
  const { specs } = location.state;
  const [technology, setTechnology] = useState();

  const fetchSpecifcTechnology = async (endpoint) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/technologies/${endpoint}`
      );
      if (!response.ok) {
        throw new Error("Failed to retrieve data. Try again later.");
      }
      const data = await response.json();
      setTechnology(data)
    } catch (error) {
      console.log(Error, error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchSpecifcTechnology(specs);
    }, 1500) 
  }, [])
  
  return (
    <section className='flex flex-col h-screen'>
      <Nav />
      <section className='h-full w-full pt-28 flex justify-center items-center'>
        {technology ? <DetailedCard technology={technology}/> : <Loading />}
      </section>
    </section>
  )
  
}

export default TechnologyDetails