import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start max-w-7xl justify-between mx-auto'>

        <div className='flex flex-row items-center'>
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
        </div>

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