'use client'

import { useAppDispatch } from '@/hooks'
import type { Product } from '@/types/product'
import { ADD_ITEM } from '@/redux/slices/cart/cartSlice'

interface AddToCartButtonProps {}
// add 1 product no quantity (for used in product lists)
const AddToCartButton = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch()

  const handleAddToCart = () => {
    dispatch(ADD_ITEM({ product, quantity: 1 }))
  }

  return (
    <button
      onClick={handleAddToCart}
      className="mt-2 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
    >
      Thêm vào giỏ hàng
    </button>
  )
}

export default AddToCartButton
