import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [filterProducts,setFilterProducts]= useState([])

    const handleAddToCartBtn = (product) =>{
        const exists = cart.find(pd => pd.key === product.key)
        let newCart = []
        if(exists){
            const rest = cart.filter(pd => pd.key !== product.key)
            exists.quantity = exists.quantity +1
            newCart = [...rest,product]
        }else{
            product.quantity = 1
            newCart = [...cart,product]
        }
        
        setCart(newCart)
        addToDb(product.key)
    }

    useEffect(()=> {
        // console.log('Data loading')
        fetch(`./products.json`)
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setFilterProducts(data)
            // console.log("data loaded")
        })
    },[])

    useEffect(()=>{
        // console.log('local storage cart')
        
        if(products.length){

            const saveCart = getStoredCart()
            const storedCard = []
            
            for(const key in saveCart){
                const seletedProduct = products.find(product => product.key === key)
                if(seletedProduct){
                    const quantity = saveCart[key]
                    seletedProduct.quantity = quantity
                    // console.log(seletedProduct)
                    storedCard.push(seletedProduct)
                }
            }
            setCart(storedCard)
        }
        
        
    },[products])

    const searchHandler = (event) => {
        const searchText = event.target.value
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilterProducts(matchedProduct)
    }

    return (
        <>
            <div className="search-container">
                <input 
                type="text"
                onChange={searchHandler}
                placeholder="Search Products"
                 />
            </div>
            <div className="shop-container">
                <div className="product-container">
                {
                    filterProducts.map(product => {
                        return <Product key={product.key} product={product} handleAddToCartBtn={handleAddToCartBtn}></Product>
                    })
                }
                </div>
                <div className="order-container">
                    <Cart cart={cart}>
                        <div className="product-info">
                            <Link to="/order">
                                <button>Review Your Order</button>
                            </Link>
                        </div>
                    </Cart>
                </div>
            </div>
        </>
        
    );
};

export default Shop;