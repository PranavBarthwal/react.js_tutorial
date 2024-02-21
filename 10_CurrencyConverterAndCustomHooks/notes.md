# INPUT BOX COMPONENT

let's break down the `InputBox.jsx` React code:

1. **Imports**:
   - The code imports `React` from the 'react' library.
   - It also imports the `useId` hook from the 'react' library, which is used to generate unique IDs for accessibility purposes.

2. **Functional Component Declaration**: The code defines a functional component named `InputBox`.

3. **Props**: The component accepts several props:
   - `label`: A string representing the label for the input box.
   - `amount`: The amount value for the input.
   - `onAmountChange`: A function to handle changes in the amount value.
   - `onCurrencyChange`: A function to handle changes in the currency selection.
   - `currencyOption`: An array of strings representing currency options.
   - `selectCurrency`: A string representing the selected currency.
   - `amountDisable`: A boolean indicating whether the amount input is disabled.
   - `currencyDisable`: A boolean indicating whether the currency selection is disabled.
   - `className`: Additional CSS classes for styling.

3.  **Unique ID Generation**:
   - The `useId` hook is called to generate a unique ID for the amount input field. This ID is used for associating the label with the input field for better accessibility (`htmlFor` attribute in the `<label>` tag and `id` attribute in the `<input>` tag).

4. **Component Structure**:
   - The component renders a `<div>` element with a white background, padding, rounded corners, and text size set to small.
   - Inside this `<div>`, there are two child `<div>` elements, each taking up half of the width.
   - The first `<div>` contains a label and an input field for entering the amount. The input field is disabled if `amountDisable` prop is `true`.
   - The second `<div>` contains a label ("Currency Type") and a `<select>` element for choosing the currency. The select element is disabled if `currencyDisable` prop is `true`.
   - Inside the `<select>` element, options are dynamically generated based on the `currencyOption` prop.

5. **Event Handlers**:
   - The `onChange` event handler is attached to both the amount input field and the currency select element to handle changes in their values. These event handlers call the `onAmountChange` and `onCurrencyChange` functions respectively, passing the new values as arguments.

   Event handlers in React are functions that get triggered when certain events occur, like when a user interacts with a component. Let me explain the event handlers used in the `InputBox` component:

    1. **onAmountChange**:
        - This event handler is triggered when the user changes the value in the amount input field.
        - It's attached to the `onChange` event of the input field.
        - When the user types a new amount, this function is called.
        - It takes the new value entered by the user (converted to a number using `Number(e.target.value)`) and passes it to the `onAmountChange` function provided as a prop to the `InputBox` component.

    2. **onCurrencyChange**:
        - This event handler is triggered when the user selects a different currency from the dropdown menu.
        - It's attached to the `onChange` event of the `<select>` element.
        - When the user selects a new currency, this function is called.
        - It takes the new value of the selected currency (retrieved from `e.target.value`) and passes it to the `onCurrencyChange` function provided as a prop to the `InputBox` component.

    In simpler terms, these event handlers are like messengers between the user's actions and the rest of the application. They make sure that when the user types something in the amount field or selects a currency, those changes are communicated to the parent component (or any other function) that needs to know about them. This way, the application can respond accordingly, such as updating calculations or fetching data related to the changed amount or currency.

6. **Export**: The `InputBox` component is exported as the default export from the module, making it available for use in other parts of the application.

Overall, this component provides an input box for entering an amount and selecting a currency, with options to customize its appearance and behavior through props.


<br><br>

# useId() Hook

`useId()` is a React Hook for generating unique IDs that can be passed to accessibility attributes.

```jsx
const id = useId()
```

**Parameters** : 
useId does not take any parameters.

**Returns** : 
useId returns a unique ID string associated with this particular useId call in this particular component.