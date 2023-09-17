"use client"
import { links } from '@/app/data';
import React, { useState } from 'react'

type SectionName = typeof links[number]['name'];
type ContextProviderType = {
  activeSection: SectionName,
  setActiveSection:React.Dispatch<React.SetStateAction<SectionName>>
}
export const activeContext = React.createContext<ContextProviderType | null>(null);
export default function ActiveSectionContext({children}:{children:React.ReactNode}) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  
  return (
    <activeContext.Provider 
      value={{activeSection, setActiveSection}}>
      {children}
    </activeContext.Provider>
  )
}

