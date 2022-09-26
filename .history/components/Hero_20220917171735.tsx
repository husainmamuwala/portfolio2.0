import React from 'react'
import {Cursor , useTypewriter } from 'react-simple-typewriter';

type Props = {}

export default function Hero({}: Props) {
    const {text,count} = useTypewriter({
        words:["Hi , My Name is Husain","Guy-who-loves-cycling.tsx"],
        loop:true,
        delaySpeed: 2000,
    });
  return (
    <div>
        <h1>
            <span>{text}</span>
            <Cursor cursorColor
        </h1>
        
    </div>
  )
}