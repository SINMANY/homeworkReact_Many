import React, { useEffect, useState } from 'react'
import Cards from './Cards'

const Products = () => {
    const [products, setProducts] = useState([{}])

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
            })
        console.log(products);
    })
    return (
        <div className='d-flex flex-wrap container '>
            {
                products.map(p =>
                    <Cards product={p} />
                )
            }
        </div>
    )
}

export default Products