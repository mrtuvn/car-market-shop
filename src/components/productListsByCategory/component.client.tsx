'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AddToCartButton from '@/components/common/cart/AddToCartButton'

export default function ProductListsByCategory({ categoryName }: { categoryName: string }) {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    const getProductsFromDummyApi = async () => {
      const res = await fetch(`https://dummyjson.com/products/category/${categoryName}?limit=10`)
      const data = await res.json()
      setProducts(data.products)
    }

    getProductsFromDummyApi()
  }, [categoryName])

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-left font-black">
        Danh mục sản phẩm <span className="uppercase">{categoryName}</span>
      </h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products ? (
          products?.map((product, index) => (
            <div key={index} className="flex flex-col flex-nowrap">
              <Link className="group text-center" href={`products/${product.id}`}>
                <Image
                  src={product.images[2]}
                  className="rouneded-md w-full object-cover"
                  width={200}
                  height={200}
                  alt="thumbnail"
                />
              </Link>
              <h2 className="mt-4 text-lg text-gray-900">{product.title}</h2>
              <p className="text-md text-gray-500">SKU: {product.sku}</p>
              <p className="text-md text-gray-500">${product.price}</p>
              <p className="text-md text-gray-500">Qty: {product.stock}</p>
              <AddToCartButton product={product} />
            </div>
          ))
        ) : (
          <p>Không có sản phẩm nào</p>
        )}
      </div>
    </div>
  )
}
