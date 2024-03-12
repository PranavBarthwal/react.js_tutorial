import React from 'react'
import useTheme from '../../contexts/theme';

export default function ThemeBtn() {
    
    const{ themeMode, darkTheme, lightTheme  } = useTheme();

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked

        if(darkModeStatus){
            darkTheme()
        }else{
            lightTheme()
        }

    }

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode === "dark"} 
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}





// This code is part of a React component named `ThemeBtn`. It's written in JavaScript and uses JSX syntax, which is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript code.

// The `ThemeBtn` component imports the `React` object from the 'react' module and a custom hook `useTheme` from the 'contexts/theme' directory.

// Inside the `ThemeBtn` component, it uses the `useTheme` hook to get the current theme mode and the functions to change it. The `themeMode` variable holds the current theme mode, and the `darkTheme` and `lightTheme` functions are used to change the theme mode to dark and light respectively.

// It also defines a function `onChangeBtn` that is called when the checkbox input changes. This function checks the `checked` property of the checkbox. If it's checked, it calls the `darkTheme` function to change the theme to dark. If it's not checked, it calls the `lightTheme` function to change the theme to light.

// In the return statement, the `ThemeBtn` component renders a `label` element that contains a checkbox input and a `div`. The checkbox input is hidden using the `sr-only` class, and its `onChange` prop is set to the `onChangeBtn` function, so the theme changes when the checkbox is checked or unchecked. The `checked` prop of the checkbox is set to `true` if `themeMode` is "dark" and `false` otherwise, so the checkbox reflects the current theme mode.

// The `div` element is used to create a custom appearance for the checkbox. It has a long list of class names that apply various styles to it. For example, `w-11 h-6 bg-gray-200` sets the width, height, and background color of the `div`, and `peer-checked:after:translate-x-full peer-checked:after:border-white` changes the appearance of the `div` when the checkbox is checked.