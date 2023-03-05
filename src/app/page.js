"use client";

import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import {SiJavascript, SiLinux, SiNextdotjs, SiPython, SiReact, SiMysql, SiApache, SiTailwindcss} from 'react-icons/si';
import Image from 'next/image';
// import design from 'public/design.png';
// import code from 'public/code.png';
// import consulting from 'public/consulting.png';
import web1 from 'public/web1.png';
import web2 from 'public/web2.png';
import React, { useState } from 'react';
import profile from 'public/profile.jpg';


export default function Home() {
  //Darkmode hook
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Abdulsamad Raji Portfolio</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>


      <main className='bg-white px-10 md:px-20 lg:px-50 dark:bg-gray-900 dark:text-white'>
        <section className=" min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-bold font-burtons'>AR.</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>
              </li>
              <li>
                <a
                  className='border-2 border-cyan-600 px-4 py-2 rounded-md ml-8 dark:border-cyan-200 dark:hover:bg-cyan-900'
                  href='#'
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='max-w-5xl mx-auto p-10 py-10'>
            <h2 className='text-5xl py-2 text-cyan-600 dark:text-cyan-100 font-medium md:text-6xl lg:text-7xl'>Abdulsamad Raji.</h2>
            <h3 className='text-3xl py-2 text-cyan-500 dark:text-cyan-900 font-medium md:text-6xl lg:text-7xl'>I build things for the web</h3>
            <h4 className='text-2xl pt-10 md:text-3xl'>Software Engineer</h4>
            <p className='text-md py-3 leading-8 text-gray-800 md:text-xl max-w-xl dark:text-gray-400'>
            I’m a software engineer specializing in building exceptional digital experiences
            </p>
          </div>
          <div className='text-5xl flex justify-center max-w-xl mx-auto gap-16 py-3 text-gray-600 dark:text-gray-400'>
            <a href='#' className='hover:text-cyan-600 dark:hover:text-cyan-200'><AiFillTwitterCircle/></a>
            <a href='#' className='hover:text-cyan-600 dark:hover:text-cyan-200'><AiFillLinkedin/></a>
            <a href='https://www.github.com/Almuhandith' className='hover:text-cyan-600 dark:hover:text-cyan-200'><AiFillGithub/></a>
          </div>
        </section>
        {/* second page */}
        <section className='min-h-screen'>
          <div className='max-w-5xl mx-auto p-10 py-10'>
            <h3 className='text-3xl py-4 font-bold'>About me</h3>
            <div className='lg:flex gap-10'>
              <div>
                <p className='max-w-xl py-5 lg:text-xl dark:text-gray-400 leading-8'>Hello! My name is Abdulsamad and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try to code for fun in my free time — turns out a hobby could actually grow into a career</p>
                <p className='max-w-xl py-5 lg:text-xl dark:text-gray-400 leading-8'>Here are a few technologies I`ve been working with lately</p>
                <ul className='dark:text-gray-400 lg:text-xl grid grid-cols-2'>
                  <li className='flex gap-3 mb-2'><SiJavascript className='mt-1' />JavaScript</li>
                  <li className='flex gap-3 mb-2'><SiReact className='mt-1' />React</li>
                  <li className='flex gap-3 mb-2'><SiNextdotjs className='mt-1'/>NextJs</li>
                  <li className='flex gap-3 mb-2'><SiMysql className='mt-1'/>MySQL</li>
                  <li className='flex gap-3 mb-2'><SiPython className='mt-1'/>Python</li>
                  <li className='flex gap-3 mb-2'><SiLinux className='mt-1'/>Linux</li>
                  <li className='flex gap-3 mb-2'><SiApache className='mt-1'/>Apache</li>
                  <li className='flex gap-3 mb-2'><SiTailwindcss className='mt-1'/>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <Image alt='' src={profile} height={250} width={250} className='transition ease-in-out contrast-75 hover:filter-none hover:-translate-y-1 hover:scale-110 duration-700 mt-3'/>
              </div>
            </div>
          </div>
        </section>
        {/* <section>
          <div>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit labore, quaerat sint accusantium voluptatum numquam sapiente quos unde pariatur autem modi at qui corporis doloremque tenetur esse adipisci? Tempore, omnis?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni ut unde aliquam perferendis veniam nobis. Architecto consequatur magni, ipsam eos minima quaerat modi ratione assumenda totam alias quam quidem!</p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center justify-center shadow-lg p-10 rounded-xl my-10'>
              <Image alt = 'design' src={design} height={100} width={100} className= '' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful designs</h3>
              <p className='py-2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, non dolor delectus repellendus ducimus iusto illo dolore ad ab? Illo repudiandae inventore aperiam soluta possimus dolorum ea non nam vel!
              </p>
              <h4 className='py-4 text-teal-600'>Development languages and tools i use</h4>
              <p className='text-gray-800 py-1 dark:text-gray-400'>JavaScript</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Python</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>MySQL</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>C</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image alt = '' src={code} height={100} width={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Frontend</h3>
              <p className='py-2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, non dolor delectus repellendus ducimus iusto illo dolore ad ab? Illo repudiandae inventore aperiam soluta possimus dolorum ea non nam vel!
              </p>
              <h4 className='py-4 text-teal-600'>Development languages and tools i use</h4>
              <p className='text-gray-800 py-1 dark:text-gray-400'>JavaScript</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>React</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Typescript</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>NextJs</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image alt = '' src={consulting} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Backend</h3>
              <p className='py-2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, non dolor delectus repellendus ducimus iusto illo dolore ad ab? Illo repudiandae inventore aperiam soluta possimus dolorum ea non nam vel!
              </p>
              <h4 className='py-4 text-teal-600'>Development languages and tools i use</h4>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Flask</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>Python</p>
              <p className='text-gray-800 py-1 dark:text-gray-400'>MySQL</p>
            </div>
          </div>
        </section> */}
        {/* third page */}
        <section className='min-h-screen'>
          <div className='max-w-5xl mx-auto p-10 py-10'>
            <h3 className='text-3xl py-1 font-bold'>Some things I`ve built</h3>
            <h4 className='text-xl font-semibold mt-8'>1. Weather App</h4>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
              This is a web app that displays the weather of cities around the world. The forecast of days in a week and other details can also be displayed.
            </p>
            <p>It was developed with ReactJs and css. Openweather Api and GeoDB cities is integrated into the app</p>
            <div className='py-10'>
              <Image src={web1} alt='' className='rounded-lg object-cover' width={'100%'} height={'100%'} />
            </div>
          </div>
          <div className='max-w-5xl mx-auto p-10 py-10'>
            <h4 className='text-xl font-semibold mt-8'>2. Talent Hauz</h4>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
              This is a web app where talents are tested and recommended to interested recruiters for job availability.
            </p>
            <p>The frontend was developed with ReactJs and Bootstrap Css.</p>
            <div className='py-10'>
              <Image src={web2} alt='' className='rounded-lg object-cover' width={'100%'} height={'100%'} />
            </div>
          </div>
        </section>
        {/* fourth page */}
        <section className='min-h-screen pt-10'>
          <div className='max-w-5xl mx-auto text-center p-10'>
            <h3 className='lg:text-5xl text-3xl font-bold'>Get in touch</h3>
            <p className='max-w-xl lg:max-w-8xl lg:mx-auto py-12 lg:text-xl dark:text-gray-400 leading-8'>My inbox is always open. Whether you have a question or just want to say hi or you have an opportunity for me, I’ll try my best to get back to you!
            </p>
            <a
                  className='border-2 border-cyan-600 px-4 py-2 rounded-md ml-8 dark:border-cyan-200 dark:hover:bg-cyan-900'
                  href='mailto:almuhandith1497@gmail.com'
                >
                  Say Hello!
                </a>
          </div>
        </section>
      </main>
    </div>
    
  )
}
