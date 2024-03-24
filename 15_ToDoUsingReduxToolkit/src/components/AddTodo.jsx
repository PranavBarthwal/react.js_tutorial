import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from "../features/todo/todoSlice"


function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')

    }


    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
          <input
            type="text"
            className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Add Todo
          </button>
        </form>
      )
    }

export default AddTodo


// What is happening in the code snippet?

// The Redux Toolkit is being used in this code to manage the state of the application.

// The useDispatch hook is imported from the react-redux library. This hook returns a reference to the dispatch function from the Redux store. You use it to dispatch actions.

// In the addTodoHandler function, e.preventDefault() is called to prevent the page from refreshing when the form is submitted.

// Then, dispatch(addTodo(input)) is called. This dispatches an action to the Redux store. The addTodo action is presumably defined elsewhere in the code and it takes the current value of input as a parameter. This action will likely update the state of the todo list in the Redux store.

// Finally, setInput('') is called to clear the input field after the todo item is added.