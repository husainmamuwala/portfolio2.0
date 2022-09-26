import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function Skillbox({}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
        initial={{
            x:-300
        }}
        whileInView={{
            x:0
        }}
        src='/techicons/react.svg'
        alt=''
        className='h-24 w-24 border border-gray-500 rounded-full xl:w-32 xl:h-32
        filter group-hover:grayscale tranition duration-300'/>

    </div>
  )
}

export default Skillbox