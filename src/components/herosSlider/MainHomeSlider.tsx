'use client'
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Carousel from '../ui/carousel/carousel'
import { v4 as uuidv4 } from 'uuid'

import { SwiperSlide } from '@/components/ui/carousel/slider'

const banners = [
  {
    id: uuidv4(),
    name: 'banner',
    url: '/images/banners/Smart-Charging-EV.jpg',
    alt: 'banner',
  },
  {
    id: uuidv4(),
    name: 'banner',
    url: '/images/banners/Banner-1.png',
    alt: 'banner',
    title: 'banner title',
    description: 'this is test',
  },
  {
    id: uuidv4(),
    name: 'banner',
    url: '/images/banners/Banner-2.png',
    alt: 'banner',
  },
]

const MainHomeSlider = () => {
  return (
    <>
      <Carousel>
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Image
              className="aspect-video h-auto w-full object-cover"
              priority
              quality="80"
              src={banner.url}
              width={500}
              height={200}
              alt={banner.alt}
            />
          </SwiperSlide>
        ))}
      </Carousel>
    </>
  )
}

export default MainHomeSlider
