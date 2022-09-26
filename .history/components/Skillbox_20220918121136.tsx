import React from 'react'

type Props = {}

function Skillbox({}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <img
        src='/techicons/react.svg'
        alt=''
        className='h-24 w-24 border border-gray-500 rounded-full xl:w-32 xl:h-32
         hover:group grayscale-0'/>

    </div>
  )
}

export default Skillbox