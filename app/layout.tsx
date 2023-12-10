// "use server";

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StarsCanvas from '@/components/main/StarBackground'
import Navbar from '@/components/main/Navbar'
import Footer from '@/components/main/Footer'
// import ColorModeSwitcher from '@/components/sub/ColorModeSwitcher'
// import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Space Portfolio App',
  description: 'This is my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
      {/* <ColorModeScript />
      <ChakraProvider theme={theme}>
      <ColorModeSwitcher />
      </ChakraProvider> */}
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}
