# useState() Hook and Batching

The `useState` hook in React is used to add state to functional components. Batching refers to the concept of combining multiple state updates into a single render cycle, which can improve performance. React automatically batches state updates that occur within the same event handler, lifecycle method, or asynchronous callback.

Let's create an example of using the `useState` hook and batching in a React functional component:

```jsx
import React, { useState } from 'react';

const ExampleComponent = () => {
  // Using useState to create a state variable 'count' with initial value 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const incrementCount = () => {
    // Multiple state updates are batched into a single render cycle
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default ExampleComponent;
```

In the example above, we have a functional component named `ExampleComponent`. It uses the `useState` hook to declare a state variable `count` with an initial value of 0. The `incrementCount` function is an event handler for a button click that increments the `count` state. Notice that we are calling `setCount` multiple times in a row, and React will batch these updates into a single render cycle. to for example : humne 0 se start kiya and increment button dbaya to humare paas ek ek krke 1,2,3 ki jagah seedha 3 display hoga because React will batch these updates into a single render cycle.

This batching behavior helps to optimize performance by preventing unnecessary re-renders for each individual state update. However, it's important to note that this batching only occurs within the same event handler, lifecycle method, or asynchronous callback. If state updates are spread across different execution contexts, React won't batch them.