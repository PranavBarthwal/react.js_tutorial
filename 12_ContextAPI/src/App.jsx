import { useState } from 'react'
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
