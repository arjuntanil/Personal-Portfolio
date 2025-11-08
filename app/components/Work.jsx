'use client'
import { workData } from '@/assets/assets'
import React from 'react'
import { motion } from 'framer-motion'

const Work = () => {
  return (
    <div id='work' className='w-full max-w-full px-4 sm:px-5 lg:px-[12%] py-6 scroll-mt-20 bg-white dark:bg-black transition-all duration-300 overflow-x-hidden'>
      <motion.h4 
        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='text-center mb-1 text-lg font-Ovo text-gray-800 dark:text-gray-200 transition-colors duration-300'>
        My Portfolio
      </motion.h4>
      <motion.h2 
        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='text-center text-5xl font-Ovo text-gray-900 dark:text-gray-100 transition-colors duration-300'>
        My Latest Projects
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        viewport={{ once: true }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-gray-700 dark:text-gray-300 transition-colors duration-300'> 
        Welcome to my portfolio! Here are my recent projects showcasing full-stack development, 
        AI/ML integration, and innovative solutions.
      </motion.p>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto [&>*:last-child:nth-child(odd)]:md:col-span-2 [&>*:last-child:nth-child(odd)]:md:max-w-xl [&>*:last-child:nth-child(odd)]:md:mx-auto'>
        {workData.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className='border border-gray-300 dark:border-gray-800 rounded-lg p-6 hover:shadow-xl transition-all duration-300 bg-white dark:bg-black hover:scale-105'
          >
            <div className='flex justify-between items-start mb-3'>
              <h3 className='text-xl font-bold font-Ovo text-gray-900 dark:text-gray-100 transition-colors duration-300'>
                {project.title}
              </h3>
              {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='group flex-shrink-0'
                  aria-label="View on GitHub"
                >
                  <svg 
                    className='w-6 h-6 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 group-hover:scale-110'
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
            </div>
            
            <p className='text-sm text-gray-600 dark:text-gray-400 font-Ovo mb-3 transition-colors duration-300'>
              {project.date}
            </p>
            
            <p className='text-gray-700 dark:text-gray-300 font-Ovo mb-4 leading-relaxed transition-colors duration-300'>
              {project.description}
            </p>
            
            <div className='flex flex-wrap gap-2'>
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className='px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-xs font-Outfit border border-gray-200 dark:border-gray-800 transition-all duration-300'
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Work
