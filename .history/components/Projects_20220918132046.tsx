import React from 'react'

type Props = {}

function Projects({}: Props) {
    const projects=[1,2,3,4,5];
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
        max-w-full justify-evenly mx-auto items-center z-0'>

        <h3 className='absolute top-24 text-gray-500 text-2xl tracking-[20px] uppercase'>
            Projects
        </h3> 

        <div className='relative w-full flex overflow-x-visible overflow-y-hidden snap-x snap-mandatory z-20'>
           {projects.map((project) => (

            <div className='w-screen relative '>
                <img
                src='/project/dexdata.png'
                alt=''
                />
                <div>
                    <h4>
                    DexData Pro</h4>
                </div>
            </div>

           ))}
        </div>
        <div className='w-full absolute top-[30%] bg-[#1f9aec]/10 left-0 h-[500px] -skew-y-12'>

         </div>   
    </div>
  )
}

export default Projects