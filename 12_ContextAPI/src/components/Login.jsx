import React, { useState } from 'react';
import UserContext from '../context/userContext';

function Login() => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {

    }

    return (
        <div>
            <h2>Login</h2>
            
            <input type='text' 
            placeholder='username' 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />

            <input type='text' 
            placeholder='username' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Login;
