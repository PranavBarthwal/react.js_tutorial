import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme: () => {},
    lightTheme: () => {}
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext);
}



// This code is creating a context for theme management in a React application. 

// Firstly, it imports `createContext` and `useContext` from the 'react' package. `createContext` is used to create a new context, and `useContext` is a hook that allows you to use the value of a context in a functional component.

// The `ThemeContext` is created using `createContext` and is initialized with an object that has a `themeMode` property set to "light", and two functions `darkTheme` and `lightTheme` that do nothing (empty functions). This means that by default, the theme mode is set to "light", and the `darkTheme` and `lightTheme` functions don't do anything. 

// The `ThemeProvider` is a special kind of component returned by `createContext()`, which is used to make the context value available to all child components, no matter how deep they are in the component tree. 

// The `useTheme` function is a custom hook that uses the `useContext` hook to access the value of `ThemeContext`. This hook can be used in any functional component to get the current theme mode and the functions to change it. 

// Finally, the `useTheme` hook, `ThemeContext`, and `ThemeProvider` are exported so they can be used in other parts of the application. The `useTheme` hook is exported as a default export, which means it can be imported in other files using any name. The `ThemeContext` and `ThemeProvider` are named exports, which means they must be imported using the same names.