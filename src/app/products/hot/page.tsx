'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { fetchProductsByCategory } from '@/app/api/fetchProductsByCategory'
import { useQuery } from '@tanstack/react-query'
import { SearchResponse } from '@/types/product'
import DefaultLayout from '@/layouts/DefaultLayout/layout'
import Alert from '@/components/ui/alert'
import Container from '@/components/ui/container'
import ProductCardSkeleton from '@/components/product/product-skeleton'

interface ProductFeedProps {
  className?: string
  uniqueKey?: string
}

const ProductHotDeals: React.FC<ProductFeedProps> = ({
  className = '',
  uniqueKey = 'product-deal',
}) => {
  const [activeCategory] = useState<string>('vehicle')
  const page: number = 2
  const limit = 10

  // Fetch products using react-query HOOK
  const { data, isLoading, error } = useQuery<SearchResponse>({
    queryKey: ['products', activeCategory, limit, page],
    queryFn: () => fetchProductsByCategory(activeCategory, page, limit),
  })

  const { products = [] } = data ?? {}
  console.log(products)
  return (
    <DefaultLayout>
      <Container>
        <div className={`mb-12 lg:mb-12 ${className}`}>
          {error ? (
            <Alert message={error?.message} className="col-span-full" />
          ) : (
            <div className="heightFull relative gap-1 xl:flex">
              <div className="bestdeals-main-content w-[calc(100%_-_430px)]">
                {/* Loading state */}
                {isLoading && (
                  <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
                    {products.map((product, id) => (
                      <div key={id} className="group rounded bg-white p-2">
                        <ProductCardSkeleton />

                        <div key={product.id}>
                          <Image
                            src={product.thumbnail}
                            width="300"
                            height="300"
                            alt="product image"
                          />
                          <h2>{product.title}</h2>
                          <p>{product.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </Container>
    </DefaultLayout>
  )
}

export default ProductHotDeals
