"use client";

import Head from 'next/head';
// import design from 'public/design.png';
// import code from 'public/code.png';
// import consulting from 'public/consulting.png';
import React, { useState } from 'react';
import Cursor from '../../components/Cursor';
import Navbar from '../../components/Navbar';
import About from '../../components/About';
import Hero from '../../components/Hero';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Abdulsamad Raji Portfolio</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.png'/>
      </Head>


      <main className={`font-trebuchet-ms bg-white px-3 md:px-20 lg:px-50 dark:bg-primary dark:text-white`}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <Cursor />
      </main>
    </div>
    
  )
}
