// Importing required functions from React
// createContext → creates a new context
// useContext    → allows components to consume context values
import { createContext, useContext } from "react";

/*
  Creating ThemeContext

  This is like a "global storage box" for theme data.
  Any component wrapped by ThemeProvider can access this data.
*/
export const ThemeContext = createContext({

    // Default theme value
    // This is used ONLY if no Provider is found above in the tree
    themeMode: "light",

    // Placeholder function for enabling dark theme
    // Real implementation will come from Provider
    darkTheme: () => {},

    // Placeholder function for enabling light theme
    // Real implementation will come from Provider
    lightTheme: () => {},
})

/*
  Exporting ThemeProvider

  This Provider will be used to wrap components
  so they can access themeMode, darkTheme & lightTheme
*/
export const ThemeProvider = ThemeContext.Provider

/*
  Custom Hook: useTheme()

  Instead of writing:
    useContext(ThemeContext)

  everywhere, we use:
    useTheme()

  Cleaner, reusable, and professional pattern
*/
export default function useTheme() {
    return useContext(ThemeContext)
}
