'use client'
import React, { useEffect, useState, useRef } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

const banners = [
  {
    id: 1,
    name: 'banner 3',
    url: '/images/banners/Banner-1.png',
    alt: 'banner',
  },
  {
    id: 2,
    name: 'banner 2',
    url: '/images/banners/Banner-2.png',
    alt: 'banner',
  },
  {
    id: 3,
    name: 'banner 3',
    url: '/images/banners/Banner-3.jpeg',
    alt: 'banner',
  },
]

const settings = {
  dots: true,
  speed: 500,
  infinite: true,
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: banners.length < 4 ? banners.length : 4,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.2,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1.2,
        dots: true,
      },
    },
  ],
}

var settings2 = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const MainHomeSlider = () => {
  const customSlider = useRef<Slider>(null)

  return (
    <>
      <Slider ref={customSlider} {...settings}>
        {banners.map((banner) => (
          <div key={banner.id}>
            <Image src={banner.url} width={1500} height={600} alt={banner.alt} />
          </div>
        ))}
      </Slider>
    </>
  )
}

export default MainHomeSlider
