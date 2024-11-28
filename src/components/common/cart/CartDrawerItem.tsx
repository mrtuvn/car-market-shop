import { useAppDispatch } from '@/hooks'
import { REMOVE_ITEM } from '@/redux/slices/cart/cartSlice'
import type { Product } from '@/types/product'
import usePrice from '@/utilities/usePrice'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartDrawerItem = ({ item }: { item: Product }) => {
  const dispatch = useAppDispatch()

  const { id, title, quantity, thumbnail } = item ?? {}

  const handleRemoveItem = (id: number) => {
    dispatch(REMOVE_ITEM(id))
  }

  const { price: totalPrice } = usePrice({
    amount: item?.price,
    currencyCode: 'USD',
  })

  return (
    <li key={id} className="flex py-6">
      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          alt="product item"
          src={thumbnail}
          width={100}
          height={100}
          className="size-full object-cover"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <Link href={`products/${id}`}>{title}</Link>
            </h3>
            <p className="ml-4">{totalPrice}</p>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty: {quantity}</p>

          <div className="flex">
            <button
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={(e) => handleRemoveItem(id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartDrawerItem
