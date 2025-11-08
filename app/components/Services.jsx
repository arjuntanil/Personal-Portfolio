'use client'
import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <div id="services" className='w-full max-w-full px-4 sm:px-6 lg:px-[12%] py-6 scroll-mt-20 bg-white dark:bg-black transition-all duration-300 overflow-x-hidden'>

      <motion.h4 
        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='text-center mb-2 text-lg font-Ovo text-gray-800 dark:text-gray-200 transition-colors duration-300'>
        What I offer
      </motion.h4>
      <motion.h2 
        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='text-center text-5xl font-Ovo text-gray-900 dark:text-gray-100 transition-colors duration-300'>
        My Services
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300 transition-colors duration-300'> 
        Full Stack Developer building AI-powered web apps with Python Django and MERN Stack. 
        I create scalable solutions with machine learning integration and focus on user-friendly design.
      </motion.p>

      {/* Enhanced Services Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 my-10'>
        {serviceData.map(({icon, title, description, link}, index) => (
          <div
            key={index}
            className='
              bg-white dark:bg-black
              border border-gray-200 dark:border-gray-800
              rounded-xl 
              px-8 py-10 
              cursor-pointer 
              transition-all
              duration-300
              ease-in-out
              hover:border-indigo-600/30 dark:hover:border-indigo-400/30
              hover:shadow-lg
              hover:-translate-y-2
              group
              relative
              overflow-hidden
            '
          >
            {/* Hover effect background */}
            <div className='
              absolute inset-0 
              bg-gradient-to-br from-indigo-600/5 to-white dark:from-indigo-400/5 dark:to-black
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-300
            '/>
            
            <div className='flex flex-col h-full relative z-10'>
              <div className='
                w-14 h-14 
                bg-indigo-600/10 dark:bg-indigo-400/10
                rounded-lg 
                flex items-center justify-center
                group-hover:bg-indigo-600/20 dark:group-hover:bg-indigo-400/20
                transition-colors
                duration-300
              '>
                <Image 
                  src={icon} 
                  alt={title} 
                  width={30}
                  height={30}
                  className='w-6 transition-transform duration-300 group-hover:scale-110'
                />
              </div>
              
              <h3 className='text-xl font-medium text-gray-800 dark:text-gray-100 mt-6 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300'>
                {title}
              </h3>
              <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow'>
                {description}
              </p>
              
              <a href={link} className='
                flex items-center gap-2 
                text-sm font-medium 
                text-indigo-600 dark:text-indigo-400
                hover:text-indigo-700 dark:hover:text-indigo-300
                transition-all
                duration-300
                w-fit
              '>
                {/* Read more */}
                <span className='inline-block transition-transform duration-300 group-hover:translate-x-1'>
                  {/* <Image 
                    src={assets.right_arrow} 
                    alt="Arrow" 
                    width={16}
                    height={16}
                    className='w-4'
                  /> */}
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services