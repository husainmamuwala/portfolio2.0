import React from 'react'
import {Cursor , useTypewriter } from 'react-simple-typewriter';

type Props = {}

function Hero({}: Props) {
    const [text,count]= useTypewriter({
        words:["Hi"]
    })
  return (
    <div>
        
    </div>
  )
}

export default Hero