import React, { useEffect, useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const EditProduct = () => {
    const [products, setProducts] = useState([])
        const deleteProduct = id =>{
            fetch(`https://murmuring-ridge-82088.herokuapp.com/deleteProduct:${id}`, {
                method: 'delete'
            })
            .then(res => res.json())
            .then(result =>{
                console.log("deleted")
            })
        }

    useEffect(() => {
        fetch('https://murmuring-ridge-82088.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [])

    return (
        <div>
            <div className="editProduct">
                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => 
                            <tr>
                            <td>{product.productName}</td>
                            <td>{product.productPrice}</td>
                            <td>{product.productWeight}</td>
                            <td onClick={()=>deleteProduct(product._id)} style={{cursor:"pointer"}}><DeleteIcon/></td>
                        </tr>
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EditProduct;