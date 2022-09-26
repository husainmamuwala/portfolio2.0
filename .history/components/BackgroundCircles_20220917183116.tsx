import React from 'react'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <div className='relative flex justify-center'>
        <div className='border [#333333] rounded-full h-[200px] w-[200px] animate-ping mt-52'/>
        <div/>
        <div/>
        <div/>
        <div/>
    </div>
  )
}

export default BackgroundCircles