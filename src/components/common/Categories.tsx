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

  useEffect(() => {
    const getCategoriesFromDummyApi = async () => {
      const res = await fetch(
        'https://dummyjson.com/products/categories?limit=5&select=slug,name,url',
      )
      const data = await res.json()
      setCategories(data)
    }

    getCategoriesFromDummyApi()
  }, [categories])

  return (
    <div>
      {categories ? (
        <ul className="inline-flex flex-wrap gap-3">
          {categories?.map((category, index) => (
            <li key={index}>
              <Link className="group" href={`product/category/${category.slug}`}>
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
