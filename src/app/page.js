"use client";

import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from 'next/image';
import design from 'public/design.png';
import code from 'public/code.png';
import consulting from 'public/consulting.png';
import web1 from 'public/web1.png';
import web2 from 'public/web2.png';
import React, { useState } from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Abdulsamad Raji Portfolio</title>
        <meta name='description' content='' />
        <link rel='icon' href='/favicon.ico' />
      </Head>


      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white'>
        <section className=" min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-bold font-burtons'>AR.</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>
              </li>
              <li>
                <a
                  className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
                  href='#'
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10 py-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl lg:text-7xl'>Abdulsamad Raji</h2>
            <h3 className='text-2xl py-2 md:text-3xl'>Software Engineer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400'>
              Providing services for programming needs. Join me down below lets get cracking!
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
            <a href='#'><AiFillTwitterCircle/></a>
            <a href='#'><AiFillLinkedin/></a>
            <a href='#'><AiFillGithub/></a>
          </div>
          <div className=''>

          </div>
        </section>
        {/* second page */}
        <section>
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
        </section>
        {/* third page */}
        <section>
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit labore, quaerat sint accusantium voluptatum numquam sapiente quos unde pariatur autem modi at qui corporis doloremque tenetur esse adipisci? Tempore, omnis?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni ut unde aliquam perferendis veniam nobis. Architecto consequatur magni, ipsam eos minima quaerat modi ratione assumenda totam alias quam quidem!</p>
          </div>
          <div className= 'flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={web1} alt='' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web2} alt='' className='rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' />
            </div>
          </div>
        </section>
      </main>
    </div>
    
  )
}
