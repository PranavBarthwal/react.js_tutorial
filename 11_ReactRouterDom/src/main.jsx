import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'     
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// One Way of creating routes for react application
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children : [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element:<About/>
//       },
//       {
//         path: "contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])


// Another easier way of creating routes for react application

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:id' element={<User />} />
      <Route loader={githubInfoLoader} path='github' element={<Github />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)





// Sure, let's break down the code:

// ```jsx
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'     
// import Layout from './Layout.jsx'
// import Home from './components/Home/Home.jsx'
// import About from './components/About/About.jsx'
// import Contact from './components/Contact/Contact.jsx'
// import User from './components/User/User.jsx'
// import Github, { githubInfoLoader } from './components/Github/Github.jsx'
// ```

// 1. **Imports**:
//    - This section imports necessary modules and components for the application.
//    - `React` and `ReactDOM`: Core React and ReactDOM libraries.
//    - `App`: Presumably the main application component.
//    - `RouterProvider`, `createBrowserRouter`, `createRoutesFromElements`, `Route`: Components and utilities provided by `react-router-dom` for routing in React applications.
//    - `Layout`, `Home`, `About`, `Contact`, `User`, `Github`: Components representing different parts of the application.

// ```jsx
// // One Way of creating routes for react application
// // const router = createBrowserRouter([
// //   {
// //     path: '/',
// //     element: <Layout/>,
// //     children : [
// //       {
// //         path: "",
// //         element: <Home/>
// //       },
// //       {
// //         path: "about",
// //         element:<About/>
// //       },
// //       {
// //         path: "contact",
// //         element:<Contact/>
// //       }
// //     ]
// //   }
// // ])
// ```

// 2. **Route Creation (Alternative)**:
//    - This section provides an alternative way of creating routes using `createBrowserRouter`.
//    - It's commented out in favor of the next approach, which seems to be more concise and easier to manage.

// ```jsx
// // Another easier way of creating routes for react application

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='/' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='user/:id' element={<User />} />
//       <Route loader={githubInfoLoader} path='github' element={<Github />} />
//     </Route>
//   )
// )
// ```

// 3. **Route Creation**:
//    - This section uses `createBrowserRouter` to create a router.
//    - It utilizes `createRoutesFromElements` to define routes based on JSX elements.
//    - Each `<Route>` element represents a route with its corresponding path and component.
//    - `loader` attribute in the `Route` for `github` path specifies that data loading function `githubInfoLoader` should be used when rendering the `Github` component.

// ```jsx
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )
// ```

// 4. **Rendering**:
//    - This section uses `ReactDOM.createRoot` to render the application root.
//    - It renders the application within a `<React.StrictMode>` wrapper to enable strict mode.
//    - `RouterProvider` is used to provide the router instance (`router`) to the application, enabling routing functionality.

// Overall, this code sets up routing for a React application using `react-router-dom`, defines routes, and renders the application with routing capabilities.