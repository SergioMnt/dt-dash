import { useState, createContext } from "react";

export const ThemeContext = createContext({theme: "-dark", toggleTheme: () => {}})

export const ThemeProvider = ({ children }: {children: any}) => {

    const [theme, setTheme] = useState("-dark")

    const toggleTheme = () => {
        if(theme === '-dark') return setTheme("-light")
        return setTheme("-dark")
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}