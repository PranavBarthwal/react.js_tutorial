import { useState } from "react"


function App() {
  const [color, setColor] = useState("yellow")

  return (

    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}      // NOTE : in the end
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
        </div>
      </div>
    </div>


  )
}

export default App



// NOTE :

// why cant we directly use onClick={setColor("red")} insted of passing a callback in onclick?

// The issue with using onClick={setColor("red")} is that it will immediately invoke the setColor function
// when the component renders. This is because the onClick prop expects a function to be passed to it, 
// but you're immediately invoking the function by including the parentheses ().

// To solve this issue, you can wrap the function call in another function, like an arrow function. 
// This way, the function will only be invoked when the button is clicked, not when the component renders.