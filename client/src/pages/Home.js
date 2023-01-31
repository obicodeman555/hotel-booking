
import React from 'react';
import { useSelector } from "react-redux"

const Home = () => {

    const { user } = useSelector((state) => ({ ...state }));
    return (
        <div>
            {JSON.stringify(user)}
        </div>
    )
}

export default Home