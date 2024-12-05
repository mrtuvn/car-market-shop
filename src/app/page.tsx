import CarSlider from '@/components/carSlider/Component'
import ProductListsByCategory from '@/components/productListsByCategory/component.client'
import DefaultLayout from '@/layouts/DefaultLayout/layout'
import type { NextPage } from 'next'
import BannerPromo from '@/components/ui/banner-promo'
import React from 'react'
import MainHomeSlider from '@/components/herosSlider/MainHomeSlider'
import Container from '@/components/ui/container'
import BrandHomeSlider from '@/components/herosSlider/BrandHomeSlider'
import BlogsList from '@/components/blog/BlogsList'

const Page: NextPage = () => {
  return (
    <>
      <BannerPromo />
      <DefaultLayout>
        <MainHomeSlider />

        <Container>
          <h1 className="my-6 text-center text-5xl font-extrabold">
            Chợ phụ kiện ôtô & Đồ chơi xe điện & Sạc điện & Nội - ngoại thất ôtô
          </h1>
        </Container>

        <Container className="text-center">
          <ProductListsByCategory categoryName="vehicle" />
        </Container>

        <BrandHomeSlider />

        <BlogsList />

        {/* <CarSlider /> */}
      </DefaultLayout>
    </>
  )
}

export default Page
