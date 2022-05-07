
import React from 'react';
import error from '../../image/error.webp'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='error'>
            <h2>This Page is not working</h2>
            <img src={error} alt="" />
        </div>
    );
};

export default NotFound;
