import { useState, useCallback, useEffect } from 'react'

import Head from 'next/head'
import styles from '../styles/Home.module.css'

import MobileNav from '../components/MobileNav'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Roadmap from '../components/sections/Roadmap'
import News from '../components/sections/News'
import Whitepaper from '../components/sections/Whitepaper'
import Footer from '../components/Footer'



export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>ENY Token</title>
        <meta name="description" content="En Y Token - Official web site" />
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/wheelie1.svg" />
      </Head>

      {/* <Navbar /> */}
      <MobileNav />
      <main className={styles.main}>
        <Hero />
        <About />
        <Roadmap />
        <News />
        <Whitepaper />
      </main>
      <Footer />
    </div>
  )
}
