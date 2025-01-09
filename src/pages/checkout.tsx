import CheckoutDetails from '../components/checkout/checkout-detail'
import CheckoutSideBar from '../components/checkout/checkout-sidebar'
import Container from '../components/ui/container'
import '../components/checkout/checkout.css'
const CheckoutPage = () => {
  return (
    <Container>
      <h1 className="mb-6 text-2xl font-medium capitalize">Checkout page</h1>
      <div className="mx-auto flex flex-col">
        <div className="flex grid-cols-1 flex-col flex-wrap gap-8 lg:grid lg:grid-cols-12">
          <div className="col-start-1 col-end-10 w-full">
            <CheckoutDetails />
          </div>
          <div className="col-start-10 col-end-13 mt-7 w-full lg:mt-0">
            <CheckoutSideBar />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default CheckoutPage
