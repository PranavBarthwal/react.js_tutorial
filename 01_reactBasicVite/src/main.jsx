import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App made by creating a function in the main.jsx file only</h1>
    </div>
  )
}

// const ReactElement = {                    // isko hum neeche use nhi kr payenge as ye custom react object hai and ismein key and value pair humne apne hisaab se diye hai and iska custom render bhi humne khud iske according likha hai to react ke og render ke sath ise problem ho skti hai.
//   type : 'a',
//   props : {
//       href : 'https://github.com/Pranavbarthwal',
//       target : '_blank'
//   },
//   children : 'Pranav Barthwal on GitHub'
// }

// Creating react element using React Conventions

const ReactElement= React.createElement(
  'a',
  {href : 'https://github.com/Pranavbarthwal', target : '_blank'},
  'Pb on GitHub'
)



const AnotherElement = (
  <a href="https://github.com/PranavBarthwal" target="_blank">PB on GitHub</a>
)



ReactDOM.createRoot(document.getElementById('root')).render(

//  <>
//     <App/>
//     <MyApp/>     
//    AnotherElement
    ReactElement
//  </>
)
