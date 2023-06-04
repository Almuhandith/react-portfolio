"use client";

import Head from 'next/head';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import {SiJavascript, SiLinux, SiNextdotjs, SiPython, SiReact, SiMysql, SiTailwindcss, SiBootstrap} from 'react-icons/si';
import {FiGithub, FiExternalLink} from 'react-icons/fi';
import Image from 'next/image';
// import design from 'public/design.png';
// import code from 'public/code.png';
// import consulting from 'public/consulting.png';
import web1 from 'public/web1.png';
import web2 from 'public/web2.png';
import React, { useState } from 'react';
import profile from 'public/profile.jpg';
import Cursor from '../../components/Cursor';
import Navbar from '../../components/Navbar';


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
        {/* second page */}
        <section id='about' className='min-h-screen'>
          <div className='max-w-5xl mx-auto p-10 py-10'>
            <h3 className='text-3xl py-4 font-bold'>About me</h3>
            <div className='lg:flex gap-10'>
              <div>
                <p className={`max-w-xl py-5 lg:text-xl dark:text-cyan-200 leading-8`}>Hello! My name is Abdulsamad and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try to code for fun in my free time — turns out a hobby could actually grow into a career</p>
                <p className='max-w-xl py-5 lg:text-xl dark:text-cyan-200 leading-8'>Here are a few technologies I`ve been working with lately</p>
                <ul className='dark:text-cyan-200 lg:text-xl grid grid-cols-2'>
                  <li className='flex gap-3 mb-2'><SiJavascript className='mt-1' />JavaScript</li>
                  <li className='flex gap-3 mb-2'><SiReact className='mt-1' />React</li>
                  <li className='flex gap-3 mb-2'><SiNextdotjs className='mt-1'/>NextJs</li>
                  <li className='flex gap-3 mb-2'><SiMysql className='mt-1'/>MySQL</li>
                  <li className='flex gap-3 mb-2'><SiPython className='mt-1'/>Python</li>
                  <li className='flex gap-3 mb-2'><SiLinux className='mt-1'/>Linux</li>
                  <li className='flex gap-3 mb-2'><SiBootstrap className='mt-1'/>Bootstrap CSS</li>
                  <li className='flex gap-3 mb-2'><SiTailwindcss className='mt-1'/>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <Image alt='' src={profile} height={250} width={250} className='transition ease-in-out contrast-75 hover:filter-none hover:-trancyan-y-1 hover:scale-110 duration-700 mt-3'/>
              </div>
            </div>
          </div>
        </section>
        {/* third page */}
        <section id='projects' className='min-h-screen'>
          <div className='max-w-5xl mx-auto p-10 py-10'>
            <h3 className='text-3xl py-1 font-bold'>Some things I`ve built</h3>
            <div className='lg:flex lg:relative my-14 pb-16'>
              <div className='lg:w-3/5'>
                <a href='https://react-weather-app-sable.vercel.app/' className='cursor-pointer'>
                  <Image src={web1} alt='' className='' />
                </a>
              </div>
              <div className='lg:absolute lg:z-10 lg:right-0 lg:w-1/2 lg:text-right'>
                <h4 className='text-xl font-semibold mb-4'>Weather App</h4>
                <div className='dark:lg:bg-primary lg:bg-white lg:border lg:border-cyan-200'>
                  <p className='text-md py-2 lg:px-4 leading-8 dark:text-cyan-200'>
                    This is a web app that displays the weather of cities around the world. The forecast of days in a week and other details can also be displayed.
                  </p>
                  <p className='lg:px-4 lg:pb-4'>It was developed with ReactJs and css. Openweather Api and GeoDB cities is integrated into the app.
                  </p>
                </div>
                <div className='flex gap-1 lg:gap-4 lg:flex-row-reverse text-xs lg:mt-4'>
                  <p className='dark:lg:bg-primary lg:border lg:border-cyan-200 lg:px-2 py-2 rounded-full'>ReactJs</p>
                  <p className='dark:lg:bg-primary lg:border lg:border-cyan-200 p-2 rounded-full'>Tailwindcss</p>
                  <p className='dark:lg:bg-primary lg:border lg:border-cyan-200 p-2 rounded-full'>OpenweatherAPI</p>
                  <p className='dark:lg:bg-primary lg:border lg:border-cyan-200 p-2 rounded-full'>GeoDBAPI</p>
                </div>
                <div className='flex gap-3 flex-row-reverse mt-4'>
                  <a href='https://github.com/Almuhandith/react-weather-app' className='hover:text-cyan-200'><FiGithub/></a>
                  <a href='https://react-weather-app-sable.vercel.app/' className='hover:text-cyan-200'><FiExternalLink /></a>
                  
                </div>
              </div>
            </div>
            <div className='lg:flex lg:relative my-14'>
              <div className='lg:w-3/5'>
                <a href='https://react-weather-app-sable.vercel.app/' className='cursor-pointer'>
                  <Image src={web2} alt='' className='' />
                </a>
              </div>
              <div className='lg:absolute lg:z-10 lg:right-0 lg:w-1/2 lg:text-right'>
                <h4 className='text-xl font-semibold mb-4'>IP Address Tracker</h4>
                <div className='dark:lg:bg-primary lg:bg-white lg:border lg:border-cyan-200'>
                  <p className='text-md py-2 leading-8 lg:px-4 dark:text-cyan-200'>
                    This is a web app that displays the location of IP addresses and domains
                  </p>
                  <p className='lg:px-4 lg:pb-4'>It was developed with ReactJs and Tailwindcss. Geolocation Api and React leaflet is integrated into the app.
                  </p>
                </div>
                <div className='flex gap-0 lg:gap-4 lg:flex-row-reverse text-xs lg:mt-4'>
                  <p className='dark:lg:bg-primary lg:border lg:border-cyan-200 lg:px-2 py-2 rounded-full'>ReactJs</p>
                  <p className='dark:lg:bg-primary lg:border lg:border-cyan-200 p-2 rounded-full'>Tailwindcss</p>
                  <p className='dark:lg:bg-primary lg:border lg:border-cyan-200 p-2 rounded-full'>Geo_location_API</p>
                  <p className='dark:lg:bg-primary lg:border lg:border-cyan-200 p-2 rounded-full'>React-leaflet</p>
                </div>
                <div className='flex gap-3 flex-row-reverse mt-4'>
                  <a href='https://github.com/Almuhandith/ip-address-tracker' className='hover:text-cyan-200'><FiGithub/></a>
                  <a href='https://ip-address-tracker-abdulsamad.vercel.app/' className='hover:text-cyan-200'><FiExternalLink /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* fourth page */}
        {/* <section className='min-h-screen max-w-5xl mx-auto'>
          <div className=''>
            <h3 className='text-3xl py-1'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-cyan-800 dark:text-cyan-200'>
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
              <h4 className='py-4 text-cyan-600'>Development languages and tools i use</h4>
              <p className='text-cyan-800 py-1 dark:text-cyan-200'>JavaScript</p>
              <p className='text-cyan-800 py-1 dark:text-cyan-200'>Python</p>
              <p className='text-cyan-800 py-1 dark:text-cyan-200'>MySQL</p>
              <p className='text-cyan-800 py-1 dark:text-cyan-200'>C</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image alt = '' src={code} height={100} width={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Frontend</h3>
              <p className='py-2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, non dolor delectus repellendus ducimus iusto illo dolore ad ab? Illo repudiandae inventore aperiam soluta possimus dolorum ea non nam vel!
              </p>
              <h4 className='py-4 text-cyan-600'>Development languages and tools i use</h4>
              <p className='text-cyan-800 py-1 dark:text-cyan-200'>JavaScript</p>
              <p className='text-cyan-800 py-1 dark:text-cyan-200'>React</p>
              <p className='text-cyan-800 py-1 dark:text-cyan-200'>Typescript</p>
              <p className='text-cyan-800 py-1 dark:text-cyan-200'>NextJs</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              <Image alt = '' src={consulting} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Backend</h3>
              <p className='py-2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, non dolor delectus repellendus ducimus iusto illo dolore ad ab? Illo repudiandae inventore aperiam soluta possimus dolorum ea non nam vel!
              </p>
              <h4 className='py-4 text-cyan-600'>Development languages and tools i use</h4>
              <p className='text-cyan-800 py-1 dark:text-cyan-200'>Flask</p>
              <p className='text-cyan-800 py-1 dark:text-cyan-200'>Python</p>
              <p className='text-cyan-800 py-1 dark:text-cyan-200'>MySQL</p>
            </div>
          </div>
        </section> */}
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
        <Cursor />
      </main>
    </div>
    
  )
}
