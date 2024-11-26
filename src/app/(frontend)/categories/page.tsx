import Categories from '@/components/common/Categories'
import DefaultLayout from '@/layouts/DefaultLayout/layout'

import { NextPage } from 'next'
import React from 'react'

const Page: NextPage = () => {
  return (
    <DefaultLayout>
      <div className="container">
        <h2>Danh mục:</h2>
        <Categories />
        <hr className="my-3" />
      </div>
    </DefaultLayout>
  )
}

export default Page
