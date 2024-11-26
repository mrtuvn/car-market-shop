import DefaultLayout from '@/layouts/DefaultLayout/layout'
import type { NextPage } from 'next'
import Link from 'next/link'

import React from 'react'

const Page: NextPage = () => {
  return (
    <DefaultLayout>
      <div className="container">
        <h1 className="text-center text-4xl font-bold">
          Chợ phụ kiện xe ô tô & Đồ chơi thông minh
        </h1>
      </div>

      <div className="container p-8 text-center font-medium">
        Trang web đang xây dựng bạn chờ tiếp nhé....
      </div>
    </DefaultLayout>
  )
}

export default Page
