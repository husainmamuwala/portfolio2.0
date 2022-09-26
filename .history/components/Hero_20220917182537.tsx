import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter';

type Props = {}

export default function Hero({}: Props) {
    const {text,count} = useTypewriter({
        words:["Hi , My Name is Husain","Guy-who-loves-cycling.tsx","<Student/>"],
        loop:true,
        delaySpeed: 2000,
    });
  return (
    <div>
        <Back>
        <h1>
            <span>{text}</span>
            <Cursor />
        </h1>
        
    </div>
  );
}