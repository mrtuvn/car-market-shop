'use client'
import DefaultLayout from '@/layouts/DefaultLayout/layout'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

type ProductsByCategory = {
  id: number
  title: string
  category: string
}

const router = useRouter()
const slug = router.params
const Page: NextPage = ({ slug }: any) => {
  const [products, setProducts] = useState<ProductsByCategory[]>([])

  useEffect(() => {
    const getProductsBySlugApi = async () => {
      const res = await fetch(`https://dummyjson.com/products/category/${slug}`)
      const data = await res.json()
      setProducts(data.products)
    }

    getProductsBySlugApi()
  }, [products])

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products by {slug}</h2>
        <p>Total: {products?.length}</p>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products && products.length > 0 ? (
            products?.map((product, index) => (
              <Link key={index} className="group" href={`products/${product.id}`}>
                <Image
                  src={product.thumbnail}
                  className="object-fit cover"
                  width={400}
                  height={200}
                  alt="product"
                />
                <h3 className="mt-4 text-sm font-medium text-gray-700">{product.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">Giá: {product.price}</p>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  Giảm: {product.discountPercentage}%
                </p>
                <p className="mt-1 text-lg font-medium text-gray-900">Số lượng: {product.stock}</p>
              </Link>
            ))
          ) : (
            <p>Không có sản phẩm nào</p>
          )}
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Page
