import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function ExpCard({}: Props) {
  return (
    <article>
        <motion.img
        initial={{
            y:-100,
            opacity:0
        }}
        transition={{duration:1.2}}
        whileInView={{opacity:1 , y:0}}
        viewport={{once:true}}
        src='https://ik.imagekit.io/husain/husain1?ik-sdk-version=javascript-1.4.3&updatedAt=1663422604057'
        className='w-32 h-32  rounded-full md:rounded-full object-cover object-center'
        />
        <div>
            <h4></h4>
        </div>

    </article>
  )
}

export default ExpCard