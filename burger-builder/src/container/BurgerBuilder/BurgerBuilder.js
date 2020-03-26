import React, { Component } from 'react'

import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/BurgerControls/BurgerControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderDetails from '../../components/OrderDetails/OrderDetails'
export default class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            cheese: 2,
            meat: 0,
            bacon: 0
        },
        showModal: false
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

    orderHandler = () => {
        this.setState({ showModal: true });
    }

    toggleModal = () => {
        const curShow = this.state.showModal;
        this.setState({ showModal: !curShow });
    }

    render() {
        return (
            <div>
                <Modal show={this.state.showModal} modalClosed={this.toggleModal}>
                    <OrderDetails ingredients={this.state.ingredients}></OrderDetails>
                </Modal>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BurgerControls
                    ingredients={this.state.ingredients}
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    purchasable={true}
                    ordered={this.orderHandler}></BurgerControls>
            </div>
        )
    }
}
