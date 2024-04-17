import React from 'react'

const DetailedCard = ({technology}) => {
  return (
    <section className='h-full w-full flex justify-center items-center'>
        <div className='h-full w-1/2 bg-red-200 flex flex-col justify-center items-center font-palanquin'>
            <h1 className='text-2xl'>{technology.name}</h1>
            <h2 className='text-2xl'>Creator: {technology.creator}</h2>
            <h3 className='text-2xl'>Created: {technology.date_created.slice(0,4)}</h3>

        </div>
        <div className='h-full w-1/2 bg-blue-200'>

        </div>
    </section>
  )
}

export default DetailedCard