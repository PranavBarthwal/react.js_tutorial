# forwardRef() Hook

## see Input component for working

In React, sometimes you want to do things with elements inside a component from outside that component. Like focusing on an input field when a button is clicked. To do this, you need to access the underlying DOM element of the child component.

Now, forwardRef() is a special function in React that allows a parent component to directly access the DOM element of a child component.

Here's a simple example:

Suppose you have a parent component (ParentComponent) and a child component (ChildComponent). Inside ChildComponent, there's an input field.

With forwardRef(), you can make it so that the parent component can "forward" a reference to the input field directly to the ChildComponent.

So, when you click a button in the parent component, you can use that reference to focus on the input field inside the child component.

In simpler terms, forwardRef() helps parents talk directly to specific parts of their child components, like saying "Hey, child component, I need to access that input field of yours. Can you give me a way to do that?" And forwardRef() helps the child component say, "Sure, here's a special way to talk to my input field. Now you can do what you need to do with it."

It's just a way for different parts of your app to talk to each other more easily.








