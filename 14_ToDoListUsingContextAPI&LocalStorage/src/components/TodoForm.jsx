import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
    
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return 

        addTodo({todo:todo, completed:false})
        setTodo("")
    }


    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;




// Certainly, let's break down this code:

// 1. `import React, { useState } from 'react'`
//    - This imports the `React` library and the `useState` hook from it. `useState` is a hook used to add state variables to functional components.

// 2. `import { useTodo } from '../contexts';`
//    - This imports the `useTodo` hook from a file located in the "../contexts" directory. This hook likely provides access to the todo-related context, allowing the component to interact with todo items.

// 3. `function TodoForm() { ... }`
//    - This declares a functional component named `TodoForm`.

// 4. `const [todo, setTodo] = useState("")`
//    - This line initializes a state variable `todo` using the `useState` hook. It represents the input value of the todo item in the form. `setTodo` is the function used to update this state, and it's initialized with an empty string.

// 5. `const {addTodo} = useTodo()`
//    - This line calls the `useTodo` hook to access the `addTodo` function from the todo-related context. This function is used to add new todo items.

// 6. `const add = (e) => { ... }`
//    - This function is triggered when the form is submitted. It prevents the default form submission behavior, checks if the todo input is not empty, adds the todo item using the `addTodo` function, and resets the todo input field to an empty string.

// 7. `<form onSubmit={add} className="flex"> ... </form>`
//    - This is a form element with an `onSubmit` event handler set to the `add` function. When the form is submitted, the `add` function is called. It also has a CSS class of "flex" applied for styling purposes.

// 8. `<input type="text" ... />`
//    - This is an input element where users can type their todo item. It has a placeholder text, and its value is bound to the `todo` state variable. When the input changes, the `setTodo` function updates the state accordingly.

// 9. `<button type="submit" ... >Add</button>`
//    - This is a submit button inside the form. When clicked, it submits the form, triggering the `add` function. It has the label "Add" displayed on it.

// 10. `export default TodoForm;`
//     - This exports the `TodoForm` component as the default export of this file, allowing it to be imported and used in other parts of the application.

// In summary, this component provides a form for users to input new todo items. When the form is submitted, it adds the new todo item using the `addTodo` function from the todo-related context.