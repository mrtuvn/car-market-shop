import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h2>Rất xin lỗi</h2>
      <p>Không thấy trang bạn đang tìm kiếm</p>
      <Link href="/">Quay lại trang chủ</Link>
    </div>
  )
}

export default NotFound
