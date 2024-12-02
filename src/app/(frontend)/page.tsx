//import CarSlider from '@/components/carSlider/component.client'
import CarSlider from '@/components/carSlider/component.client'
import ProductListsByCategory from '@/components/productListsByCategory/component.client'
import DefaultLayout from '@/layouts/DefaultLayout/layout'
import type { NextPage } from 'next'

import React from 'react'

const Page: NextPage = () => {
  return (
    <DefaultLayout>
      <div className="container">
        <h1 className="text-center text-4xl font-bold">
          Chợ phụ kiện ôtô & Đồ chơi xe điện & Sạc điện & Nội - ngoại thất ôtô
        </h1>
      </div>

      <div className="container p-8 text-center font-medium">
        <ProductListsByCategory categoryName="vehicle" />
      </div>

      {/* <div className="container p-8 text-center font-medium">
        <CarSlider />
      </div> */}
    </DefaultLayout>
  )
}

export default Page
