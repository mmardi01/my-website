'use client';
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { links } from '@/app/data';
import { clsx } from 'clsx';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('Home');
  
  return (
    <header className='z-[999] flex justify-center  items-center w-full fixed h-[100px]'>
            <motion.div 
            className='sm:w-[600px]  backdrop-blur-sm font-medium bg-opacity-80 text-gray-500  flex px-10 items-center w-full h-full sm:h-[55px] sm:rounded-full bg-white shadow-lg shadow-black/10 '
            initial={{opacity: 0, y:-200}}
            animate={{opacity: 1, y:0}}
            transition={{
              duration:0.4
            }}
            >
            <ul className='flex w-full justify-around flex-wrap'>
             {
                links.map((link,index)=> (
                    <ul className={clsx('m-1 py-1   px-3 relative',{
                      "text-gray-950": activeSection === link.name,
                    })} key={index}>
                       <Link href={link.hash}>{link.name}</Link>
                       {
                        link.name === activeSection &&
                         <span className='bg-gray-100 absolute inset-0 rounded-full -z-10' ></span>
                       }
                    </ul>
                ))
             }
            </ul>
            </motion.div>
    </header>
  )
}
