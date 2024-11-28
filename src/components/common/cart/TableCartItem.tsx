import DefaultLayout from '@/layouts/DefaultLayout/layout'
import React from 'react'
import { REMOVE_ITEM, UPDATE_ITEM } from '@/redux/slices/cart/cartSlice'
import Link from 'next/link'
import { XMarkIcon } from '@heroicons/react/24/outline'
import usePrice from '@/utilities/usePrice'
import { useAppDispatch } from '@/hooks'
import Image from 'next/image'
import Counter from '@/components/ui/counter'
const TableCartItem = ({ item }) => {
  const dispatch = useAppDispatch()
  const { id, title, quantity, thumbnail } = item ?? {}
  const { price: totalPrice } = usePrice({
    amount: item?.price,
    currencyCode: 'USD',
  })

  const outOfStock = item.quantity >= item.stock
  // Create slug from title
  const slug = title.toLowerCase().replace(/\s+/g, '-')

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch(REMOVE_ITEM(item.id))
    } else if (newQuantity > item.stock) {
      // Optional: Show an error or limit to max stock
      dispatch(
        UPDATE_ITEM({
          productId: item.id,
          quantity: item.stock,
        }),
      )
    } else {
      dispatch(
        UPDATE_ITEM({
          productId: item.id,
          quantity: newQuantity,
        }),
      )
    }
  }

  return (
    <tr className="border-b border-gray-200 bg-white">
      <td className="inline-block w-28 px-3 py-4">
        <Image src={thumbnail} height={100} width={100} alt="Product Image" />
      </td>

      <td className="wi-cart-title max-w-500px min-w-40 px-3 py-7">
        <Link
          href={`/products/${id}`}
          className="lg:text-15px block font-medium leading-5 transition-all group-hover:text-blue-500"
        >
          {title}
        </Link>
      </td>

      <td className="wi-cart-price px-3 sm:px-6">
        <div className="text-brand-dark flex min-w-[65px] shrink-0 text-sm font-semibold leading-5 md:text-base">
          {totalPrice}
        </div>
      </td>

      <td className="wi-cart-quantity px-3 sm:px-6">
        <div className="wi-product-quantity relative w-32">
          <Counter
            value={quantity}
            onIncrement={() => handleQuantityChange(item.quantity + 1)}
            onDecrement={() => handleQuantityChange(item.quantity - 1)}
            variant="cart"
            disabled={outOfStock}
          />
        </div>
      </td>

      <td className="wi-cart-action px-6 text-center">
        <button
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 hover:bg-gray-400"
          aria-label={'Clear Item'}
          onClick={() => dispatch(REMOVE_ITEM(id))}
        >
          <XMarkIcon aria-hidden="true" className="size-6" />
        </button>
      </td>
    </tr>
  )
}

export default TableCartItem
