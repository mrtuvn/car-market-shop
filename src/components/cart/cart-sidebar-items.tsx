import { Link } from 'react-router-dom'
import usePrice from '../product/use-price'
import { IoIosCloseCircle } from 'react-icons/io'
import Counter from '../ui/counter'
import { UPDATE_ITEM, REMOVE_ITEM } from '@/slices/cart/cartSlice'
import { useAppDispatch } from '@/hooks'

type CartItemProps = {
  item: any
}

const CartSideBarItems: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useAppDispatch()
  const { id, title, category, quantity, thumbnail } = item ?? {}

  const { price: totalPrice } = usePrice({
    amount: item?.price,
    currencyCode: 'USD',
  })

  // Create slug from title
  const slug = title.toLowerCase().replace(/\s+/g, '-')

  const handleClearItemFromCart = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(REMOVE_ITEM(id))
  }

  const outOfStock = item.quantity >= item.stock

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
    <div
      className={`group relative flex h-auto w-full justify-start last:border-b-0`}
      title={title}
    >
      <div className="border-border-base relative flex h-[90px] w-[90px] shrink-0 cursor-pointer overflow-hidden rounded border">
        <img src={thumbnail} alt={title} height={90} className="object-cover" />

        <div
          className="absolute top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-30 transition duration-200 ease-in-out md:bg-opacity-0 md:group-hover:bg-opacity-30 ltr:left-0 rtl:right-0"
          onClick={handleClearItemFromCart}
          role="button"
        >
          <IoIosCloseCircle className="relative transform text-2xl text-white transition duration-300 ease-in-out md:scale-0 md:opacity-0 md:group-hover:scale-100 md:group-hover:opacity-100" />
        </div>
      </div>

      <div className="flex w-full items-start justify-between overflow-hidden">
        <div className="pl-3 md:pl-4">
          <Link
            to={`/product/${slug}-${id}`}
            className="lg:text-15px block font-medium leading-5 transition-all group-hover:text-blue-500"
          >
            {title}
          </Link>
          <div className="text-black-400 mt-3 block text-sm capitalize">
            {category}

            <div className="wi-product-quantity text-black-400 relative w-32 pt-2">
              <Counter
                value={quantity}
                onIncrement={() => handleQuantityChange(item.quantity + 1)}
                onDecrement={() => handleQuantityChange(item.quantity - 1)}
                variant="cart"
                disabled={outOfStock}
              />
            </div>
          </div>
        </div>

        <div className="text-brand-dark flex min-w-[65px] shrink-0 justify-end text-sm font-semibold leading-5 md:text-base">
          {totalPrice}
        </div>
      </div>
    </div>
  )
}

export default CartSideBarItems
