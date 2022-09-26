import React from 'react'
import {motion} from 'framer-motion'
import ExpCard from './ExpCard'
type Props = {}

export default function Work({}: Props) {
  return (
    <div 
    
    className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 font-semibold 
        text-2xl'>
            Experience
        </h3>

        <div className='w-full flex space-x-5 overflow-x-scroll'>
            <ExpCard/>
            <ExpCard/>
            <ExpCard/>
            <ExpCard/>
        </div>
    </div>
  )
}