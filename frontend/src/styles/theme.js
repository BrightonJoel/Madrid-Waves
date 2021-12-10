import React, { useState, useLayoutEffect, useContext } from "react"
import { ThemeProvider } from "styled-components"

import GlobalStyles from "./globals"
import { lightTheme, darkTheme } from "../themes/default"

const ThemeContext = React.createContext()

export function useTheme() {
  return useContext(ThemeContext)
}

const Theme = ({ children }) => {
  const [theme, setTheme] = useState("light")

  useLayoutEffect(() => {
    const currentTheme = localStorage.getItem("theme")
    setTheme(currentTheme)
  }, [])

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
    localStorage.setItem("theme", theme === "light" ? "dark" : "light")
  }

  const value = {
    themeToggler,
    theme,
  }

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
export default Theme
