import React from 'react'

const OrderDetails = (props) => {

    const data = Object.keys(props.ingredients).map(ing => {
        return <div key={ing}>{ing}: {props.ingredients[ing]}</div>
    })

    return data;
}

export default OrderDetails
