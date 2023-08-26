import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mustapha Mardi | Personal Portfolio',
  description: 'Front-end Developer using React (Nextjs).',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}
      bg-gray-50 text-gray-950`}>
        <Navbar />
        <div className='bg-[#fbe2e3] z-0  sm:w-[68rem] w-[31.52rem] rounded-full right-[11rem] top-[-6rem] blur-[10rem] h-[31.52rem] absolute'></div>
        <div className='bg-[#dbd7fb] z-0  w-[31.52rem] sm:w-[68rem] rounded-full left-[-35rem] top-[-6rem] blur-[10rem] h-[31.52rem] absolute md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>
        {children}
      </body>
    </html>
  )
}
