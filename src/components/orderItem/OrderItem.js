import React from 'react';

const OrderItem = (props) => {
    const {name,price,stock,quantity,key} = props.product
    
    return (
        <div className="product">
            <div className="product-img">
                
            </div>
            <div className="product-info">
                <h3>{name}</h3>
                <p>Quantity: {quantity}</p>
                <p>Price: ${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={()=>props.handleRemove(key)}>Remove</button>
            </div>
        </div>
    );
};

export default OrderItem;