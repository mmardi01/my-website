"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Intro() { 
  return (
    <section className='max-w-[50rem] text-center'>
      <div className='flex justify-center'>
        <motion.div className='relative'
         initial={{opacity: 0, scale:0}}
         animate={{opacity: 1, scale:1}}
         transition={{
          type:"tween",
          duration:0.2
         }}>
        <Image src='/personal.jpg'
          alt='Mustapha Mardi' 
          width="200" 
          quality="95" 
          height="200"
          className='h-24 w-24 border-white border-4 shadow-xl rounded-full' 
          />
        <motion.span 
        className='text-4xl absolute bottom-2 right-0'
        initial={{opacity: 0, scale:0}}
        animate={{opacity: 1, scale:1}}
        transition={{
         type:"spring",
         stiffness:125,
         delay:0.1,
         duration:0.7
        }}
        >
          👋
        </motion.span>
        </motion.div>
      </div>
      <p className='font-medium text-2xl mt-4 !leading-[1.5] mb-10 sm:text-4xl'>
        <span className='font-bold'>Hello, I'm Mustapha. </span> 
        I'm a <span className='font-bold'>Front-End developer</span> & Software Engineering student. I enjoy building <span className='italic'>sites & apps</span>. My focus is <span className='underline'>React (Next js)</span>.</p>
    </section>
  )
}
