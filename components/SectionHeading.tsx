"use client"
import React from 'react'

type SectiontHeadingProps = {
    children: React.ReactNode;
}

export default function SectionHeading({ children } : SectiontHeadingProps) {
  return (
        <h2 className='text-3xl font-mediim capitalize mb-8'>
            {children}
        </h2>
    )
}
