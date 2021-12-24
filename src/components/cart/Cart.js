import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    // console.log(cart)

    let total = 0
    let totalQuantity = 0
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1
        }
        totalQuantity = totalQuantity + product.quantity 
        total = total + product.price * product.quantity
    }

    const shipping = total >0 ? 15 : 0
    const tax = (total + 0)*10/100
    // console.log(tax)
    const totalPrice = total + shipping + tax

    return (
        <div>
            <h3>Product Count: {totalQuantity}</h3>
            <p>Total-Products-Cost: {total.toFixed(2)}</p>
            <p>Delivary Cost: {shipping}</p>
            <p>Total-tax: {tax.toFixed(2)}</p>
            <p>Total-Cost: {totalPrice.toFixed(2)}</p>
            {props.children}
        </div>
    );
};

export default Cart;