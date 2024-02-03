# JSX : JavaScript Xtensible Markup Language
JSX (JavaScript XML) is a syntax extension for JavaScript, often used with React to describe what the UI should look like. It looks similar to XML/HTML but is written within JavaScript code. JSX makes it easier to write and understand React components.

Here's a simple example of JSX in a React component:

```jsx
import React from 'react';

const MyComponent = () => {
  return (
    <div>
      <h1>Hello, JSX in React!</h1>
      <p>This is a simple React component using JSX.</p>
    </div>
  );
}

export default MyComponent;
```

In the above example:

- `import React from 'react';` imports the React library, which is necessary when using JSX.
- `const MyComponent = () => { ... }` defines a functional component named `MyComponent`.
- The `return` statement contains JSX code that represents the structure of the component.
- JSX tags like `<div>`, `<h1>`, and `<p>` are used to define the HTML structure.

JSX allows you to embed JavaScript expressions within curly braces `{}`. This enables you to dynamically generate content and use variables within your JSX code:

```jsx
import React from 'react';

const DynamicComponent = () => {
  const name = 'John Doe';

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is a dynamic React component using JSX.</p>
    </div>
  );
}

export default DynamicComponent;
```

In the example above, `{name}` is a JavaScript expression that gets evaluated, and its result is inserted into the JSX.

Remember that JSX needs to be transpiled into regular JavaScript before it can be understood by browsers. Tools like Babel are commonly used for this purpose in React applications.