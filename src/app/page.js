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
        {/* second page */}
        <About />
        {/* third page */}
        <Projects />
        <section id='contact' className='min-h-screen pt-10'>
          <div className='max-w-5xl mx-auto text-center p-10'>
            <h5 className='text-sm dark:text-cyan-200'>03. What`s next</h5>
            <h3 className='lg:text-5xl text-3xl font-bold'>Get in touch</h3>
            <p className='max-w-xl lg:max-w-8xl lg:mx-auto py-12 lg:text-xl dark:text-cyan-200 leading-8'>My inbox is always open. Whether you have a question or just want to say hi or you have an opportunity for me, I’ll try my best to get back to you!
            </p>
            <a
                  className='border-2 border-cyan-600 px-4 py-2 rounded-md ml-8 dark:border-cyan-200 dark:hover:bg-primary'
                  href='mailto:almuhandith1497@gmail.com'
                >
                  Say Hello!
                </a>
          </div>
        </section>
        <footer className='flex text-xs pb-8 justify-center items-center text-slate-300 hover:text-cyan-200
        '>
          <div>
            <p>Designed and Developed by <strong className='dark:text-slate-200'>Abdulsamad Raji</strong>. </p>
            <p>Built with <strong className='dark:text-slate-200'>Next.js</strong> and <strong className='dark:text-slate-200'>Tailwind CSS</strong>, deployed with <strong className='dark:text-slate-200'>Vercel</strong>.</p>
          </div>
        </footer>
        <Cursor />
      </main>
    </div>
    
  )
}
