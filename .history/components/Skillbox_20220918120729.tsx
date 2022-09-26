import React from 'react'

type Props = {}

function Skillbox({}: Props) {
  return (
    <div className='group relative flex cursor'>
        <img
        src='/techicons/react.svg'
        alt=''
        className='w-20 h-20 rounded-full bg-gray-800  opacity-50 hover:opacity-100 duration-500
        '/>

    </div>
  )
}

export default Skillbox