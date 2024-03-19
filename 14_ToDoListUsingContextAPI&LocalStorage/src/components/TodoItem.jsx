import React from 'react'
import { useTodo } from '../contexts';

function TodoItem({ todo }) {
    
    const [isTodoEditable, setIsTodoEditable] = React.useState(false);

    const [todoMsg, setTodoMsg] = React.useState(todo.todo);

    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;



// Sure, let's break down this code:

// 1. `import React from 'react'`
//    - This line imports the React library. Although not directly used in this file, it's a common convention to import React in files that contain JSX.

// 2. `import { useTodo } from '../contexts';`
//    - This imports the `useTodo` hook from a file named "contexts" located in the parent directory's "contexts" folder. This hook provides access to the todo-related context, likely including functions to manipulate todo items.

// 3. `function TodoItem({ todo }) { ... }`
//    - This declares a functional component named `TodoItem` which takes a `todo` object as a prop.

// 4. `const [isTodoEditable, setIsTodoEditable] = React.useState(false);`
//    - This line initializes a state variable `isTodoEditable` using the `useState` hook from React. It determines whether the todo item is currently editable or not. `setIsTodoEditable` is the function used to update this state.

// 5. `const [todoMsg, setTodoMsg] = React.useState(todo.todo);`
//    - This line initializes another state variable `todoMsg`, which holds the message content of the todo item. It's initialized with the `todo` message passed as a prop. `setTodoMsg` is the function to update this state.

// 6. `const {updateTodo, deleteTodo, toggleComplete} = useTodo()`
//    - This line calls the `useTodo` hook, which returns an object containing functions `updateTodo`, `deleteTodo`, and `toggleComplete`. These functions are used to update, delete, and toggle the completion status of todo items, respectively.

// 7. `const editTodo = () => { ... }`
//    - This function is responsible for updating the todo item when editing is complete. It calls the `updateTodo` function with the updated todo message and sets `isTodoEditable` to `false`.

// 8. `const toggleCompleted = () => { ... }`
//    - This function toggles the completion status of the todo item by calling the `toggleComplete` function.

// 9. The `return` statement starts the JSX template of the component. It renders a `div` element representing a todo item.

// 10. The `className` attribute of the `div` dynamically assigns CSS classes based on the completion status of the todo item.

// 11. The first `input` element is a checkbox representing the completion status of the todo item. Its `checked` attribute is set based on the completion status of the todo item, and its `onChange` event handler calls `toggleCompleted` to toggle the completion status.

// 12. The second `input` element is a text input field representing the todo message. Its value is bound to the `todoMsg` state variable, and its `onChange` event handler updates the `todoMsg` state as the user types.

// 13. The first `button` element toggles between an edit (📁) and save (✏️) icon based on the `isTodoEditable` state. Its `onClick` event handler either calls `editTodo` to save the changes or toggles the `isTodoEditable` state.

// 14. The second `button` element is for deleting the todo item. Its `onClick` event handler calls `deleteTodo` to delete the todo item.

// 15. `export default TodoItem;`
//     - This exports the `TodoItem` component as the default export of this file, allowing it to be imported and used in other parts of the application.