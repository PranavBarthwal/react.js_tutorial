import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos : [{id:1, text:"Hello World"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo : (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer





// The provided JavaScript code utilizes Redux Toolkit's `createSlice` function to create a slice of the Redux store. A slice encapsulates a reducer, actions, and selectors, simplifying the management of a specific portion of the Redux state, such as a list of todos.

// The `initialState` object represents the initial state of the todos slice, consisting of an array of todo objects with `id` and `text` properties.

// Using `createSlice`, the code defines a slice with a specified name, initial state, and reducers. The name serves as the prefix for generated action types, while reducers handle corresponding actions.

// every reducer function receives the current state and an action object as arguments, allowing for updates to the state based on the action payload. eg : addTodo : (state, action) => { ... }

// state argument is a reference to the current state of the slice, allowing for direct mutation of the state within the reducer functions.

// action argument represents the action object dispatched to the Redux store, containing a `type` property and an optional `payload` property.

// payload property: This property is optional and contains any additional data that needs to be sent with the action. It carries the necessary information for the action to be processed by reducers. For instance, if the action type is "ADD_TODO", the payload might contain the text of the todo item being added.

// Two actions, `addTodo` and `removeTodo`, are defined. `addTodo` creates a new todo item with a unique ID and text obtained from the action payload, adding it to the state. `removeTodo` removes a todo item from the state based on its ID provided in the action payload.

// The `todoSlice.actions` object provides generated action creators for use in dispatching actions from components.

// Finally, `todoSlice.reducer` is the generated reducer function, exported as the default export, responsible for handling actions related to the todos slice of the Redux store.

// The TypeScript interface provided represents the type definition for a slice object returned by `createSlice`, detailing properties such as the slice name, reducer, actions, etc. Though not directly used in the JavaScript code, it aids in understanding the structure and capabilities of a slice object.