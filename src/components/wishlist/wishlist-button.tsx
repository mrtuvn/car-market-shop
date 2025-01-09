import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io'
import { Product } from '../../types/Product'
import { toast } from 'react-toastify'
import cn from 'classnames'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { addToWishlist, removeFromWishlist } from '../../slices/wishlist/wishlistSlice'

interface Props {
  product: Product
  className?: string
}

const WishlistButton: React.FC<Props> = ({ product, className }) => {
  const wishlistList = useAppSelector((state) => state.wishlist.items)
  const dispatch = useAppDispatch()

  const isWishlist = (productId: number) => wishlistList.some((product) => product.id === productId)
  const btnWishlist = isWishlist(product?.id)
  const handleBtnWishlist = () => {
    const toastStatus =
      btnWishlist === true ? 'Remove from favorite list' : 'Added to favorite list'
    toast(toastStatus, {
      progressClassName: 'fancy-progress-bar',
      position: 'top-right',
      autoClose: 3000,
    })
  }

  return (
    <>
      {btnWishlist ? (
        <button
          onClick={() => {
            dispatch(removeFromWishlist(product?.id))
            handleBtnWishlist()
          }}
          className={cn(
            'rounded-full bg-gray-200 px-3 py-3 text-gray-600 hover:bg-blue-500 hover:text-white',
            className,
          )}
        >
          <IoIosHeart />
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(addToWishlist(product))
            handleBtnWishlist()
          }}
          className={cn(
            'rounded-full bg-gray-200 px-3 py-3 text-gray-600 hover:bg-blue-500 hover:text-white',
            className,
          )}
        >
          <IoIosHeartEmpty />
        </button>
      )}
    </>
  )
}
export default WishlistButton
