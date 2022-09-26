import React from 'react'
import {motion} from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <div  className=' flex flex-col relative h-screen  text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center '>
    
    
        <h3 className='absolute top-24 tracking-[28px] text-gray-500 font-semibold uppercase
        text-2xl'>About Moi</h3>

        <motion.img
        initial={{
            x:-200,
            opacity:0,
        }}
        whileInView={{
            x:0,
            opacity:1,
        }}
        transition={{
            duration:1,
        }}
        src='https://ik.imagekit.io/husain/husain1?ik-sdk-version=javascript-1.4.3&updatedAt=1663422604057'
        className='mt-20 mb-0 md:mb-0 flex-shrink-0 w-64 h-64 rounded-full object-cover md:rounded-xl md:h-96 md:w-96'
        />

        <div className='space-y-10 md:px-16'>
        <h4 className='text-3xl font-semibold md:text-4xl'>Here's A <span className='underline decoration-[#1f9aec]'>Little</span> Background</h4>    
        <p className='text-sm md:text'>Hi, I’m Husain! I'm a <span className='text-[#1f9aec]'>web developer</span> with in-depth experience in UI/UX design. In a nutshell,
             I create websites that help organizations address business challenges and meet their needs.
              I manage everything from website navigation and layout to a company's web hosting and security architecture.
               My expertise lies within front-end web apps, and the main languages in my tech stack are 
               Next ,React, and of course HTML/CSS. I’m a lifelong learner (currently taking a course on building AI
                chatbots with Python!) and love to Cycle,Trek, and find The best food spots in Mumbai City. 
        </p>
        </div>        
    </div>
  )
}

export default About