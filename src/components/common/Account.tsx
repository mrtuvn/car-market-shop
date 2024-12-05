'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Account = () => {
  const [showDropDown, setShowDropDown] = useState(false)

  const toggleShowDropDown = () => {
    setShowDropDown((prev) => !prev)
  }

  return (
    <div className="relative">
      <button onClick={toggleShowDropDown}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </button>

      {showDropDown && (
        <ul className="text-medium absolute bottom-[-70px] right-0 isolate z-10 min-w-[200px] list-none rounded border-gray-500 bg-white p-4 text-black">
          <li>
            <Link className="block w-full" href="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className="block w-full" href="/register">
              Register
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Account
