import React, { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {

    const {user} = useContext(UserContext)

    if (!user) return <div>PLease Login</div>

    return <div>Welcome {user.username}</div>

}

export default Profile
