import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://murmuring-ridge-82088.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="card-deck">
                    {
                        products.map(product => <Product product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;