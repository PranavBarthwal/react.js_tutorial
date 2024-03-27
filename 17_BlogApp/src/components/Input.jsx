import React, {useId, forwardRef} from 'react'


const input = forwardRef(function Input({
    label,
    type = "text",
    className="",
    ...props
}, ref){

    const id = useId()

    return(
        <div className='w-full'>
            
            {label && <label
            className='inline-block mb-1 pl-1'
            htmlFor='{id}'
             ></label>}

            <input 
            type={type}
            className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full`}
            ref={ref}
            {...props}
            id={id}
            /> 
        </div>
    )
})

export default Input



// What is the purpose of the forwardRef function in this code snippet?

// In this code, the `forwardRef` function is used to forward the `ref` object from the parent component to the underlying DOM element, in this case, the `<input>` element.

// The `ref` object is a special object in React that allows you to access the underlying DOM element or React component instance. By default, you cannot pass a `ref` to a functional component like `Input`. However, by using the `forwardRef` function, you can enable this capability.

// Here's how it works:

// 1. The `forwardRef` function is imported from the `react` package at the top of the file.

// 2. The `forwardRef` function is then used as a higher-order component (HOC) to wrap the `Input` component function.

// 3. The `forwardRef` function takes two arguments: the first is the component function (`Input`), and the second is the `ref` object.

// 4. Inside the `Input` component, the `ref` object is passed as the second argument. This allows the `ref` to be accessed within the component.

// 5. Finally, the `ref` is passed to the `<input>` element using the `ref` prop: `ref={ref}`.

// By using `forwardRef`, the `ref` object can be passed from the parent component to the `Input` component, and then forwarded to the underlying `<input>` element. This allows the parent component to access and manipulate the `<input>` element directly using the `ref` object.