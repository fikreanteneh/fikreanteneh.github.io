import React, { createContext, useContext, useState, type ReactNode } from "react";

export type AccentColorTypes = "theme-green" | "theme-blue" | "theme-orange" | "theme-purple" | "theme-yellow" | "theme-blue"
export type ThemeColorTypes = "theme-dark" | "theme-light"

export const accentColors: AccentColorTypes[] = ["theme-green", "theme-blue", "theme-orange", "theme-purple", "theme-yellow", "theme-blue"]
export const themeColors: ThemeColorTypes[] = ["theme-dark", "theme-light"]

export const darkTheme: ThemeColorTypes = "theme-dark"
export const lightTheme: ThemeColorTypes = "theme-light"



export type ThemeContextType = {
    currentAccentColor: AccentColorTypes,
    currentThemeColor: ThemeColorTypes,
    changeAccentColor: (payload: string) => void,
    changeThemeColor: (payload: string) => void,
}

const ThemeContext = createContext<ThemeContextType>({
    currentAccentColor: "theme-blue",
    currentThemeColor: "theme-dark",
    changeAccentColor: () => { },
    changeThemeColor: () => { },
});

const UseTheme = () => {
    return useContext<ThemeContextType>(ThemeContext);
}

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [currentAccentColor, setCurrentAccentColor] =
        useState<AccentColorTypes>(window.localStorage.currentAccentColor ?? "theme-green");
    const [currentThemeColor, setCurrentThemeColor] =
        useState<ThemeColorTypes>(window.localStorage.currentThemeColor ?? "theme-light");

    const changeAccentColor = (color: string) => {
        setCurrentAccentColor(color as AccentColorTypes)
        window.localStorage.setItem('currentAccentColor', color)
    }

    const changeThemeColor = (color: string) => {
        setCurrentThemeColor(color as ThemeColorTypes)
        window.localStorage.setItem('currentThemeColor', color)
    }

    const value = {
        currentAccentColor: currentAccentColor,
        currentThemeColor: currentThemeColor,
        changeAccentColor: changeAccentColor,
        changeThemeColor: changeThemeColor
    }
    return (
        <ThemeContext.Provider value={value}>
            <div className={`${currentThemeColor} ${currentAccentColor} p-1 text-main-1`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default UseTheme;
