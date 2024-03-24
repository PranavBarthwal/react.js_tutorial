# Redux Toolkit (Rtk)
Redux Toolkit is a package that simplifies the process of managing state in React applications using Redux. Redux itself is a predictable state container for JavaScript applications, commonly used with libraries like React for building user interfaces. However, Redux can involve writing a significant amount of boilerplate code to set up actions, reducers, and store configuration.

Redux Toolkit provides several utilities to streamline the Redux development process:

1. **configureStore**: Instead of manually setting up the Redux store with createStore, combineReducers, middleware, and dev tools configuration, Redux Toolkit provides a function called `configureStore` that combines these steps into one. It automatically sets up Redux DevTools Extension for debugging in development mode.

2. **createSlice**: Redux Toolkit introduces the concept of "slices," which are essentially collections of reducers and actions that are logically grouped together. With `createSlice`, you can define both reducers and actions in one place, reducing the amount of boilerplate code you need to write.

   ```javascript
   import { createSlice } from '@reduxjs/toolkit';

   const counterSlice = createSlice({
     name: 'counter',
     initialState: 0,
     reducers: {
       increment: state => state + 1,
       decrement: state => state - 1
     }
   });

   export const { increment, decrement } = counterSlice.actions;
   export default counterSlice.reducer;
   ```

3. **createAsyncThunk**: Asynchronous actions are common in web applications, especially when dealing with APIs. Redux Toolkit provides `createAsyncThunk`, which simplifies the process of handling asynchronous logic in Redux actions.

   ```javascript
   import { createAsyncThunk } from '@reduxjs/toolkit';
   import { fetchUserById } from './api';

   export const getUserById = createAsyncThunk(
     'users/getUserById',
     async (userId, thunkAPI) => {
       const response = await fetchUserById(userId);
       return response.data;
     }
   );
   ```

4. **createEntityAdapter**: When dealing with normalized state structures, such as managing arrays of entities, `createEntityAdapter` provides helper functions to simplify common operations like adding, updating, and removing entities.

   ```javascript
   import { createEntityAdapter } from '@reduxjs/toolkit';

   const todosAdapter = createEntityAdapter();

   const initialState = todosAdapter.getInitialState();

   const todosSlice = createSlice({
     name: 'todos',
     initialState,
     reducers: {
       todoAdded: todosAdapter.addOne,
       todoUpdated: todosAdapter.updateOne,
       todoRemoved: todosAdapter.removeOne
     }
   });

   export const { todoAdded, todoUpdated, todoRemoved } = todosSlice.actions;
   export default todosSlice.reducer;
   ```

5. **Immutability**: Redux Toolkit internally uses Immer, a library that allows you to write immutable updates to state by simply modifying the state object directly. This makes it easier to work with immutable updates, as you can write code that looks like it's mutating state while ensuring that Redux's state updates are still handled immutably.

Overall, Redux Toolkit aims to provide a more intuitive and efficient way to work with Redux, reducing boilerplate code and common pain points associated with Redux development. It's widely adopted within the React community for managing application state.


<br> <br>

# Reducers and Actions in Rtk

In Redux Toolkit, reducers and actions are fundamental concepts for managing state and handling state updates in your Redux application.

### Reducers:
Reducers are functions responsible for specifying how the application's state should change in response to dispatched actions. They take the current state and an action as arguments, and return a new state based on the action type. Reducers must be pure functions, meaning they produce the same output for a given input and have no side effects.

Redux Toolkit simplifies the process of defining reducers by providing utilities such as `createSlice` and `createReducer`. 

- **createSlice**: This utility function allows you to define a "slice" of state, which includes both the initial state and a collection of reducer functions. It automatically generates action creators based on the reducer names, and also generates the Redux action types for you.

- **createReducer**: This utility function allows you to define reducers separately from the initial state. It takes an initial state and an object where the keys are action types and the values are reducer functions.

By using these utilities, you can write cleaner and more concise reducer logic, reducing boilerplate code and making your Redux codebase easier to maintain.

### Actions:
Actions are payloads of information that describe an intent to change the application's state. They are plain JavaScript objects that typically have a `type` property indicating the type of action being performed, along with any additional data necessary for the action.

In Redux Toolkit, actions are typically created using action creator functions. These functions return action objects and can be generated automatically using `createSlice` or defined separately.

- **Action Creators**: Action creator functions are functions that create and return action objects. They encapsulate the logic for constructing action objects and are typically used to dispatch actions from components.

Redux Toolkit provides utilities like `createSlice` and `createAction` to automatically generate action creators, which helps to reduce boilerplate code and ensures consistency in action creation across your application.

By using reducers and actions in Redux Toolkit, you can effectively manage the state of your Redux application and handle state updates in a more structured and efficient manner, leading to cleaner code and improved developer productivity.



# useDispatch() in Rtk


In Redux Toolkit (RTK), the useDispatch hook is a hook provided by the React-Redux library for dispatching actions to the Redux store within React components. It allows you to access the dispatch function without explicitly connecting your component to the Redux store.