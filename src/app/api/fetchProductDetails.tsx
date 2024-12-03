// src/api.ts
import { Product } from '@/types/product'

// Hàm fetch Categories dữ liệu từ API
export const fetchProductDetails = async (productId: number | undefined): Promise<Product> => {
  const API_URL = 'https://dummyjson.com'
  const response = await fetch(`${API_URL}/products/${productId}`)
  if (!response.ok) throw new Error('Network response was not ok')
  return response.json()
}
