import React from 'react'

import BurgerControl from './BurgerControl/BurgerControl'
import classes from './BurgerControls.module.css'
const BurgerControls = (props) => {

    const controls = Object.keys(props.ingredients).map(ing => {
        return <BurgerControl
            key={ing}
            type={ing}
            count={props.ingredients[ing]}
            disabled={props.ingredients[ing] <= 0}
            added={() => props.addIngredient(ing)}
            removed={() => props.removeIngredient(ing)} />
    })

    return (
        <div className={classes.BurgerControls}>
            {controls}
            <button
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}>ORDER</button>
        </div>
    )
}

export default BurgerControls
