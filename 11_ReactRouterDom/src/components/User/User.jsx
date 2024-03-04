import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const { id } = useParams()

    return (
        <div>
            <h1>User : {id}</h1>
        </div>
    )
}

export default User



// This code is a functional component in React named User. It's written in JavaScript and uses JSX syntax, which is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript code.

// The import statements at the top of the file are used to include various modules into the file. The React module is being imported from the 'react' package, but as of React 17, this import is no longer necessary unless you're using React features like React.Component, React.PureComponent, React.memo, or React.lazy.

// The useParams hook is imported from 'react-router-dom', which is a library for routing in React applications. The useParams hook allows you to access the URL parameters from the current route.

// The User function is a functional component that returns a JSX element. Inside this function, the useParams hook is used to get the id parameter from the URL. This id is then displayed inside an h1 element in the returned JSX.

// Finally, the User component is exported as a default export, which means it can be imported in other files using any name. This is typically used in the file where the component is being used to render a user.