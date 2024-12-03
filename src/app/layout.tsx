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
import { ModalProvider } from '@/contexts/modal/modalProvider'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

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
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <CartProvider>
              <DrawerProvider>
                <ModalProvider>{children}</ModalProvider>
              </DrawerProvider>
            </CartProvider>
          </Provider>
        </QueryClientProvider>
      </body>
    </html>
  )
}

export default Layout
