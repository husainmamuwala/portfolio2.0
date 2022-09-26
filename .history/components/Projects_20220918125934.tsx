import React from 'react'

type Props = {}

function Projects({}: Props) {
  return (
    <div className='h-screen flex overflow-hidden flex-col text-left md:flex-row 
    max-w-full'>
        <h3 className='absolute top-24 text-gray-500 text-2xl tracking-[20px] uppercase
        '>Projects</h3>    
    </div>
  )
}

export default Projects