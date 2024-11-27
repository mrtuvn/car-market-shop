'use client'
import DefaultLayout from '@/layouts/DefaultLayout/layout'
import { NextPage } from 'next'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import type { Product } from '@/types/product'
import type { RootState } from '@/redux/store'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { ADD_ITEM } from '@/redux/slices/cart/cartSlice'

const Page: NextPage = ({ params }) => {
  const { productId } = useParams()
  const [product, setProduct] = useState<Product>({})

  const dispatch = useAppDispatch // return function dispatch

  const handleAddToCart = (product: Product) => {
    dispatch(ADD_ITEM(product))
  }

  useEffect(() => {
    console.log('type param', typeof params) // object
    console.log(params) //Proxy promise

    const getProductsByID = async (id: number) => {
      const res = await fetch(`https://dummyjson.com/products/${id}`)
      const data = await res.json()
      console.log(data)
      console.log(typeof data.images)
      setProduct(data)
    }

    getProductsByID(productId)
  }, [])

  function getPlaceHolderImage(size: number): string {
    if (size) {
      return `https://placehold.co/${size}x${size}`
    }

    return `https://placehold.co/500x500`
  }

  return (
    <DefaultLayout>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="-mx-4 flex flex-wrap">
            <div className="mb-8 w-full px-4 md:w-1/2">
              <Image
                src={product?.thumbnail ? product?.thumbnail : getPlaceHolderImage(500)}
                alt="Product"
                width={500}
                height={500}
                priority
                quality={80}
                className="mb-4 h-auto w-full rounded-lg shadow-md"
              />
            </div>

            <div className="w-full px-4 md:w-1/2">
              <h2 className="mb-2 text-3xl font-bold">{product.title}</h2>
              <p className="mb-4 text-gray-600">SKU: {product.sku}</p>
              <div className="mb-4">
                <span className="mr-2 text-2xl font-bold">${product.price}</span>
                <span className="text-gray-500 line-through">${product.discountPercentage}</span>
              </div>
              <div className="mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-6 text-yellow-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="ml-2 text-gray-600">{product.rating} (120 reviews)</span>
              </div>
              <p className="mb-6 text-gray-700">{product.description}</p>
              <p className="mb-6 text-gray-700">Brand: {product.brand}</p>
              <div className="mb-6">
                <h3 className="mb-2 text-lg font-semibold">Color:</h3>
                <div className="flex space-x-2">
                  <button className="h-8 w-8 rounded-full bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"></button>
                  <button className="h-8 w-8 rounded-full bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"></button>
                  <button className="h-8 w-8 rounded-full bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"></button>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="quantity" className="mb-1 block text-sm font-medium text-gray-700">
                  Số lượng:
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  value=""
                  max="3"
                  className="w-12 rounded-md border-gray-300 text-center shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>

              <div className="mb-6 flex space-x-4">
                <button
                  className="flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={handleAddToCart}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Page
