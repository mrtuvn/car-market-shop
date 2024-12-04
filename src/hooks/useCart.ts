'use client'
import { useEffect, useRef } from 'react'
import { RootState } from '@/redux/store'
import { useAppSelector } from '@/hooks/useAppSelector'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { LOAD_CART } from '@/redux/slices/cart/cartSlice'
import { cartStorageKey } from '@/constants'

export const useCart = () => {
  const cart = useAppSelector((state: RootState) => state.rootReducer.cart)
  const dispatch = useAppDispatch()
  const isInitialized = useRef(true)

  // Initialize cart from localStorage on mount
  useEffect(() => {
    // Initialize the cart state from localStorage when the app starts
    const storedCart = localStorage.getItem(cartStorageKey)

    if (storedCart) {
      const cartState = JSON.parse(storedCart)
      dispatch(LOAD_CART(cartState))
    }
  }, [dispatch])

  // Update localStorage whenever cart changes, but skip the initial render
  useEffect(() => {
    if (isInitialized.current) {
      isInitialized.current = false // Skip first render
      return
    }
    localStorage.setItem(cartStorageKey, JSON.stringify(cart))
  }, [cart])
}
