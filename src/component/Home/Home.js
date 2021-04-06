import React from 'react';
import Product from '../Product/Product';
const Home = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="card-deck">
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                </div>
            </div>
        </div>
    );
};

export default Home;