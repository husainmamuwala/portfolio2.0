import React from 'react'
import {Cursor , useTypewriter } from 'react-simple-typewriter';

type Props = {}

export default function Hero({}: Props) {
    const [<textarea name="" id="" cols="30" rows="10"></textarea> , count] = useTypewriter({
        words:["Hi , My Name is Husain","Guy-who-loves-cycling.tsx"],
        loop:true,
        delaySpeed: 2000,
    });
  return (
    <div>
        <p>{text}</p>
        
    </div>
  )
}