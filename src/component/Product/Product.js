import React from 'react';
import chipImage from '../../images/chip.png'
import './Product.css';
const Product = (props) => {
    const { productName, productPrice, productWeight, productImage } = props.product;
    return (
        <div className="col-md-4 mb-5">
            <div className="card">
                <img style={{height: '250px'}} src={productImage} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{productName}</h5>
                    <p className="card-text"> weight: {productWeight}</p>
                </div>
                <div className="card-footer">
                    <p>Price: {productPrice}</p>
                    <button className="buyNowBtn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;