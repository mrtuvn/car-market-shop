'use client'
import { NextPage } from 'next'
import Link from 'next/link'
import React, { useState } from 'react'
import DefaultLayout from '@/layouts/DefaultLayout/layout'

const Page: NextPage = () => {
  const [isShow, setIsShow] = useState(false)

  const handleShow = () => {
    setIsShow((prev) => !prev)
  }

  return (
    <DefaultLayout>
      <div className="m-w-[500px] mx-auto text-left">
        Liên hệ Zalo: {isShow && <Link href="tel:84936563599">+84 936536599</Link>}
        <button className="ms-2" onClick={handleShow}>
          {isShow ? 'Ẩn' : 'Hiển thị'}
        </button>
        <br />
        <div>Địa chỉ: P101 A17 Mai Động, Q.Hoàng Mai, TP Hà Nội</div>
      </div>
    </DefaultLayout>
  )
}

export default Page
