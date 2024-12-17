import Container from '@/components/ui/container'
import DefaultLayout from '@/layouts/DefaultLayout/layout'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <DefaultLayout>
      <Container className="mx-auto flex flex-col items-center gap-5 p-14">
        <h2>Rất xin lỗi</h2>
        <p>Không thấy trang bạn đang tìm kiếm</p>
        <Link className="underline" href="/">
          Quay lại trang chủ
        </Link>
      </Container>
    </DefaultLayout>
  )
}

export default NotFound
