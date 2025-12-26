// Importing React (needed for JSX)
import React from 'react'

// Importing our custom hook from Theme Context
// This hook gives us access to theme data & functions
import useTheme from '../contexts/theme'

export default function ThemeBtn() {

    /*
      Destructuring values from useTheme()

      themeMode   → current theme ("light" or "dark")
      lightTheme  → function to switch theme to light
      darkTheme   → function to switch theme to dark
    */
    const { themeMode, lightTheme, darkTheme } = useTheme()

    /*
      This function runs whenever the checkbox is toggled
      It decides whether to enable dark mode or light mode
    */
    const onChangeBtn = (e) => {

        // Get checkbox status (true = checked, false = unchecked)
        const darkModeStatus = e.currentTarget.checked

        // If checkbox is checked → enable dark theme
        if (darkModeStatus) {
            darkTheme()
        } 
        // If checkbox is unchecked → enable light theme
        else {
            lightTheme()
        }
    }

    return (
        /*
          Label wraps the entire toggle switch
          cursor-pointer makes whole switch clickable
        */
        <label className="relative inline-flex items-center cursor-pointer">

            {/* 
              Hidden checkbox input
              sr-only hides it visually but keeps it accessible
              peer is used by Tailwind to style sibling elements
            */}
            <input
                type="checkbox"
                className="sr-only peer"

                // Trigger theme change when toggled
                onChange={onChangeBtn}

                /*
                  Controlled input:
                  If themeMode === "dark" → checkbox is checked
                  If themeMode === "light" → unchecked
                */
                checked={themeMode === "dark"}
            />

            {/* 
              Toggle switch UI
              Uses Tailwind + peer classes to move the circle
              and change colors when checkbox is checked
            */}
            <div className="
                w-11 h-6 
                bg-gray-200 
                peer-focus:outline-none 
                peer-focus:ring-4 
                peer-focus:ring-blue-300 
                dark:peer-focus:ring-blue-800 
                rounded-full 
                peer 
                dark:bg-gray-700 
                peer-checked:after:translate-x-full 
                peer-checked:after:border-white 
                after:content-[''] 
                after:absolute 
                after:top-[2px] 
                after:left-[2px] 
                after:bg-white 
                after:border-gray-300 
                after:border 
                after:rounded-full 
                after:h-5 
                after:w-5 
                after:transition-all 
                dark:border-gray-600 
                peer-checked:bg-blue-600
            ">
            </div>

            {/* Text next to toggle */}
            <span className="ml-3 text-sm font-medium text-gray-900">
                Toggle Theme
            </span>
        </label>
    )
}
