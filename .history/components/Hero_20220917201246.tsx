import Link from 'next/link';
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
    <div className='h-screen flex flex-col items-center justify-center space-y-6 overflow-hidden text-center z-0'>
        <BackgroundCircles/>
        <img 
        className='relative rounded-full h-44 w-44'
        src='https://ik.imagekit.io/husain/husain1?ik-sdk-version=javascript-1.4.3&updatedAt=1663422604057'/>
        <h2 className='test-sm uppercase text-gray-500 pb-1 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-4xl lg:text-6xl'>
            <span className='mr-1 font-semibold'>{text}</span>
            <Cursor />
        </h1>
        <div className='pt-5'>
            <Link href="#about">
            <button className='herobutton'>About</button>
            </Link>
            <Link href="#experience">
            <button className='herobutton'>Experience</button>
            </Link>
            <Link>
            <button className='herobutton'>Skills</button>
            </Link>
            <Link>

            <button className='herobutton'>Projects</button>
            </Link>
        </div>
        
    </div>
  );
}