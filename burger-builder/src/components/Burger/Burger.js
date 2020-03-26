import React from 'react'

import Ingredient from './Ingredient/Ingredient'
import classes from './Burger.module.css'


const Burger = (props) => {

    const ingredientsToShow = Object.keys(props.ingredients).map(ing => {
        const ingredientsForCurType = [...Array(props.ingredients[ing])].map((_, i) => {
            return <Ingredient key={ing + i} type={ing} />
        })
        return ingredientsForCurType;
    }).reduce((acc, val) => acc.concat(val), [])

    return (
        <div className={classes.Burger}>
            <Ingredient type="bread-top" />
            {ingredientsToShow}
            <Ingredient type="bread-bottom" />
        </div>
    )
}

export default Burger
