import React, { Component } from 'react'

import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/BurgerControls/BurgerControls'

export default class BurgerBuilder extends Component {
    render() {
        return (
            <div>
                <Burger></Burger>
                <BurgerControls></BurgerControls>
            </div>
        )
    }
}
