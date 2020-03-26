import React, { Component } from 'react'

import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/BurgerControls/BurgerControls'

export default class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            cheese: 2,
            meat: 0,
            bacon: 0
        }
    }

    addIngredientHandler = (ingredient) => {
        const curIngredients = { ...this.state.ingredients };
        curIngredients[ingredient] = curIngredients[ingredient] + 1;
        this.setState({ ingredients: curIngredients });
    }

    removeIngredientHandler = (ingredient) => {
        const curIngredients = { ...this.state.ingredients };
        curIngredients[ingredient] = curIngredients[ingredient] - 1;
        this.setState({ ingredients: curIngredients });
    }

    render() {
        return (
            <div>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BurgerControls
                    ingredients={this.state.ingredients}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}></BurgerControls>
            </div>
        )
    }
}
