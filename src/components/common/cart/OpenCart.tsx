'use client'
import { useDrawer } from '@/contexts'
import { useAppSelector } from '@/hooks'
import React, { useState } from 'react'

const OpenCart = () => {
  const { totalItems } = useAppSelector((state) => state.rootReducer.cart)
  const { openDrawer, setDrawerView } = useDrawer()

  const handleToggleCartDrawer = () => {
    // USE context for trigger
    setDrawerView('CART_SIDEBAR')
    return openDrawer()
  }

  return (
    <button className="cartIcon relative" onClick={handleToggleCartDrawer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
        />
      </svg>
      {totalItems > 0 && (
        <span className="quantity-cart absolute top-[-10px] h-fit rounded-full bg-red-700 p-1 font-bold text-white">
          {totalItems}
        </span>
      )}
    </button>
  )
}

export default OpenCart
