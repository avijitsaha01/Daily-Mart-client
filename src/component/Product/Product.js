import React from 'react';
import chipImage from '../../images/chip.png'
import './Product.css';
const Product = () => {
    return (
        <div className="col-md-4 mb-5">
            <div className="card">
                <img src={chipImage} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                    <p>Price: 135</p>
                    <button className="buyNowBtn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;