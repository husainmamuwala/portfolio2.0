import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Work from '../components/Work'
import Projects from '../components/Projects'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Header/>
      <section id='hero' className='snap-start'>
      <Hero/>
      </section>
      <section id='about' className='snap-center'>
      <About/>
      </section>
      <section id='work' className='snap-center'>
      <Work/>
      </section>
      <section id='skills' className='snap-center'>
      <Skills/>
      </section>
      <section id='projects' className='snap-center'>
      <Projects/>
      </section>
    </div>

  )
}

export default Home
