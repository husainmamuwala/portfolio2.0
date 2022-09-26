import React from 'react'
import {motion} from 'framer-motion'

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
                <motion.img
                initial={{
                  y:-300,
                  opacity:0,
                }}
                transition={{
                  duration:1.2
                }}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                src='/project/dexdata.png'
                alt=''
                className='max-w-sm md:max-w-xl'
                />
                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                    <h4 className='text-l text-center font-semibold'> 
                      <span className='underline decoration-[#1f9aec] text-3xl'>DexData Pro </span>- Web Development</h4>
                      <p className='max-w-lg text-center md:max-w-3xl p-2 md:p-0'>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
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