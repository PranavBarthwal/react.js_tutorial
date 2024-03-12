
import './App.css'
import { ThemeProvider } from '../contexts/theme'
import { useEffect, useState } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // Actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove("dark", "light")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                <Card />
              </div>
          </div>
      </div>

    </ThemeProvider>
  )
}

export default App






// This code is the main `App` component of a React application. It's written in JavaScript and uses JSX syntax, which is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript code.

// The `App` component imports several dependencies at the top, including a CSS file for styling, the `ThemeProvider` from the 'contexts/theme' module, the `useState` and `useEffect` hooks from 'react', and two components, `ThemeBtn` and `Card`, from the 'components' directory.

// Inside the `App` component, it uses the `useState` hook to create a state variable `themeMode` and a function `setThemeMode` to update it. The initial value of `themeMode` is "light".

// It also defines two functions, `lightTheme` and `darkTheme`, which are used to update `themeMode` to "light" and "dark" respectively.

// The `useEffect` hook is used to apply the actual theme change. Whenever `themeMode` changes, it removes the "dark" and "light" classes from the `html` element and adds the current `themeMode` as a class. This assumes that the "dark" and "light" classes are defined in the CSS and change the appearance of the website.

// In the return statement, the `App` component renders a `ThemeProvider` component that wraps around several `div` elements and the `ThemeBtn` and `Card` components. The `ThemeProvider` component is used to provide a theme context to all the components inside it. The `value` prop of the `ThemeProvider` component is an object containing the `themeMode`, `lightTheme`, and `darkTheme` variables, which allows child components to access the current theme mode and the functions to change it.

// The `ThemeBtn` component is expected to be a button that allows the user to change the theme of the application, and the `Card` component is expected to display some kind of information in a card format. The `div` elements with various classes are used for layout and styling.

// Finally, the `App` component is exported as a default export, which means it can be imported in other files using any name. This `App` component is typically rendered in the root component of your React application.

