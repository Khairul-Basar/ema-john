import React from 'react';
import { useHistory } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import OrderItem from '../orderItem/OrderItem';

const OrderReview = () => {
    const [products] = useProducts()
    const [cart,setCart] = useCart(products)
    const history = useHistory()

    const handleRemove = key =>{
        const newCart = cart.filter(product=> product.key !== key)
        setCart(newCart)
        deleteFromDb(key)
    }

    const handlePlaceOrder = () => {
        history.push('/shipping')
        // clearTheCart()
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product =>{
                        return <OrderItem key={product.key} product={product} handleRemove={handleRemove}></OrderItem>
                    })
                }
            </div>
            <div className="order-container">
                <Cart cart={cart}>
                    <div className="product-info">
                        <button onClick={handlePlaceOrder}> Order to Procced</button>
                    </div>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;