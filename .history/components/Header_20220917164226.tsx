import React from 'react'
import { SocialIcon } from 'react-social-icons';
import {motion} from 'framer-motion'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start max-w-7xl justify-between mx-auto z-20
    xl:items-center'>

        <motion.div 
        initial
        className='flex flex-row items-center'>
            <SocialIcon
            url='https://www.instagram.com/husain_mamuwala'
            fgColor='gray'
            bgColor='transparent'/>
             <SocialIcon
            url='https://www.linkedin.com/husain_mamuwala'
            fgColor='gray'
            bgColor='transparent'/>
             <SocialIcon
            url='https://www.github.com/husain_mamuwala'
            fgColor='gray'
            bgColor='transparent'/>
        </motion.div>

        <div>
            <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'/>

            <p className=' uppercase hidden md:inline-flex text-sm text-gray-400'>
                Get In Touch
            </p>
        </div>
    </header>
    
  )
}