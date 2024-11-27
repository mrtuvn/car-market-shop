import { useEffect, useRef } from 'react'
import { RootState } from '@/redux/store'
import { useAppSelector } from '@/hooks/useAppSelector'
import { useAppDispatch } from '@/hooks/useAppDispatch'
import { LOAD_CART } from '@/redux/slices/cart/cartSlice'
import { constants } from '@/constants'

const useCart = () => {
  const cart = useAppSelector((state: RootState) => state.cart)
  const dispatch = useAppDispatch()
  const isInitialized = useRef(true)

  // Initialize cart from localStorage on mount
  useEffect(() => {
    // Initialize the cart state from localStorage when the app starts
    const storedCart = localStorage.getItem(constants['string-localstorage-cart'])

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
    localStorage.setItem(constants['string-localstorage-cart'], JSON.stringify(cart))
  }, [cart])
}
export default useCart
