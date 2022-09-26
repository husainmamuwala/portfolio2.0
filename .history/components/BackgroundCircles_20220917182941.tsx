import React from 'react'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <div>
        <div className='border border-red-600 rounded-full h-[200px] w-[200px] animate-ping'/>
        <div/>
        <div/>
        <div/>
        <div/>
    </div>
  )
}

export default BackgroundCircles