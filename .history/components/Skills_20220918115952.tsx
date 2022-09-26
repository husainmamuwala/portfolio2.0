import React from 'react'

type Props = {}

function Skills({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
    <h3 className='absolute top-24 tracking-[20px] font-semibold text-2xl text-gray-500 uppercase '>Skills</h3>
    <h3 className='absolute top-36 tracking-widest font-semibold text text-gray-500 uppercase '>
        Hover over a skill for current profeciency
    </h3>
    </div>
  )
}

export default Skills