import React from 'react'
import {SocialIcon} from 'react-social-icons'

type Props = {}

export default function Header({}: Props) {
  return (
    <header>
        <div>
            <SocialIcon 
                url='www.instagram.com/husain_mamuwala'
                fgColor='gr'
                />

        </div>
    </header>
  )
}