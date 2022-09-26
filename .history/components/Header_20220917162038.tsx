import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Header({}: Props) {
  return (
    <header>

        <div>
            <SocialIcon 
                url='www.instagram.com/husain_mamuwala'
                fgColor="gray"
                bgColor='black'
            />
            <SocialIcon
            url='https://www.instagram.com/husain_mamuwala'
            fgColor='gray'/>
        </div>
    </header>
    
  )
}