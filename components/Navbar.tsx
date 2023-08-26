'use client';
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className='z-[999] flex justify-center items-center w-full fixed h-[100px]'>
            <motion.div 
            className='w-[600px] backdrop-blur-sm font-medium  flex px-10 items-center  h-[55px] rounded-full bg-white shadow-lg shadow-black/10 '
            initial={{opacity: 0, y:-200}}
            animate={{opacity: 1, y:0}}
            >
            <ul className='flex w-full justify-around'>
                <li className='bg-gray-100 px-5 rounded-full'>
                    <Link href='#home'>Home</Link>
                </li>
                <li>
                    <Link href='#about'>About</Link>
                </li>
                <li>
                    <Link href='#projects'>Projects</Link>
                </li>
                <li>
                    <Link href='#skills'>Skills</Link>
                </li>
                <li>
                    <Link href='#projects'>Projects</Link>
                </li>
                <li>
                    <Link href='#experience'>Experience</Link>
                </li>
                <li>
                    <Link href='#contact'>Contact</Link>
                </li>
               
            </ul>
            </motion.div>
    </header>
  )
}
