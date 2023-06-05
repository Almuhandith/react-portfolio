import React from 'react'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Hero = () => {
  return (
    <main>
      <section className="min-h-screen pt-16 lg:pt-24">
          <div className='max-w-5xl mx-auto p-10 py-10'>
            <h2 className='text-5xl py-2 text-cyan-600 dark:text-cyan-100 font-medium md:text-6xl lg:text-7xl'>Abdulsamad Raji.</h2>
            <h3 className='text-3xl py-2 text-cyan-800 dark:text-cyan-200 font-medium md:text-6xl lg:text-7xl'>I build things for the web</h3>
            <h4 className='text-2xl pt-10 md:text-3xl'>Software Engineer</h4>
            <p className='text-md py-3 leading-8 text-cyan-800 md:text-xl max-w-xl dark:text-cyan-200'>
            I’m a software engineer specializing in building exceptional digital experiences
            </p>
          </div>
          <div className='text-5xl flex justify-center max-w-xl mx-auto gap-16 py-3 text-gray-600 dark:text-cyan-200'>
            <a href='#' className='hover:text-cyan-600 dark:hover:text-cyan-200'><AiFillTwitterCircle/></a>
            <a href='https://www.linkedin.com/in/abdulsamad-raji' target="_blank" rel='noreferrer' className='hover:text-cyan-600 dark:hover:text-cyan-200'><AiFillLinkedin/></a>
            <a href='https://www.github.com/Almuhandith' className='hover:text-cyan-600 dark:hover:text-cyan-200'><AiFillGithub/></a>
          </div>
        </section>
    </main>
  )
}

export default Hero
