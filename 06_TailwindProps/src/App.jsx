import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/card'

function App() {

  let myObj = {
    username : "Hitesh",
    Age : 21
  }

  let newArr = [1,2,3,4]
  

  return (
    <>
      <h1 className='bg-red-400 text-yellow p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="chai aur code"  btnText="click" someObj={myObj} someArr={newArr}/>
      <Card username="hitesh"/>
    </>
  )
}

export default App
