'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
type Categories = {
  slug: string
  name: string
  url: string
}
const Categories = () => {
  const [categories, setCategories] = useState<Categories[]>([])

  const usedCategories = [
    { id: 1, name: 'vehicle' },
    { id: 2, name: 'smartphones' },
    { id: 3, name: 'motorcycle' },
  ]

  // useEffect(() => {
  //   const limit = 10
  //   const getCategoriesFromDummyApi = async () => {
  //     const res = await fetch(
  //       'https://dummyjson.com/products/categories?limit=5&select=slug,name,url',
  //     )
  //     const data = await res.json()
  //     setCategories(data)
  //   }

  //   //getCategoriesFromDummyApi()
  // }, [categories])

  return (
    <div>
      {usedCategories ? (
        <ul className="mx-auto inline-flex w-full flex-wrap items-center justify-center gap-5 p-[90px]">
          {usedCategories?.map((category, id) => (
            <li key={id}>
              <Link
                className="text-medium group h-10 w-10 bg-gray-600 p-10 text-white"
                href={`product/category/${category.name}`}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No categories</p>
      )}
    </div>
  )
}

export default Categories
