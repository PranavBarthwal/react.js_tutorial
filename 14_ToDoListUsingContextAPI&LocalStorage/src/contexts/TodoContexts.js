import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [{
        id: 1,
        todo: "Todo msg",
        completed: false,
    }],
    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},
    updateTodo: (id, todo) => {},    
});

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider




// Sure, let's break down each line of this code:

// 1. `import { createContext, useContext } from "react";`
//    - This line imports two functions, `createContext` and `useContext`, from the "react" library. These functions are used for creating and utilizing context in React applications.

// 2. `export const TodoContext = createContext({`
//    - This line creates a new context named `TodoContext` using the `createContext` function imported from React. It initializes the context with an object as its default value. This object contains:
//      - `todos`: An array of todo items. In this default object, it contains one todo item with `id`, `todo` message, and `completed` status.
//      - `addTodo`, `deleteTodo`, `toggleComplete`, and `updatedTodo`: Placeholder functions for adding, deleting, toggling completion, and updating todo items respectively.

// 3. `});`
//    - This line closes the object literal passed as the initial value to `createContext`.

// 4. `export const useTodo = () => {`
//    - This line defines a custom hook named `useTodo`. Custom hooks are a way to reuse stateful logic in React components. 

// 5. `return useContext(TodoContext)`
//    - This line uses the `useContext` hook to access the value of `TodoContext`. It returns whatever value is currently set in the `TodoContext`.

// 6. `}`
//    - This line closes the custom hook definition.

// 7. `export const TodoProvider = TodoContext.Provider`
//    - This line exports a variable named `TodoProvider` which references the `Provider` property of the `TodoContext`. This allows other components in the application to access the context and its values.

// In summary, this code sets up a context called `TodoContext` with default values for todo items and functions to manipulate those items. It also provides a custom hook `useTodo` for easily accessing the context within components, and exports a `TodoProvider` component that allows the context to be utilized throughout the application.