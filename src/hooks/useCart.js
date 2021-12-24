import { useState } from "react"
import { useEffect } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCart = (products) => {

    const [cart, setCart] = useState([])

    useEffect(()=>{
        if(products.length){
            const savedCart = getStoredCart()
            const storedCart = []
            for(const key in savedCart){
                const selectedProduct = products.find(product => product.key === key)
                if(selectedProduct){
                    const quantity = savedCart[key]
                    selectedProduct.quantity = quantity
                    storedCart.push(selectedProduct)
                }
            }
            setCart(storedCart)
        }

    },[products])
    return [cart,setCart]
}

export default useCart