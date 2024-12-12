'use client'
import React, { useEffect } from 'react'
import { useTheme } from '@/contexts/theme/themeProvider'
import Image from 'next/image'

const ButtonSwitchTheme = () => {
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    //const themeStorage = window.localStorage.getItem(themeLocalStorageKey);
  })

  return (
    <div className='relative cursor-pointer'>

    <Image src="@/assets/images/icons-theme.svg" width="40" height="40" alt="switch-theme" /> 

    <button
      onClick={toggleTheme}
      className={`my-2 rounded px-4 py-2 text-sm font-medium ${
        theme === 'light' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
      }`}
    >
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>

    {/* <div className="absolute z-20 right-0 w-40"><div className="relative top-1 rounded-lg border border-gray-100 bg-white py-2 shadow-lg dark:border-gray-400 dark:bg-gray-800 "><form method="post" action="/color-scheme" data-discover="true"><input type="hidden" name="returnTo" value="/home" /><button value="light" name="colorScheme" className="flex w-full items-center gap-4 px-4 py-1 hover:bg-gray-50 active:text-red-brand dark:hover:bg-gray-700 dark:active:text-red-brand"><svg className="h-[18px] w-[18px]"><use href="/assets/icons-DB3ijYGZ.svg#sun"></use></svg> Light</button><button value="dark" name="colorScheme" className="flex w-full items-center gap-4 px-4 py-1 hover:bg-gray-50 active:text-red-brand dark:hover:bg-gray-700 dark:active:text-red-brand"><svg className="h-[18px] w-[18px]"><use href="/assets/icons-DB3ijYGZ.svg#moon"></use></svg> Dark</button><button value="system" name="colorScheme" className="flex w-full items-center gap-4 px-4 py-1 text-red-brand"><svg className="h-[18px] w-[18px]"><use href="/assets/icons-DB3ijYGZ.svg#setting"></use></svg> System</button></form></div></div> */}
    </div>
  )
}

export default ButtonSwitchTheme
