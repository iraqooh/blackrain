// src/context/ThemeContext.jsx
import React, { createContext, useContext } from 'react'
import { useTheme } from '@/hooks/useTheme'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const { theme, setTheme } = useTheme()

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
