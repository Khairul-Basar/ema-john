import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {

    // console.log(props)
    const {name, price,img, seller,stock,star} = props.product
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart}/>
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h3>{name}</h3>
                <p><small>by: {seller}</small></p>
                <p>Price: ${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <p>
                    
                    <Rating
                    initialRating={star}
                    emptySymbol="far fa-star rating-icon"
                    fullSymbol="fas fa-star rating-icon" 
                    readonly
                     ></Rating>
                </p>
                <button onClick={()=>props.handleAddToCartBtn(props.product)}>{cartIcon} Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;