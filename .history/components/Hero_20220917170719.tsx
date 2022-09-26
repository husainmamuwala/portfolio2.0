import React from 'react'
import {Cursor , useTypewriter } from 'react-simple-typewriter';

type Props = {}

function Hero({}: Props) {
    const[text,count]= useTypewriter({
        words:[]
    })
  return (
    <div>
        
    </div>
  )
}

export default Hero