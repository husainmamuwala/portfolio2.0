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

        <div className='relative w-full flex overflow-hidden  overflow-x-scroll  snap-x snap-mandatory z-20'>
           {projects.map((project) => (

            <div className='w-screen flex-shrink-0 snap-center items-center flex flex-col justify-center
             space-y-5 md:p-44 xl:p-60 h-screen'>
                <img
                src='/project/dexdata.png'
                alt=''
                className='max-w-sm md:max-w-xl'
                />
                <div>
                    <h4 className='text-l text-center'> 
                      <span className='underline decoration-[#1f9aec] text-2xl'>DexData Pro </span>- Web Development</h4>
                      <p className='max-w-3xl md:max-w-'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                      lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                      </p>
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