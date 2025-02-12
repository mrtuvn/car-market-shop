import React from 'react'

const ThemeProvider = React.createContext('light')
const valueTheme = {}

const ThemeContext = (children) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default ThemeContext
