'use client';
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { links } from '@/app/data';

export default function Navbar() {
  return (
    <header className='z-[999] flex justify-center items-center w-full fixed h-[100px]'>
            <motion.div 
            className='sm:w-[600px]  backdrop-blur-sm font-medium text-gray-500  flex px-10 items-center w-full h-full sm:h-[55px] sm:rounded-full bg-white shadow-lg shadow-black/10 '
            initial={{opacity: 0, y:-200}}
            animate={{opacity: 1, y:0}}
            >
            <ul className='flex w-full justify-around flex-wrap'>
             {
                links.map((link,index)=> (
                    <ul className='m-2' key={index}>
                       <Link href={link.hash}>{link.name}</Link>
                    </ul>
                ))
             }
            </ul>
            </motion.div>
    </header>
  )
}
