import React from 'react';
import './UserInput.css';

const render = ({ change, name }) => {
    return (
        <div className="UserInput">
            <input type="text" onChange={change} value={name} />
        </div>
    )
};

export default render;