import CarSlider from '@/components/carSlider/Component'
import ProductListsByCategory from '@/components/productListsByCategory/component.client'
import DefaultLayout from '@/layouts/DefaultLayout/layout'
import type { NextPage } from 'next'
import BannerPromo from '@/components/ui/banner-promo'
import React from 'react'
import MainHomeSlider from '@/components/herosSlider/MainHomeSliderSlick'
import Container from '@/components/ui/container'
import BrandHomeSliderSwiper from '@/components/herosSlider/BrandHomeSliderSwiper'
import BlogsList from '@/components/blog/BlogsList'

const Page: NextPage = () => {
  return (
    <>
      <BannerPromo />
      <DefaultLayout>
        <MainHomeSlider />

        <Container>
          <h1 className="text-center text-4xl font-bold">
            Chợ phụ kiện ôtô & Đồ chơi xe điện & Sạc điện & Nội - ngoại thất ôtô
          </h1>
        </Container>

        <Container>
          <ProductListsByCategory categoryName="vehicle" />
        </Container>

        <BrandHomeSliderSwiper />

        <BlogsList />

        {/* <CarSlider /> */}
      </DefaultLayout>
    </>
  )
}

export default Page
