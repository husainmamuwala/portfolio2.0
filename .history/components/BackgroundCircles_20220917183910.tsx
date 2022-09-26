import React from 'react'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <div className='relative flex justify-center items-center'>
        <div className='absolute border [#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping '/>
        <div className=' absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52'/>
        <div className=' absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52'/>
        <div className=' absolute border border-[#1f9aec] rounded-full h-[600px] w-[600px] mt-52'/>
        <div className=' absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52'/>
    </div>
  )
}

export default BackgroundCircles