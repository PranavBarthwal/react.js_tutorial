import Chai from "./chai"

function App() {
 
  const name = "Albinder Singh Dhindsa"

  return (
    <>
      <Chai/>  
      <h1>Hi this is {name}</h1>          {/*ab ye curly braces wala syntax is evaluated expression iske andar hum java script nhi likh skte like if else or loops, as at the core ye ek object mein render (check main.jsx) hota hai and object ke andar ye sab nhi likhte */}
    </>
// ab technically hum yha pe ek hi element return krskte hai agar ek se zyada krenge to error aayega to isko bypass krne ke liye hum ek <> </> elementy ke andar hi saare elemnts daal dete hai. this emply elemenet is called Fragment. 
  )
}

export default App
