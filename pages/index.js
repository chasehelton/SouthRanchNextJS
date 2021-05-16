import React from 'react'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Landing from '../components/Landing'
import Services from '../pages/services'
import Carousel from '../components/Carousel'
import About from '../pages/about'
import Contact from '../pages/contact'
import Footer from '../components/Footer'
import STT from '../components/STT'

export default function Home() {
  return (
    <div className="block" id="home">
      <Head>
        <title>South Ranch LLC</title>
        <link rel="icon" href="/srlogo3.png" />
      </Head>
      <NavBar/>
      <Landing/>
      <Services/>
      <Carousel/>
      <About/>
      <Contact/>
      <Footer/>
      <STT/>
    </div>
  )
}
