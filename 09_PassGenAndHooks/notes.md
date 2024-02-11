# useCallback() Hook

`useCallback` is a React hook used for optimizing performance by memoizing functions. 

In React, when a component re-renders, its functions (like event handlers) are recreated. This can lead to unnecessary re-renders of child components that depend on these functions, especially if they are passed down as props. 

`useCallback` allows you to memoize a function so that it's only recreated when its dependencies change. This can help optimize performance by preventing unnecessary re-renders of child components.

Here's a basic syntax of `useCallback`:

```jsx
import React, { useCallback } from 'react';

function MyComponent() {
  const memoizedCallback = useCallback(
    () => {
      // Function body
    },
    [/* dependencies */],
  );

  return <ChildComponent onClick={memoizedCallback} />;
}
```

The first argument to `useCallback` is the function you want to memoize, and the second argument is an array of dependencies. If any of these dependencies change, the function will be re-created; otherwise, it will return the memoized version of the function.

Here's an example to illustrate how `useCallback` can optimize performance:

```jsx
import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  // Without useCallback, this function would be recreated on every render
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}

function ChildComponent({ onClick }) {
  // Some child component
  return <button onClick={onClick}>Increment</button>;
}
```

In this example, `handleClick` is wrapped with `useCallback`. It depends on the `count` state variable. Without `useCallback`, `handleClick` would be recreated on every render, leading to unnecessary re-renders of `ChildComponent`. However, with `useCallback`, `handleClick` will only be recreated when the `count` changes, optimizing performance.

<br><br>


# useEffect() Hook

The `useEffect` hook in React is used to perform side effects in functional components. Side effects might include things like data fetching, subscriptions, or manually changing the DOM in ways that can affect other parts of your application.

The basic syntax of `useEffect` is as follows:

```jsx
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Side effect code here
    return () => {
      // Cleanup code here (optional)
    };
  }, [/* dependencies */]);

  return (
    // JSX code here
  );
}
```

Here's what each part does:

1. The first argument is a function that contains the side effect code you want to execute. This function will be called after every render, including the initial render.

2. The second argument is an optional array of dependencies. If provided, the effect will only re-run if one of the dependencies has changed since the last render. If no dependencies are provided, the effect will run after every render.

3. The function returned from `useEffect` (if present) is an optional cleanup function. It runs when the component unmounts or before running the effect function again due to a re-render or dependency change. This is useful for cleaning up resources such as event listeners or subscriptions to prevent memory leaks.

Here's a simple example:

```jsx
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  // This effect will run after every render
  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

In this example, `useEffect` is used to update the document title with the current count after every render. Since we didn't provide any dependencies, it will run after every render, including the initial render.

Remember, `useEffect` is a powerful tool, but misuse can lead to performance issues or bugs. Always ensure that your side effects are idempotent and that you handle any cleanup necessary to avoid memory leaks.

<br><br>

# useRef() Hook

The `useRef` hook in React is used to create a mutable reference that persists across renders of a functional component. Unlike state variables, changes to a ref do not trigger a re-render of the component. This makes refs useful for storing mutable values or accessing DOM elements directly.

Here's the basic syntax of `useRef`:

```jsx
import React, { useRef } from 'react';

function MyComponent() {
  const myRef = useRef(initialValue);
  
  // Usage example
  myRef.current = newValue;

  return (
    // JSX code here
  );
}
```

Here's what's happening:

1. The `useRef` function is called with an optional initial value. This initializes the ref object with a `.current` property set to the initial value.

2. The `useRef` hook returns a mutable ref object. This object persists for the entire lifecycle of the component.

3. The `current` property of the ref object can be accessed and modified directly. Changes to `myRef.current` do not cause the component to re-render.

4. The ref object can be used to store any mutable value, such as state that doesn't trigger re-renders, or to reference DOM elements directly.

Here's an example:

```jsx
import React, { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  const focusInput = () => {
    // Accessing the input element directly using ref
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

In this example, `inputRef` is a ref object initialized with `useRef(null)`. We then use this ref to directly access the input element's `focus` method when the "Focus Input" button is clicked. This allows us to focus the input without having to manage its state in the component.