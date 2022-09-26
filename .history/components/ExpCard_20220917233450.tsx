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
        <div cl>
            <h4>
                Web & Tech Manager
            </h4>
            <p> Elightlabs Technologies LLp</p>
            <div>

            </div>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
            </ul>
        </div>

    </article>
  )
}

export default ExpCard