// Importing React hooks
// useState  → to store current theme ("light" or "dark")
// useEffect → to apply theme changes to the HTML element
import { useEffect, useState } from 'react'

// Global app styles
import './App.css'

// Importing ThemeProvider from our Context
// This will make theme data available to all child components
import { ThemeProvider } from './contexts/Theme'

// Importing UI components
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  /*
    State to store current theme mode
    Default theme is "light"
  */
  const [themeMode, setThemeMode] = useState("light")

  /*
    Function to switch theme to light
    Passed to Context so any component can call it
  */
  const lightTheme = () => {
    setThemeMode("light")
  }

  /*
    Function to switch theme to dark
    Passed to Context so any component can call it
  */
  const darkTheme = () => {
    setThemeMode("dark")
  }

  /*
    SIDE EFFECT: Apply theme to HTML root element

    Tailwind's dark mode works by checking:
    <html class="dark"> or <html class="light">
  */
  useEffect(() => {

    // Remove any existing theme classes
    document.querySelector('html').classList.remove("light", "dark")

    // Add current theme as class to <html>
    document.querySelector('html').classList.add(themeMode)

  }, [themeMode]) // Runs every time themeMode changes


  return (

   

    /*
      ThemeProvider wraps the entire app

      value → data & functions available to all children
      themeMode   → current theme
      lightTheme  → function to enable light mode
      darkTheme   → function to enable dark mode
    */
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>

      {/* App layout container */}
      <div className="flex flex-wrap min-h-screen items-center">  
         <div className="bg-white dark:bg-black text-black dark:text-white p-6">
  Dark Mode Test
</div>

        <div className="w-full">

          {/* Theme toggle button aligned to right */}
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          {/* Card component */}
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>

        </div>
      </div>

    </ThemeProvider>
  )
}
export default App
