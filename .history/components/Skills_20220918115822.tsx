import React from 'react'

type Props = {}

function Skills({}: Props) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left xl:flex-row
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
    <h3 className='absolute top-24 tracking-[20px] font-semibold text-gray-500 uppercase '>Skills</h3>
    <h3>Hover over a skill for current profe</h3>
    </div>
  )
}

export default Skills