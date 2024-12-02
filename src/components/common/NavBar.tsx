import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div>
      <ul className="inline-flex flex-wrap gap-4">
        <li>
          <Link href="/products/hot">Sản Phẩm Đang Hot</Link>
        </li>
        <li>
          <Link href="/categories">Tất cả danh mục</Link>
        </li>
        <li>
          <Link href="/contact-me">Liên hệ</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
