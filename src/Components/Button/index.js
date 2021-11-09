import React from 'react';
import './index.css';

const Button = ({ fetchMoreRobots, children }) => {
    return (
        <button
            onClick={() => fetchMoreRobots()}
            className='btn  bg-blue'
        >
            {children}
        </button>
    )
}


export default Button;