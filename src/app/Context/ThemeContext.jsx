"use client"
import { createContext, useState } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const [mode,setMode] = useState("dark");
    const [isDarkMode,setIsDarkMode] = useState(true)


const toggle = () => {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle("dark-mode",isDarkMode);
    document.body.classList.toggle("light-mode",!isDarkMode);
}
return <ThemeContext.Provider value={{toggle,mode,isDarkMode}}>
    <div className={`theme ${mode}`}>
    {children}
    </div>
</ThemeContext.Provider>
}