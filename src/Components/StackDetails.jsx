import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DetailedStackCard from './DetailedStackCard';
import Nav from './Nav';
import Loading from './Loading'

const StackDetails = () => {
  const location = useLocation();
  const { specs } = location.state;
  const [stack, setStack] = useState();

  const fetchSpecifcStack= async (endpoint) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/stacks/${endpoint}`
      );
      if (!response.ok) {
        throw new Error("Failed to retrieve data. Try again later.");
      }
      const data = await response.json();
      setStack(data)
    } catch (error) {
      console.log(Error, error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchSpecifcStack(specs);
    }, 2000) 
  }, [])
  
  return (
    <section className='flex flex-col h-screen'>
      <Nav />
      <section className='h-full w-full pt-28 flex justify-center items-center'>
        {stack ? <DetailedStackCard stack={stack}/> : <Loading />}
      </section>
    </section>
  )
  
}

export default StackDetails