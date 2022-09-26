import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {
  return (
    <header>

        <div>
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

            <p></>
        </div>
    </header>
    
  )
}