import React, { useEffect } from 'react'
import { useCart } from '@/hooks'
import type { CartState } from '@/types/cart'

function createEmptyCart(): CartState {
  return {
    items: [],
    total: 0,
    isEmpty: true,
    totalItems: 0,
  }
}

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  useCart()
  return <>{children}</>
}

export default CartProvider
