import Container from '../components/ui/container'
import WishlistList from '../components/wishlist/wishlistList'

const WishlistPage = () => {
  return (
    <Container>
      <h1 className="mb-6 text-2xl font-medium capitalize">Wishlist</h1>
      <WishlistList />
    </Container>
  )
}

export default WishlistPage
