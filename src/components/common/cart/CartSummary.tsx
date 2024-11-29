import Link from 'next/link'
import React from 'react'

const CartSummary = ({ cartTotal }: { cartTotal: string }) => {
  return (
    <div className="wi-cart-checkout-wrapper border-grayp-200 top-20 rounded border bg-white p-5 shadow-md lg:sticky">
      <div className="wi-cart-checkout-top border-grayp-200 mb-5 flex items-center justify-between border-b pb-3">
        <span className="text-xl font-bold">Giá</span>
        <span className="text-xl font-bold">{cartTotal}</span>
      </div>
      <div className="wi-cart-checkout-shipping border-grayp-200 mb-5 border-b pb-5">
        <h4 className="text-15px mb-3 font-medium">Vận chuyển</h4>
        <div className="space-y-2 text-sm text-gray-500">
          <p>- Flat rate: $20.00</p>
          <p>- Local pickup: $25.00</p>
          <p>- Free shipping</p>
        </div>
      </div>
      <div className="wi-cart-checkout-total flex items-center justify-between text-lg font-medium">
        <span className="text-xl font-bold">Tổng giá</span>
        <span className="text-xl font-bold">{cartTotal}</span>
      </div>
      <div className="wi-cart-checkout-proceed mt-8">
        <Link
          href={'/checkout'}
          className={
            'bg-heading sm:text-15px flex w-full items-center justify-center rounded bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-opacity-90 focus:outline-none'
          }
        >
          <span className="py-0.5">Thanh toán</span>
        </Link>
      </div>
    </div>
  )
}

export default CartSummary