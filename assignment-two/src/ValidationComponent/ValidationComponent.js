import React from 'react';

const validationComponent = ({ len }) => {
    return (
        <div>{len && len > 5 ? 'Genug' : 'Passt noch!'}</div>
    );
}

export default validationComponent;