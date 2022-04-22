import React from 'react';
import { useEffect, useState } from 'react';
import fakeData from '../../fakeData/MOCK_DATA(15).json';
import Cart from '../Cart/Cart';
import User from '../User/User';
import './UserProfile.css';

const UserProfile = () => {
    // console.log(fakeData);
    const [profiles, setProfiles] = useState([]);
    const [friend, setFriend] = useState([]);
    // console.log(profiles);

    useEffect(() => {
        setProfiles(fakeData);
        // console.log(fakeData);
    }, [])

    const handleAddUser = (profile) => {
        // console.log("added user profile", profile);
        const newFriend = [...friend, profile];
        setFriend(newFriend);
    }
    return (
        <div className='user-profile'>
            <div className='user-container'>
                {
                    profiles.map(profile => <User profile={profile} handleAddUser={handleAddUser} key={profile.id}></User>)
                }
            </div>

            <div className='cart-container'>
                <Cart friend={friend}></Cart>

            </div>
        </div>
    );
};

export default UserProfile;