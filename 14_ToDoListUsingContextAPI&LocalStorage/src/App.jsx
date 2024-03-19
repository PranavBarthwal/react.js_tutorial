import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )}

  const updateTodo = (id, todo) => {setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo ))) }

  const deleteTodo = (id) => {setTodos((prev) => prev.filter((todo) => todo.id !== id))}

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App





// This code is a React component named `App` that serves as the main entry point of the application. Let's go through it line by line:

// 1. `import { useState, useEffect } from 'react'`
//    - This imports the `useState` and `useEffect` hooks from the React library. These hooks enable functional components to manage state and perform side effects, respectively.

// 2. `import {TodoProvider} from './contexts'`
//    - This imports the `TodoProvider` component from a file named "contexts" located in the current directory. This likely provides a context for managing todo items and their related functions.

// 3. `import './App.css'`
//    - This imports an external CSS file named "App.css" to style the application.

// 4. `import TodoForm from './components/TodoForm'`
//    - This imports the `TodoForm` component from a file located in the "./components" directory. It's used to display and manage the form for adding new todo items.

// 5. `import TodoItem from './components/TodoItem'`
//    - This imports the `TodoItem` component from a file located in the "./components" directory. It's used to display individual todo items.

// 6. `function App() {`
//    - This declares a functional component named `App`.

// 7. `const [todos, setTodos] = useState([])`
//    - This initializes a state variable `todos` using the `useState` hook. It represents the list of todo items, and `setTodos` is the function to update this state.

// 8. `const addTodo = (todo) => {setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )}`
//    - This defines a function `addTodo` to add a new todo item to the list. It generates a unique ID using `Date.now()`, spreads the provided `todo` object, and adds it to the beginning of the current list of todos.

// 9. `const updateTodo = (id, todo) => {setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo ))) }`
//    - This defines a function `updateTodo` to update an existing todo item in the list. It maps over the previous todos, replacing the one with the matching `id` with the updated `todo`.

// 10. `const deleteTodo = (id) => {setTodos((prev) => prev.filter((todo) => todo.id !== id))}`
//     - This defines a function `deleteTodo` to delete a todo item from the list. It filters out the todo item with the provided `id` from the previous list of todos.

// 11. `const toggleComplete = (id) => { ... }`
//     - This defines a function `toggleComplete` to toggle the completion status of a todo item. It updates the `completed` property of the todo item with the provided `id`.

// 12. `useEffect(() => { ... }, [])`
//     - This `useEffect` hook runs once when the component mounts. It retrieves todos from local storage and updates the state with them, if they exist.

// 13. `useEffect(() => { ... }, [todos])`
//     - This `useEffect` hook runs whenever the `todos` state changes. It updates the local storage with the current list of todos.

// 14. The `return` statement starts the JSX template of the component. It renders the `TodoProvider` component which wraps the application, providing the todo-related context and functions to its descendants.

// 15. Inside the `TodoProvider`, there's a div with classes for styling. It contains the heading "Manage Your Todos", a `TodoForm` component for adding new todos, and a list of `TodoItem` components for displaying existing todos.

// 16. `{todos.map((todo) => ( ... ))}`
//     - This maps over the list of todos and renders a `TodoItem` component for each todo.

// 17. `export default App`
//     - This exports the `App` component as the default export of this file, allowing it to be imported and used in other parts of the application.