import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    directionLeft?:boolean;
}

function Skillbox({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
        initial={{
            x: directionLeft? -200 : 200,
            opacity:0,
        }}
        transition={{
            duration:1,
        }}
        whileInView={{
            opacity:1,
            x:0,
        }}
        src='/techicons/react.svg'
        alt=''
        className='h-24 w-24 border border-gray-500 object-cover rounded-full xl:w-32 xl:h-32
        filter group-hover:grayscale tranition duration-300'/>


        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white rounded-full h-24 w-24 z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
    </div>
  )
}

export default Skillbox