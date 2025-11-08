'use client'
import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div id='about' className='w-full max-w-full px-4 sm:px-6 md:px-[12%] py-16 scroll-mt-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-black transition-all duration-300 overflow-x-hidden'>
      <div className='text-center mb-12'>
        <motion.h4 
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='mb-2 text-base md:text-lg font-Ovo text-indigo-600 dark:text-indigo-400 transition-colors duration-300'>
          Introduction
        </motion.h4>
        <motion.h2 
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='text-3xl md:text-5xl font-Ovo font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300'>About Me</motion.h2>
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
          className='mx-auto mt-4 h-1 w-20 bg-indigo-600 dark:bg-indigo-400 rounded-full transition-colors duration-300' />
      </div>

      <div className='flex w-full flex-col lg:flex-row items-center gap-10 lg:gap-20 my-10 lg:my-16'>
        {/* Image Section */}
        <div className='w-56 sm:w-64 md:w-80 rounded-3xl mx-auto lg:mx-0 relative group'>
          <div className='absolute inset-0 bg-indigo-600/10 dark:bg-indigo-400/10 rounded-3xl -rotate-3 group-hover:rotate-0 transition-transform duration-500' />
          <Image 
            src={assets.user_image} 
            alt='user image' 
            width={320}
            height={320}
            className='w-full rounded-2xl relative z-10 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500'
          />
        </div>

        {/* Content Section */}
        <div className='flex-1 w-full'>
          <p className='mb-8 md:mb-12 text-sm sm:text-base font-Ovo max-w-2xl mx-auto lg:mx-0 text-gray-600 dark:text-gray-300 leading-relaxed'>
            Hi, I'm Arjun T Anil, a passionate Full Stack Developer and Machine Learning enthusiast who bridges the gap between intelligent systems and user-friendly web applications. 
            I specialize in building robust solutions using Django, Next.js, and the MERN stack, with a special knack for integrating AI capabilities into web platforms.
          </p>

          {/* Info Cards */}
          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto lg:mx-0'>
            {infoList.map(({icon, iconDark, title, description}, index) => (
              <li 
                className='bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl p-5 sm:p-6 cursor-pointer transition-all duration-300 hover:border-indigo-600/30 dark:hover:border-indigo-400/30 hover:shadow-md hover:-translate-y-1'
                key={index}
              > 
                <div className='flex items-center gap-3'>
                  <div className='p-2 bg-indigo-600/10 dark:bg-indigo-400/10 rounded-lg transition-colors duration-300'>
                    <Image 
                      src={icon} 
                      alt={title}  
                      className='w-5 sm:w-6'
                      width={24}
                      height={24}
                    />
                  </div>
                  <h3 className='font-semibold text-gray-800 dark:text-gray-100 text-sm sm:text-base transition-colors duration-300'>{title}</h3>
                </div>
                <p className='mt-3 text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed transition-colors duration-300'>{description}</p>
              </li>
            ))}
          </ul>
          
          {/* Tools Section */}
          <div className='mt-12 pb-16'>
            <h4 className='text-center mb-6 text-gray-700 dark:text-gray-300 font-Ovo text-sm sm:text-base font-medium transition-colors duration-300'>Technologies I use</h4>

            <ul className='flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 pb-4'>
              {toolsData.map((tool, index) => (
                <motion.li 
                  key={index}
                  className='relative'
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onTouchStart={() => setHoveredIndex(index)}
                  onTouchEnd={() => setTimeout(() => setHoveredIndex(null), 2000)}
                  whileHover={{ scale: 1.15, y: -8 }}
                  whileTap={{ scale: 1.15, y: -8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div 
                    className='flex items-center justify-center w-12 sm:w-14 h-12 sm:h-14 bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-xl 
                    cursor-pointer shadow-sm transition-all duration-300'
                    whileHover={{ 
                      borderColor: 'rgb(99 102 241)',
                      boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.3)'
                    }}
                  >
                    <Image 
                      src={tool.icon} 
                      alt={tool.label} 
                      width={48}
                      height={48}
                      className='w-8 sm:w-10 p-1 sm:p-2 object-contain transition-all duration-300'
                    />
                  </motion.div>
                  
                  {/* Tooltip with AnimatePresence */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: -5, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -5, filter: 'blur(10px)' }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className='absolute -bottom-7 left-1/2 -translate-x-1/2 z-50 pointer-events-none whitespace-nowrap'
                      >
                        <div className='text-gray-900 dark:text-white text-[10px] sm:text-xs font-Outfit font-semibold px-2 py-0.5'>
                          {tool.label}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About