import Link from 'next/link'
import React from 'react'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex items-center p-5 md:gap-6">
          <Link className="text-bold text-[2.4rem]" href="/">
            TuAuto91.COM
          </Link>
          <NavBar />
        </div>
      </div>
    </header>
  )
}

export default Header
