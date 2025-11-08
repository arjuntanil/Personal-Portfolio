'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import TrueFocus from './TrueFocus'

const Header = () => {
  return (
    <div className="pt-24 px-4 sm:px-5 lg:px-8 xl:px-[8%] py-10 bg-white dark:bg-black transition-all duration-300 w-full max-w-full overflow-x-hidden"> {/* Changed pt-20 to pt-24 to match navbar height */}
      <div className="flex flex-col items-center text-center">
        {/* Added margin-top and padding for the profile image container */}
        <motion.div 
          className="mt-6 mb-4"
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image 
            src={assets.arjun_img} 
            alt='Profile' 
            className='rounded-full w-28 md:w-32' 
            width={128}
            height={128}
          />
        </motion.div>

        <motion.h3 
          className='flex items-end justify-center gap-2 text-xl md:text-2xl mb-2 font-Ovo text-gray-800 dark:text-gray-200 transition-colors duration-300'
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Hi! I'm Arjun T Anil 
          <motion.div
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut"
            }}
          >
            <Image src={assets.hand_icon} alt='waving hand' className='w-5' width={20} height={20}/>
          </motion.div>
        </motion.h3> 

        <div className='mb-4 w-full'>
          <TrueFocus 
            sentence="AI Developer | Full Stack Engineer"
            manualMode={true}
            blurAmount={3}
            borderColor="rgb(99 102 241)"
            glowColor="rgba(99, 102, 241, 0.6)"
            animationDuration={0.4}
            pauseBetweenAnimations={1.5}
          />
        </div>

        <motion.p 
          className='max-w-2xl mx-auto font-Ovo text-base md:text-lg mb-6 text-gray-700 dark:text-gray-300 transition-colors duration-300'
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          Full-stack developer building AI-driven applications. 
          Focused on creating scalable, accessible solutions with cloud deployment expertise. 
          Passionate about performance and data-driven development.
        </motion.p>

        <motion.div 
          className='flex flex-col sm:flex-row items-center gap-3 mt-3'
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        >
          <motion.a 
            href="#contact"
            className='px-8 py-2.5 text-sm border border-gray-800 dark:border-gray-200 rounded-full bg-black dark:bg-gray-800 text-white dark:text-gray-100 flex items-center gap-2 transition-all duration-300'
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
              contact me <Image src={assets.right_arrow_white} alt='' className='w-3' width={12} height={12}/> 
          </motion.a>

          <motion.a 
            href="/ARJUN-T-ANIL.pdf" 
            download="ARJUN T ANIL.pdf"
            className='px-8 py-2.5 text-sm border rounded-full border-gray-500 dark:border-gray-400 text-gray-800 dark:text-gray-200 flex items-center gap-2 transition-all duration-300'
            whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)' }}
            whileTap={{ scale: 0.95 }}
          >
              my CV <Image src={assets.download_icon} alt='' className='w-3 dark:invert' width={12} height={12}/> 
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default Header