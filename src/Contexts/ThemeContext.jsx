
import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  // Load saved theme or detect the user's system preference.
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('homepage-theme')

    if (saved === 'light' || saved === 'dark') {
      return saved
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  // Save the theme and apply it to the document.
  useEffect(() => {
    localStorage.setItem('homepage-theme', theme)
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
