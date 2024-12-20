export type Product = {
  id: number
  title: string
  sku: string
  description: string
  price: number
  discountPercentage: number
  category: string
  thumbnail: string
  stock: number
  availabilityStatus?: string
  quantity: number
  rating?: number
  brand?: string
  reviews?: Review[]
}

interface Review {
  rating: number
  comment: string
  date: string // Use `Date` if you plan to convert this to a Date object in code
  reviewerName: string
  reviewerEmail: string
}

export interface SearchResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export type QueryOptionsType = {
  text: string
  category?: string
  status?: string
  limit?: number
}

export type OrderItem = {
  id: number | string
  name: string
  price: number
  quantity: number
}
export interface Order {
  id: string | number
  name: string
  slug: string
  products: OrderItem[]
  total: number
  tracking_number: string
  customer: {
    id: number
    email: string
  }
  shipping_fee: number
  payment_gateway: string
}
