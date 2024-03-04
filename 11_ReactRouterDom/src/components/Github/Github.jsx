import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {

    const data = useLoaderData()

    // iski jagah humnse react-router-dom ka loader feature use kiya hai
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/PranavBarthwal')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])


    return (
        <div className='text-center m-4 bg-gray-600 text-white'>
            Github Followers : {data.followers}
            <img src={data.avatar_url} alt="avatar" />
        </div>
    )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/PranavBarthwal')
    return response.json()
} 






// Sure, let's break down the code you've provided:

// 1. **React Imports**: 
//     - `React`: This imports the core React library.
//     - `useEffect`, `useState`: These are React hooks used for managing side effects and component state, respectively.

// 2. **React Router Import**: 
//     - `useLoaderData`: This is likely a custom hook provided by `react-router-dom` that allows components to access data loaded during routing.

// 3. **Github Component**: 
//     - This is a functional React component named `Github`. 
//     - It utilizes the `useLoaderData` hook to fetch data. This data might be related to routing, perhaps fetched when the component is rendered as part of a route.
//     - Inside the component, it renders the fetched data (`data.followers` and `data.avatar_url`) within a `div`, along with an image element displaying the avatar.

// 4. **Exporting the Component**:
//     - The `Github` component is exported as the default export of this module.

// 5. **githubInfoLoader Function**:
//     - This is a named export `githubInfoLoader`, which is an asynchronous function.
//     - It fetches data from the GitHub API (`https://api.github.com/users/PranavBarthwal`) and returns the JSON response.

// Overall, this code demonstrates fetching data from the GitHub API (in this case, details about the user 'PranavBarthwal') using React and React Router. It uses the `useLoaderData` hook, presumably provided by React Router, to manage the loading of this data within the component.