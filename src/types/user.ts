export type UserAddress = {
  id: number
  firstName: string
  lastName: string
  address: Address['address']
}

interface Address {
  address: {
    address: string
    city: string
    postalCode: string
    state: string
  }
}
