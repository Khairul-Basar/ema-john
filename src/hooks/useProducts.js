import { useState } from "react"
import { useEffect } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return [products]
}

export default useProducts;