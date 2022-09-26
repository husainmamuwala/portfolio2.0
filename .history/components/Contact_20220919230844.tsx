import React from 'react'
impo
type Props = {}

export default function Contact({}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase text-gray-500 font-semibold tracking-[20px] text-2xl'>
            Contact
        </h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl text-center font-semibold'>I have got just what you need.{" "}
            <span className='underline decoration-[#1f9aec]'>Lets Talk</span></h4>

            <div>

            </div>
        </div>
    </div>
  )
}