import React from 'react'

import classes from './BurgerControl.module.css'

const BurgerControl = (props) => {
    return (
        <div className={classes.BurgerControl}>
            <div className={classes.Label}>{props.type}</div>
            <button
                className={classes.Less}
                onClick={props.removed}
                disabled={props.disabled}>-</button>
            <button
                className={classes.More}
                onClick={props.added}>+</button>
                <div className={classes.Label}>{props.count}</div>
        </div>
    )
}

export default BurgerControl
