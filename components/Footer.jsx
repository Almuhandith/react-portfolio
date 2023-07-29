import React from 'react'

const Footer = () => {
  return (
    <footer className='flex text-xs pb-8 justify-center items-center text-slate-300 hover:text-cyan-200
    '>
      <div>
        <p>Designed and Developed by <strong className='dark:text-slate-200'>Abdulsamad Raji</strong>. </p>
        <p>Built with <strong className='dark:text-slate-200'>Next.js</strong> and <strong className='dark:text-slate-200'>Tailwind CSS</strong>, deployed with <strong className='dark:text-slate-200'>Vercel</strong>.</p>
      </div>
    </footer>
  )
}

export default Footer
