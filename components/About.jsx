import React from 'react'
import {SiJavascript, SiLinux, SiNextdotjs, SiPython, SiReact, SiMysql, SiTailwindcss, SiBootstrap} from 'react-icons/si';
import Image from 'next/image';
import profile from 'public/profile.jpg';

const About = () => {
  return (
    <main>
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
                  {/* <li className='flex gap-3 mb-2'><SiMysql className='mt-1'/>MySQL</li>
                  <li className='flex gap-3 mb-2'><SiPython className='mt-1'/>Python</li> */}
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
    </main>
  )
}

export default About
