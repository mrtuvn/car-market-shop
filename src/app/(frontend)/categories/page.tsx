import Categories from '@/components/common/Categories'
import DefaultLayout from '@/layouts/DefaultLayout/layout'

import { NextPage } from 'next'
import React from 'react'

const Page: NextPage = () => {
  return (
    <DefaultLayout>
      <div className="container">
        <Categories />
      </div>
    </DefaultLayout>
  )
}

export default Page
