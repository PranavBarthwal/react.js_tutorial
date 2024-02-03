import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //let counter = 0;                  // UI updation mein problem
  let [counter, setCounter] = useState(0)          // useState Hook
  
  const addValue = () => {
    //counter++                    // UI updation mein problem
    if(counter<20){
      setCounter(counter+1) 
    }
    
  }

  const subValue = () =>{
    if(counter>0){
      setCounter(counter -1)
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Increase Value</button>
      <button onClick={subValue}>Decrease Value</button>

     

    </>
  )
}

export default App
