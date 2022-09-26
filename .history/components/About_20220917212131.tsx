import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <div  className=' flex flex-col relative h-screen  text-center md:text-left md:flex-row 
    max-w-7xl px-10 justify-evenly mx-auto items-center '>
    
    
        <h3 className='absolute top-24 tracking-[28px] text-gray-500 font-semibold uppercase
        text-2xl'>About Moi</h3>

        <motion.img
        initial={{
            x:-200,
            opacity:0,
        }}
        whileInView={{
            x:0,
            opacity:1,
        }}
        transition={{
            duration:1,
        }}
        src='https://ik.imagekit.io/husain/husain1?ik-sdk-version=javascript-1.4.3&updatedAt=1663422604057'
        className='mb-20 md:mb-0 flex-shrink-0 w-64 h-64 rounded-full object-cover md:rounded-xl md:'
        />
        
    </div>
  )
}

export default About