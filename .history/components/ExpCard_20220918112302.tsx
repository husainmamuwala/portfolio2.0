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
                <svg
                <?xml version="1.0" ?><svg id="Layer_2" style="enable-background:new 0 0 600 600;" version="1.1" viewBox="0 0 600 600" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">
                .st0{fill:#00D8FF;}
            </style><circle class="st0" cx="299.5" cy="299.6" r="50.2"/><g><path class="st0" d="M299.5,414.6c-70.5,0-132.1-8.3-178.2-24.1c-29.9-10.2-55.3-23.8-73.4-39.3c-19.2-16.4-29.4-34.3-29.4-51.6   c0-33.2,36.4-65.7,97.5-86.9c50-17.4,115.2-27.1,183.4-27.1c67,0,131.3,9.4,181,26.6c29.1,10,53.6,23,71,37.4   c18.9,15.8,28.9,33.1,28.9,50c0,34.5-40.7,69.4-106.3,91.1C427.6,406.1,365.6,414.6,299.5,414.6z M299.5,209.6   c-64.7,0-128.7,9.4-175.5,25.7c-56.2,19.6-81.4,46.4-81.4,64.3c0,18.6,27.1,47.9,86.5,68.2c43.6,14.9,102.6,22.8,170.4,22.8   c63.6,0,122.9-8,167-22.7c61.7-20.5,89.9-49.8,89.9-68.3c0-9.5-7.2-20.7-20.3-31.6c-15.1-12.6-37.1-24.1-63.4-33.2   C425.4,218.6,363.9,209.6,299.5,209.6z"/></g><g><path class="st0" d="M185.6,549.8c-10.2,0-19.2-2.2-26.8-6.6c-28.7-16.6-38.7-64.4-26.6-127.9c9.9-52.1,34.1-113.3,68.2-172.4   c33.5-58,73.7-109,113.4-143.5c23.2-20.2,46.7-35,67.9-42.8c23.1-8.5,43.1-8.5,57.7-0.1c29.9,17.2,39.8,70,25.8,137.6   c-9.9,48-33.5,105.9-66.5,163.2c-35.2,61-73.2,110.2-109.9,142.3c-23.8,20.8-48.3,36-70.7,43.9   C206.4,547.7,195.4,549.8,185.6,549.8z M210.7,248.9l10.4,6c-32.3,56-56.2,116.1-65.4,164.9c-11.1,58.5-0.4,93.7,15,102.6   c3.8,2.2,8.8,3.4,14.9,3.4c19.9,0,51.2-12.6,87.4-44.2c34.7-30.3,71-77.5,104.9-136.2c31.8-55.1,54.4-110.5,63.8-156   c13.1-63.7,1.8-102.7-14.3-112c-8.2-4.7-21.5-4.1-37.5,1.8c-18.5,6.8-39.4,20.1-60.4,38.4c-37.7,32.8-76.2,81.6-108.4,137.4   L210.7,248.9z"/></g><g><path class="st0" d="M413.4,550.1c-27.2,0-61.7-16.4-97.7-47.4c-40.2-34.6-81.1-86.1-115.3-145.2v0c-33.6-58-57.6-118.3-67.7-170   c-5.9-30.2-7-57.9-3.2-80.2c4.2-24.3,14.1-41.6,28.8-50.1c29.8-17.3,80.5,0.5,132.1,46.4c36.6,32.5,75,81.9,108.1,139.1   c35.3,61,59,118.5,68.4,166.3c6.1,31,7.1,59.8,2.8,83.2c-4.6,24.9-15,42.6-30,51.3C432.2,547.9,423.3,550.1,413.4,550.1z    M221.2,345.5c32.4,56,72.6,106.7,110.2,139c45.1,38.8,80.9,47.2,96.4,38.2c16.1-9.3,27.9-47.4,15.7-109   c-9-45.2-31.7-100.2-65.7-158.9c-31.9-55.1-68.6-102.4-103.3-133.2C225.9,78.4,186.5,68.7,170.4,78c-8.2,4.7-14.3,16.6-17.2,33.4   c-3.3,19.4-2.3,44.2,3.1,71.5C165.9,232,188.9,289.7,221.2,345.5L221.2,345.5z"/></g></svg>/>
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