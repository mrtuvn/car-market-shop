'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { fetchProductsByCategory } from '@/app/api/fetchProductsByCategory'
import { useQuery } from '@tanstack/react-query'
import { SearchResponse } from '@/types/product'
import DefaultLayout from '@/layouts/DefaultLayout/layout'
import Alert from '@/components/ui/alert'

interface ProductFeedProps {
  className?: string
  uniqueKey?: string
}

const ProductHotDeals: React.FC<ProductFeedProps> = ({
  className = '',
  uniqueKey = 'product-deal',
}) => {
  const [activeCategory] = useState<string>('vehicle')
  const page: number = 1
  const limit = 10

  // Fetch products using react-query HOOK
  const { data, isLoading, error } = useQuery<SearchResponse>({
    queryKey: ['products', activeCategory, limit, page],
    queryFn: () => fetchProductsByCategory(activeCategory, page, limit),
    enabled: true, // Chỉ gọi API khi có danh mục
  })

  const { products = [] } = data ?? {}

  return (
    <DefaultLayout>
      <div className={`mb-12 lg:mb-12 ${className}`}>
        <div className="mb-1.5 justify-between rounded bg-white px-5 py-2.5 md:flex"></div>
        {error ? (
          <Alert message={error?.message} className="col-span-full" />
        ) : (
          <div className="heightFull relative gap-1 xl:flex">
            <div className="bestdeals-main-content w-[calc(100%_-_430px)]">
              {/* Loading state */}
              {isLoading && (
                <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
                  {Array.from({ length: 4 }).map((_, id) => (
                    <div key={id} className="group rounded bg-white p-2">
                      {/* <ProductCardSkeleton /> */}

                      {products.map((product) => (
                        <div key={product.id}>
                          <h2>{product.title}</h2>
                          <p>{product.description}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  )
}

export default ProductHotDeals
