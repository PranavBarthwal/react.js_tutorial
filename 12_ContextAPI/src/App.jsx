import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/userContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React with chai</h1>
    </UserContextProvider>
  )
}

export default App
