import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg'>
      <Header/>
      <section id='hero'>
      <Hero/>
      </section>
    </div>

  )
}

export default Home
