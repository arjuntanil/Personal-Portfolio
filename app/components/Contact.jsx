'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div id='contact' className='w-full max-w-full px-4 sm:px-5 lg:px-[12%] py-16 scroll-mt-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-black transition-all duration-300 overflow-x-hidden'>
      <div className='text-center mb-12'>
        <motion.h4 
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='mb-2 text-base md:text-lg font-Ovo text-indigo-600 dark:text-indigo-400 transition-colors duration-300'>
          Connect With Me
        </motion.h4>
        <motion.h2 
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='text-3xl md:text-5xl font-Ovo font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300'>
          Get In Touch
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='mx-auto mt-4 h-1 w-20 bg-indigo-600 dark:bg-indigo-400 rounded-full transition-colors duration-300' />
      </div>

      <motion.p 
        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='text-center max-w-2xl mx-auto mb-12 font-Ovo text-gray-700 dark:text-gray-300 text-base md:text-lg transition-colors duration-300'>
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
        Feel free to reach out through any of the following channels.
      </motion.p>

      {/* Contact Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12'>
        {/* Email Card */}
        <motion.a 
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          href='mailto:arjuntanil@hotmail.com'
          className='bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group'
        >
          <div className='flex items-center gap-4 mb-4'>
            <div className='w-12 h-12 bg-white dark:bg-black rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-800 group-hover:border-indigo-400 transition-all duration-300'>
              <svg className='w-7 h-7 transition-all duration-300' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='text-gray-800 dark:text-gray-200 transition-colors duration-300'/>
                <path d='M22 6l-10 7L2 6' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='text-gray-800 dark:text-gray-200 transition-colors duration-300'/>
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-100 font-Ovo transition-colors duration-300'>Email</h3>
          </div>
          <p className='text-gray-600 dark:text-gray-300 text-sm font-Outfit break-all transition-colors duration-300'>
            arjuntanil@hotmail.com
          </p>
        </motion.a>

        {/* LinkedIn Card */}
        <motion.a 
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
          viewport={{ once: true }}
          href='https://linkedin.com/in/arjuntanil/'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group'
        >
          <div className='flex items-center gap-4 mb-4'>
            <div className='w-12 h-12 bg-white dark:bg-black rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-800 group-hover:border-blue-400 transition-all duration-300'>
              <svg className='w-7 h-7 transition-all duration-300' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' 
                fill='currentColor' className='text-gray-800 dark:text-gray-200 transition-colors duration-300'/>
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-100 font-Ovo transition-colors duration-300'>LinkedIn</h3>
          </div>
          <p className='text-gray-600 dark:text-gray-300 text-sm font-Outfit transition-colors duration-300'>
            linkedin.com/in/arjuntanil
          </p>
        </motion.a>

        {/* GitHub Card */}
        <motion.a 
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 1.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          href='https://github.com/arjuntanil'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group'
        >
          <div className='flex items-center gap-4 mb-4'>
            <div className='w-12 h-12 bg-white dark:bg-black rounded-lg flex items-center justify-center border border-gray-200 dark:border-gray-800 group-hover:border-gray-400 transition-all duration-300'>
              <svg className='w-7 h-7 transition-all duration-300' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' 
                fill='currentColor' className='text-gray-800 dark:text-gray-200 transition-colors duration-300'/>
              </svg>
            </div>
            <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-100 font-Ovo transition-colors duration-300'>GitHub</h3>
          </div>
          <p className='text-gray-600 dark:text-gray-300 text-sm font-Outfit transition-colors duration-300'>
            github.com/arjuntanil
          </p>
        </motion.a>
      </div>

      {/* Footer */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 transition-all duration-300'>
        <p className='text-gray-600 dark:text-gray-400 text-sm font-Outfit transition-colors duration-300'>
          © 2025 Arjun T Anil. All rights reserved.
        </p>
      </motion.div>
    </div>
  )
}

export default Contact
