import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// we noticed that actually <app/> was just only a function in the file app.jsx so we created our own function to check if it works
function MyApp(){
  return(
    <div>
      <h1>Custom App made by creating a function in the main.jsx file only</h1>
    </div>
  )
}

// we noticed that at the end of the day react bhi ek fucntion mein saare elements ko ek tree structure mein inject and render krti hai to hum apna khud ka element bhi to inject krwa skte hai

// const ReactElement = {                    // isko hum neeche use nhi kr payenge as ye custom react object hai and ismein key and value pair humne apne hisaab se diye hai and iska custom render bhi humne khud iske according likha hai to react ke og render ke sath ise problem ho skti hai.
//   type : 'a',
//   props : {
//       href : 'https://github.com/Pranavbarthwal',
//       target : '_blank'
//   },
//   children : 'Pranav Barthwal on GitHub'
// }


// Creating react element using React Conventions

const username = "Deepinder Goyal"

const ReactElement= React.createElement(            // Babel is a transpiler that injects the element when we use React.createELement
  'a',
  {href : 'https://github.com/Pranavbarthwal', target : '_blank'},
  'Pb on GitHub',
  username
)


// Injecting element by giving pura ka pura HTML

const AnotherElement = (
  <a href="https://github.com/PranavBarthwal" target="_blank">PB on GitHub</a>
)



ReactDOM.createRoot(document.getElementById('root')).render(

  <>
     <App/>
     {/* <MyApp/>     
     AnotherElement
     ReactElement */}
  </>
)
