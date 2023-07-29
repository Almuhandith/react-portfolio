import React from 'react'

const Contact = () => {
  return (
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
  )
}

export default Contact
