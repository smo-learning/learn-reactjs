import React from 'react';

import classes from './Layout.module.css';

const layout = (props) => {
    return (
        <div className={classes.Layout}>
            <div>
                <h1>Todo App</h1>
            </div>
            <div>{props.children}</div>
        </div>
    );
};

export default layout;