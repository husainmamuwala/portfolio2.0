import React from 'react'

type Props = {}

function Skillbox({}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <img
        src='/techicons/react.svg'
        alt=''
        className='h-24 w-24 border boprder-gray
        '/>

    </div>
  )
}

export default Skillbox