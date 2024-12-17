import React from 'react'
import { SwiperSlide, Swiper, Autoplay } from '@/components/ui/carousel/slider'
import Image from 'next/image'

const HomeBanner = () => {
  return (
    <div className="banners mx-auto max-w-[1200px] pb-[20px]">
      <h3 className="pb-4 text-center text-3xl font-bold">Sample Slider</h3>
      <Swiper slidesPerView={1} autoplay={{ delay: 2500 }} loop={true} modules={[Autoplay]}>
        <SwiperSlide>
          <Image
            src="https://dummyjson.com/image/2000x500?text=Banner+1&fontSize=40"
            width={2000}
            height={500}
            alt="slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://dummyjson.com/image/2000x500?text=Banner+2&fontSize=40"
            width={2000}
            height={500}
            alt="slide"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HomeBanner
