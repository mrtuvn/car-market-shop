'use client'
import SectionHeader from '@/components/ui/section-header'
import { LIMITS } from '@/settings/limits'
import Alert from '@/components/ui/alert'
import Image from 'next/image'
import ProductFlashSellCard from '@/components/cards/product-flash-sell-card'
import React, { useState } from 'react'
import Countdown, { zeroPad } from 'react-countdown'
import { fetchProductsByCategory } from '@/app/api/fetchProductsByCategory'
import { useQuery } from '@tanstack/react-query'
import { SearchResponse } from '@/types/product'
import ClockIcon from '@/components/ui/icons/clock-icon'
import Carousel from '@/components/ui/carousel/carousel'
import { SwiperSlide } from 'swiper/react'
import ProductCardSkeleton from '../product/product-skeleton'

interface ProductFeedProps {
  className?: string
  uniqueKey?: string
}

const breakpoints = {
  '1280': {
    slidesPerView: 4,
  },
  '1024': {
    slidesPerView: 3,
  },
  '640': {
    slidesPerView: 3,
  },
  '0': {
    slidesPerView: 2,
  },
}
const backgroundThumbnail = 'https://dummyjson.com/image/465x395?fontSize=20'

const ProductWithDeals: React.FC<ProductFeedProps> = ({
  className = '',
  uniqueKey = 'product-deal',
}) => {
  const [activeCategory] = useState<string>('groceries')
  const page: number = 1
  const limit = LIMITS.BESTDEALS_PRODUCTS_LIMITS

  // Fetch products using react-query
  const { data, isLoading, error } = useQuery<SearchResponse>({
    queryKey: ['products', activeCategory, limit, page],
    queryFn: () => fetchProductsByCategory(activeCategory, page, limit),
    enabled: !!activeCategory, // Chỉ gọi API khi có danh mục
  })

  const { products = [] } = data ?? {}

  return (
    <div className={`mb-12 lg:mb-12 ${className}`}>
      <div className="mb-1.5 justify-between rounded bg-white px-5 py-2.5 md:flex">
        <div className="flex items-center gap-2">
          <ClockIcon opacity="1" />
          <SectionHeader
            headingPosition="hotdeal"
            sectionHeading="HOT DEALS!"
            sectionSubHeading="GET OUR BEST PRICES"
            className="flex items-center gap-2 uppercase"
          />
        </div>

        <div className="flex items-center gap-2">
          <h2 className="text-skin-base text-[14px]"> Hurry Up! Offer ends in:</h2>
          <Countdown date={Date.now() + 4000000 * 60} intervalDelay={1000} renderer={renderer} />
        </div>
      </div>
      {error ? (
        <Alert message={error?.message} className="col-span-full" />
      ) : (
        <div className="heightFull relative gap-1 xl:flex">
          <div className={`relative flex items-center overflow-hidden xl:max-w-[450px]`}>
            <Image src={backgroundThumbnail} alt={'Product Image'} width={430} height={400} />
          </div>
          <div className="bestdeals-main-content w-[calc(100%_-_430px)]">
            {/* Loading state */}
            {isLoading && (
              <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
                {Array.from({ length: 4 }).map((_, id) => (
                  <div key={id} className="group rounded bg-white p-2">
                    <ProductCardSkeleton />
                  </div>
                ))}
              </div>
            )}

            <Carousel
              breakpoints={breakpoints}
              spaceBetween={6}
              prevActivateId={`prevBestdeals`}
              nextActivateId={`nextBestdeals`}
            >
              {products?.map((product: any, idx) => (
                <SwiperSlide key={`${uniqueKey}-${idx}`}>
                  <ProductFlashSellCard
                    key={`popular-product-${product.id}`}
                    product={product}
                    date={Date.now() + 4000000 * 60}
                  />
                </SwiperSlide>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  )
}
const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    return null
  } else {
    return (
      <div className="flex gap-2 text-[14px] font-semibold">
        <span className="flex min-h-[30px] min-w-[40px] items-center justify-center rounded bg-red-600 p-1 text-white md:min-h-[30px] md:min-w-[45px]">
          {zeroPad(days)}
        </span>
        <span className="flex min-h-[30px] min-w-[40px] items-center justify-center rounded bg-red-600 p-1 text-white md:min-h-[30px] md:min-w-[45px]">
          {zeroPad(hours)}
        </span>
        <span className="flex min-h-[30px] min-w-[40px] items-center justify-center rounded bg-red-600 p-1 text-white md:min-h-[30px] md:min-w-[45px]">
          {zeroPad(minutes)}
        </span>
        <span className="flex min-h-[30px] min-w-[40px] items-center justify-center rounded bg-red-600 p-1 text-white md:min-h-[30px] md:min-w-[45px]">
          {zeroPad(seconds)}
        </span>
      </div>
    )
  }
}
export default ProductWithDeals
