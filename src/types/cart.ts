import { Product } from './product'

export interface CartItem extends Product {
  quantity: number
}

export interface CartState {
  items: CartItem[]
  total: number
  isEmpty: boolean
  totalItems: number
}
