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
            x:-500
        }}
        src='https://ik.imagekit.io/husain/husain1?ik-sdk-version=javascript-1.4.3&updatedAt=1663422604057'
        />
        
    </div>
  )
}

export default About