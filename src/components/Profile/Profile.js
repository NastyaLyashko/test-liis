import React from 'react';
import '../Profile/Profile.css';
import { useSelector } from 'react-redux';

function Profile () {

    const login = useSelector((state) => state.data.login)
    console.log(login)
    return (
            <h1 className='profile__title'>{login}</h1>
    )
}

export default Profile;