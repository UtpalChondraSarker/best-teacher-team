import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const { cart, } = props;
    let total = 0;
    for (const teacher of cart) {
        total = total + teacher.salary;

    }

    return (

        <div>

            <h4>Teacher Added:{props.cart.length}</h4>
            <h5>Total Cost:${total.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;