import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function ExpCard({}: Props) {
  return (
    <article className='flex flex-col rounded-2xl items-center space-y-7 flex-shrink-0 w-[500px] 
    md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden '>
        <motion.img
        initial={{
            y:-100,
            opacity:0
        }}
        transition={{duration:1.2}}
        whileInView={{opacity:1 , y:0}}
        viewport={{once:true}}
        src='https://ik.imagekit.io/husain/apple-touch-icon_5imSBCKGQQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663441250721'
        className='w-32 h-32 rounded-full md:rounded-full object-cover object-center'
        />
        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>
                Web & Tech Manager
            </h4>
            <p className='font-bold text-2xl mt-1'> Elightlabs Technologies LLP</p>
            <div className='flex space-x-2 my-2'>
                <img
                src='./public/techicons/wordpres.svg'
                alt=''/>
                <img
                src='https://ik.imagekit.io/husain/html_4yWdPKbLp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663438141082'
                className='h-10 w-10'/>
                <img
                src='https://ik.imagekit.io/husain/html_4yWdPKbLp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663438141082'
                className='h-10 w-10'/>
            </div>
            <ul className='list-disc space-y-4 ml-5 text-lg p-4'>
                <li>Managing and Client Communications</li>
                <li>Software Planning & Designing</li>
                <li>UI model designing</li>
                <li>Next.js and its lib's</li>
                
            </ul>
        </div>

    </article>
  )
}

export default ExpCard