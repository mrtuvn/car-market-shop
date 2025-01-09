// components/Wishlist/WishlistList.tsx
import React from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks'
import WishlistCard from './wishlist-card'
import { removeFromWishlist } from '../../slices/wishlist/wishlistSlice'

const WishlistList: React.FC = () => {
  const wishlistList = useAppSelector((state) => state.wishlist.items)
  const dispatch = useAppDispatch()

  const handleRemoveWishlist = (id: number) => {
    dispatch(removeFromWishlist(id))
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
      {!wishlistList.length && <p>No items in your wishlist.</p>}

      {wishlistList.map((product) => (
        <WishlistCard key={product.id} product={product} removeWishlist={handleRemoveWishlist} />
      ))}
    </div>
  )
}

export default WishlistList
