import React from 'react'
import { useParams } from 'react-router-dom'

const TechnologyDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className='h-full w-full'>
      <h1>{id}</h1>
    </div>
  )
}

export default TechnologyDetails