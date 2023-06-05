import React from 'react';
import {FiGithub, FiExternalLink} from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import web1 from 'public/web1.png';
import web2 from 'public/web2.png';

const Projects = () => {
  return (
    <main>
      <section id='projects' className='min-h-screen'>
          <div className='max-w-5xl mx-auto p-10 py-10'>
            <h3 className='text-3xl py-1 font-bold'>Some things I`ve built</h3>
            <div className='lg:flex lg:relative my-14 pb-16'>
              <div className='lg:w-3/5 relative'>
                <Link href='https://react-weather-app-sable.vercel.app/' className='cursor-pointer'>
                  <Image src={web1} alt='' className='' />
                  <div className='absolute top-0 left-0 bg-cyan-200/30 hover:bg-transparent h-full w-full'></div>
                </Link>
              </div>
              <div className='lg:absolute lg:z-10 lg:right-0 lg:w-1/2 lg:text-right'>
                <h4 className='text-xl font-semibold mb-4'>Weather App</h4>
                <div className='dark:lg:bg-primary lg:bg-white lg:drop-shadow-lg lg:rounded-md'>
                  <p className='text-md py-2 lg:px-4 leading-8 dark:text-cyan-200'>
                    This is a web app that displays the weather of cities around the world. The forecast of days in a week and other details can also be displayed.
                  </p>
                  <p className='lg:px-4 lg:pb-4'>It was developed with ReactJs and css. Openweather Api and GeoDB cities is integrated into the app.
                  </p>
                </div>
                <div className='flex gap-1 lg:gap-4 lg:flex-row-reverse text-xs lg:mt-4'>
                  <p className='dark:lg:bg-primary lg:drop-shadow-lg lg:px-2 py-2 rounded-full'>ReactJs</p>
                  <p className='dark:lg:bg-primary lg:drop-shadow-lg p-2 rounded-full'>Tailwindcss</p>
                  <p className='dark:lg:bg-primary lg:drop-shadow-lg p-2 rounded-full'>OpenweatherAPI</p>
                  <p className='dark:lg:bg-primary lg:drop-shadow-lg p-2 rounded-full'>GeoDBAPI</p>
                </div>
                <div className='flex gap-3 flex-row-reverse mt-4'>
                  <Link href='https://github.com/Almuhandith/react-weather-app' className='hover:text-cyan-200 text-xl'><FiGithub/></Link>
                  <Link href='https://react-weather-app-sable.vercel.app/' className='hover:text-cyan-200 text-xl'><FiExternalLink /></Link>
                  
                </div>
              </div>
            </div>
            <div className='lg:flex lg:relative my-14'>
              <div className='lg:w-3/5 relative'>
                <Link href='https://react-weather-app-sable.vercel.app/' className='cursor-pointer'>
                  <Image src={web2} alt='' className='' />
                  <div className='absolute top-0 left-0 bg-cyan-200/30 hover:bg-transparent h-full w-full'></div>
                </Link>
              </div>
              <div className='lg:absolute lg:z-10 lg:right-0 lg:w-1/2 lg:text-right'>
                <h4 className='text-xl font-semibold mb-4'>IP Address Tracker</h4>
                <div className='dark:lg:bg-primary lg:bg-white lg:drop-shadow-lg lg:rounded-md'>
                  <p className='text-md py-2 leading-8 lg:px-4 dark:text-cyan-200'>
                    This is a web app that displays the location of IP addresses and domains
                  </p>
                  <p className='lg:px-4 lg:pb-4'>It was developed with ReactJs and Tailwindcss. Geolocation Api and React leaflet is integrated into the app.
                  </p>
                </div>
                <div className='flex gap-0 lg:gap-4 lg:flex-row-reverse text-xs lg:mt-4'>
                  <p className='dark:lg:bg-primary lg:drop-shadow-lg lg:px-2 py-2 rounded-full'>ReactJs</p>
                  <p className='dark:lg:bg-primary lg:drop-shadow-lg p-2 rounded-full'>Tailwindcss</p>
                  <p className='dark:lg:bg-primary lg:drop-shadow-lg p-2 rounded-full'>GeoLocationAPI</p>
                  <p className='dark:lg:bg-primary lg:drop-shadow-lg p-2 rounded-full'>ReactLeaflet</p>
                </div>
                <div className='flex gap-3 flex-row-reverse mt-4'>
                  <Link href='https://github.com/Almuhandith/ip-address-tracker' className='hover:text-cyan-200 text-xl'><FiGithub/></Link>
                  <Link href='https://ip-address-tracker-abdulsamad.vercel.app/' className='hover:text-cyan-200 text-xl'><FiExternalLink /></Link>
                </div>
              </div>
            </div>
          </div>
      </section>
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
    </main>
  )
}

export default Projects
