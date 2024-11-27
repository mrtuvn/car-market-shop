'use client'
import DefaultLayout from '@/layouts/DefaultLayout/layout'
import { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

type ProductsByCategory = {
  id: number
  title: string
  category: string
}

const Page: NextPage = ({ params }: { props: { params: string } }) => {
  const [products, setProducts] = useState<ProductsByCategory[]>([])
  const { categoryName } = useParams()
  useEffect(() => {
    console.log(categoryName)

    const getProductsByParamApi = async () => {
      const res = await fetch(`https://dummyjson.com/products/category/${categoryName}`)
      const data = await res.json()
      setProducts(data.products)
    }

    getProductsByParamApi()
  }, [])

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-bold">{categoryName}</h2>

        {products && products.length > 0 ? (
          <>
            <p>Số lượng: {products?.length}</p>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products?.map((product, index) => (
                <Link key={index} className="group" href={`products/${product.id}`}>
                  <Image
                    src={product.thumbnail}
                    className="object-fit cover w-full"
                    width={400}
                    height={200}
                    alt="product"
                  />
                  <h3 className="mt-4 text-sm font-medium text-gray-700">{product.title}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">Giá: {product.price}</p>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    Giảm: {product.discountPercentage}%
                  </p>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    Số lượng: {product.stock}
                  </p>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <p className="mx-auto text-center font-black">Không có sản phẩm nào</p>
        )}
      </div>
    </DefaultLayout>
  )
}

export default Page
