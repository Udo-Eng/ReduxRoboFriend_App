import React from 'react';


const Scroll = ({ children, className }) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default Scroll;