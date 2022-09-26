import React from 'react'
import {Cursor , useTypewriter } from 'react-simple-typewriter';

type Props = {}

function Hero({}: Props) {
    const [ ,count]= useTypewriter({
        words:["Hi , My Name is Husain","Guy-who-loves-cycling.tsx"]
    });
  return (
    <div>
        
    </div>
  )
}

export default Hero