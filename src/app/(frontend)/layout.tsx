import type { ReactNode } from 'react'

import { cn } from '@/utilities/cn'
import { Open_Sans } from 'next/font/google'
import React from 'react'

type LayoutProps = {
  children: ReactNode
}

import './globals.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', openSans.className)}>
        {children}
      </body>
    </html>
  )
}

export default Layout
