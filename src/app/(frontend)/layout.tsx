'use client'
import './globals.css'
import type { ReactNode } from 'react'

import { cn } from '@/utilities/cn'
import { Open_Sans } from 'next/font/google'
import React from 'react'

//redux
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import CartProvider from '@/providers/Cart'

//contexts
import { DrawerProvider } from '@/contexts/drawer/drawerProvider'

type LayoutProps = {
  children: ReactNode
}

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', openSans.className)}>
        <Provider store={store}>
          <CartProvider>
            <DrawerProvider>{children}</DrawerProvider>
          </CartProvider>
        </Provider>
      </body>
    </html>
  )
}

export default Layout
