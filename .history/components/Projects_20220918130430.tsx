import React from 'react'

type Props = {}

function Projects({}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
        max-w-full justify-evenly mx-auto items-center z-0'>

        <h3 className='absolute top-24 text-gray-500 text-2xl tracking-[20px] uppercase'>
            Projects
        </h3> 

        <div className='w-full absolute top-[30%] bg-[#1f9aec]/10 left-0  '>

         </div>   
    </div>
  )
}

export default Projects