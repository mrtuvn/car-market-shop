'use client'
import React, { useEffect } from 'react'
import { useTheme } from '@/contexts/theme/themeProvider'
import { themeLocalStorageKey } from '@/constants'

const ButtonSwitchTheme = () => {
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    //const themeStorage = window.localStorage.getItem(themeLocalStorageKey);
  })

  return (
    <button
      onClick={toggleTheme}
      className={`my-2 rounded px-4 py-2 text-sm font-medium ${
        theme === 'light' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
    >
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  )
}

export default ButtonSwitchTheme
