'use client'
import { useEffect, useState, memo } from 'react'
import { Product } from '@/types/product.ts'
import Link from 'next/link'

export default function ProductsClient() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const getProductsFromDummyApi = async () => {
      const res = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
      const data = await res.json()
      setProducts(data.products)
    }

    getProductsFromDummyApi()
  }, [products])

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products ? (
          products?.map((product, index) => (
            <Link key={index} className="group" href="/">
              <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </Link>
          ))
        ) : (
          <p>Không có sản phẩm nào</p>
        )}
      </div>
    </div>
  )
}
