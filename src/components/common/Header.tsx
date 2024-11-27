import Link from 'next/link'
import React from 'react'
import NavBar from './NavBar'
import Account from './Account'
import OpenCart from '@/components/common/cart/OpenCart'
import CartDrawer from '@/components/common/cart/CartDrawer'

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex content-between items-center p-5 md:gap-6">
          <div className="left flex items-center gap-4">
            <Link className="text-bold text-[2.4rem]" href="/">
              TuAuto91.COM
            </Link>
            <NavBar />
          </div>

          <div className="rightArea relative ml-auto flex gap-5">
            <Account />
            <OpenCart />
            <CartDrawer />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
