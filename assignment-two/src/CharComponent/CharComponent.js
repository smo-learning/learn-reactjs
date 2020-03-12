import React from 'react';
import './CharComponent.css';


const charComponent = ({ char, clickListener }) => {
    return (
        <div onClick={clickListener} className="CharComponent">{char}</div>
    );
}

export default charComponent;