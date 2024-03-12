import './App.css'
import UserContextProvider from './context/userContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {
  
  return (
    <UserContextProvider>
      <h1>React with chai</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App




// This code is the main application file for a React application. It's written in JavaScript and uses JSX syntax, which is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript code.

// The UserContextProvider component is imported from a local file named 'userContextProvider.js'. This component is expected to provide a context for user data to its child components. The Profile and Login components are imported from their respective files in the 'components' directory.

// The App function is a functional component that returns a JSX element. This element is wrapped in a UserContextProvider component, which means that the Login and Profile components, as well as any other child components inside UserContextProvider, will have access to the user data context.

// The Login and Profile components are sibling components that are rendered inside the UserContextProvider component. The Login component is expected to provide a way for users to log in, and the Profile component is expected to display user profile information.

// Finally, the App component is exported as a default export, which means it can be imported in other files using any name. This App component is typically rendered in the root component of your React application.