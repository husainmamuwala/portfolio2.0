import React from 'react'

type Props = {}

export default function Work({}: Props) {
  return (
    <div className='h-screen relative overflow-hidden flex-col text-left md:flex-row
    max-w-full px-10 justify-evenly mx-auto '>
        <h3 className='absolute top-24 tracking-[20px] text-gray-500 font-semibold uppercase
        text-2xl'>
            Experience
        </h3>
    </div>
  )
}