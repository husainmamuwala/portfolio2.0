import React from 'react'
import {motion} from 'framer-motion'
type Props = {}

export default function Work({}: Props) {
  return (
    <motion.div 
    
    className='h-screen relative overflow-hidden flex-col text-left md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 font-semibold 
        text-2xl'>
            Experience
        </h3>

        <div>
            <Ex
        </div>
    </motion.div>
  )
}