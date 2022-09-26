import React from 'react'

type Props = {}

export default function Contact({}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase text'>
            Contact
        </h3>
    </div>
  )
}