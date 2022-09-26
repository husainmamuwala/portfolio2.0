import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function ExpCard({}: Props) {
  return (
    <article className='flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[588px]'>
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
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>
                Web & Tech Manager
            </h4>
            <p className='font-bold text-2xl mt-1'> Elightlabs Technologies LLp</p>
            <div className='flex space-x-2 my-2'>
                <img
                src='https://ik.imagekit.io/husain/html_4yWdPKbLp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663438141082'
                className='h-10 w-10'/>
                <img
                src='https://ik.imagekit.io/husain/html_4yWdPKbLp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663438141082'
                className='h-10 w-10'/>
                <img
                src='https://ik.imagekit.io/husain/html_4yWdPKbLp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663438141082'
                className='h-10 w-10'/>
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