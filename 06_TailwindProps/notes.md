# Props in React

In React, "props" (short for properties) are a mechanism for passing data from a parent component to its child components. Props are a way to customize or configure child components by providing them with values or functions. They are read-only and cannot be modified by the child components.

Here's a brief overview of how props work in React:

1. **Passing Props:**
   - In the parent component, you can pass data or functions to a child component by adding attributes to the child component's JSX tag. These attributes are known as props.

   ```jsx
   // ParentComponent.jsx
   import React from 'react';
   import ChildComponent from './ChildComponent';

   const ParentComponent = () => {
     const dataValue = "Hello from Parent!";
     return (
       <ChildComponent data={dataValue} />
     );
   };
   ```

2. **Receiving Props:**
   - In the child component, you can access the passed props through the function parameters or by using `this.props` if the component is a class component.

   ```jsx
   // ChildComponent.jsx
   import React from 'react';

   const ChildComponent = (props) => {
     return (
       <div>
         <p>{props.data}</p>
       </div>
     );
   };
   ```

   If the component is a class component:

   ```jsx
   // ChildComponent.jsx
   import React, { Component } from 'react';

   class ChildComponent extends Component {
     render() {
       return (
         <div>
           <p>{this.props.data}</p>
         </div>
       );
     }
   }
   ```

3. **Default Props:**
   - You can also specify default values for props in case they are not provided by the parent component.

   ```jsx
   // ChildComponent.jsx
   import React from 'react';

   const ChildComponent = (props) => {
     return (
       <div>
         <p>{props.data || "Default Value"}</p>
       </div>
     );
   };

   // Set default values for props
   ChildComponent.defaultProps = {
     data: "Default Value",
   };
   ```

Props allow you to create reusable and flexible components by making them configurable based on the data or functions passed from their parent components. Keep in mind that props are immutable in the child components, and any changes to them should be managed in the parent component, usually through state.