import React from 'react'
import {useTypewriter,Cursor} from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({}: Props) {
    const {text,count} = useTypewriter({
        words:["Hi , My Name is Husain","Guy-who-loves-cycling.tsx","<Student/>"],
        loop:true,
        delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col items-center justify-center space-y-8 overflow-hidden text-center'>
        <BackgroundCircles/>
        <img src='https://ik.imagekit.io/husain/husain_jWSvWPT23y.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1663421415300'className='w'/>
        <h1>
            <span>{text}</span>
            <Cursor />
        </h1>
        
    </div>
  );
}