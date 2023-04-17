import React, { useContext } from 'react';
import { authContext } from '../providers/AuthProviders';




const Home = () => {
    const {user} =useContext(authContext)
    return (
        <div>
            <h4>Home {user && <span>{user.displayName}</span>}</h4>
        </div>
    );
};

export default Home;