import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  let[theme , setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  return(
    <ThemeContext.Provider value={{theme , toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

