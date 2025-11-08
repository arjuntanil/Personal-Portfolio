'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import TextPressure from './TextPressure'

const Navbar = () => {
  const [isSroll, setIsScroll] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
  }
  
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
  }

  // Dark mode toggle function
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  // Check for saved theme preference or default to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', () => { 
      if (window.scrollY > 50) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
    
    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  return (
    <>
      {/* Enhanced gradient background with increased height */}
      <div className="fixed top-0 left-0 w-full h-20 z-40 pointer-events-none transition-all duration-300">
        {/* Main gradient with glossy black and warm tones */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-pink-50 to-white dark:from-[#000000] dark:via-[#0a0a0a] dark:to-[#000000] opacity-70 transition-all duration-300" />
        {/* White/glossy black bottom preservation - slightly thicker */}
        <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white dark:from-[#000000] to-transparent transition-all duration-300" />
        {/* White/glossy black left preservation */}
        <div className="absolute bottom-0 left-0 w-32 h-full bg-gradient-to-r from-white dark:from-[#000000] to-transparent transition-all duration-300" />
      </div>
      
      {/* Navbar with increased height and glossy black */}
      <nav className={`w-full fixed px-4 lg:px-6 py-4 flex items-center justify-between z-50 h-20 transition-all duration-300 ${isSroll ? "bg-white/80 dark:bg-[#000000]/80 backdrop-blur-lg shadow-sm dark:shadow-white/5" : ""} `}>
        <a href='#top' className='cursor-pointer'>
          <div className='w-32 h-14 flex items-center'>
            <TextPressure
              text="ARJUN"
              minFontSize={36}
            />
          </div>
        </a>
        
        <ul className='hidden md:flex items-center gap-4 lg:gap-6 rounded-full px-8 py-2.5 bg-white/90 dark:bg-[#000000]/95 shadow-lg dark:shadow-white/10 backdrop-blur-md transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50'>
          <motion.li whileHover={{ scale: 1.2, y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <a className='font-Ovo text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm' href="#top">Home</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2, y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <a className='font-Ovo text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm' href="#about">About Me</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2, y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <a className='font-Ovo text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm' href="#services">Services</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2, y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <a className='font-Ovo text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm' href="#work">My Work</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2, y: -3 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            <a className='font-Ovo text-gray-800 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm' href="#contact">Contact Me</a>
          </motion.li>
        </ul>
        
        <div className='flex items-center gap-3'>
          <button onClick={toggleDarkMode} className='hover:scale-110 transition-all duration-300 ease-in-out transform'>
            <Image 
              src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
              alt='Theme toggle' 
              className='w-5 transition-opacity duration-300' 
              width={20} 
              height={20}
            />
          </button>

          <a href="#contact" className='hidden lg:flex items-center gap-2 px-6 py-2 border 
                                        border-gray-300 dark:border-gray-700 rounded-full ml-3 font-Ovo text-sm text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-900 transition-all duration-300'>
            Contact <Image src={assets.arrow_icon} alt="" className='w-2.5' width={10} height={10}/>
          </a>

          <button className='block md:hidden ml-2' onClick={openMenu}>
            <Image src={assets.menu_black} alt='' className='w-5' width={20} height={20}/>
          </button>
        </div>

        {/* Mobile Menu */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-3 py-16 px-8 fixed -right-64
        top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-black transition-all duration-500 border-l dark:border-gray-800'>
          <div className='absolute right-5 top-5' onClick={closeMenu}>
            <Image src={assets.close_black} alt='' className='w-4 cursor-pointer dark:invert' width={16} height={16}/>
          </div>
          <li><a className='font-Ovo text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm' onClick={closeMenu} href="#top">Home</a></li>
          <li><a className='font-Ovo text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm' onClick={closeMenu} href="#about">About Me</a></li>
          <li><a className='font-Ovo text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm' onClick={closeMenu} href="#services">Services</a></li>
          <li><a className='font-Ovo text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm' onClick={closeMenu} href="#work">My Work</a></li>
          <li><a className='font-Ovo text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-sm' onClick={closeMenu} href="#contact">Contact Me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar