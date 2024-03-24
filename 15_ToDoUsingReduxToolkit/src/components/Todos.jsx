import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

  return (
    <>
    
    <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <button
             onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos



// What is happening in the code snippet?

// The Redux Toolkit is being used in this code to manage the state of the application, specifically the state of the todo list.

// The `useSelector` hook is imported from the `react-redux` library. This hook allows you to extract data from the Redux store state. In this case, it's being used to access the `todos` state from the Redux store.

// The `useDispatch` hook is also imported from the `react-redux` library. This hook returns a reference to the dispatch function from the Redux store. You use it to dispatch actions.

// In the `onClick` handler of the button, `dispatch(removeTodo(todo.id))` is called. This dispatches an action to the Redux store. The `removeTodo` action is presumably defined in the `todoSlice` file and it takes the id of the current todo as a parameter. This action will likely update the state of the todo list in the Redux store by removing the todo with the given id.

// The `todos` state is then mapped over to render a list of todo items. Each todo item has a button that, when clicked, dispatches the `removeTodo` action with the id of that todo.