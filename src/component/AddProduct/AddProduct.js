import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState(null)

    const onSubmit = data => {
        const productData = {
            productName: data.productName,
            productPrice: data.productPrice,
            productWeight: data.productWeight,
            productImage: imageUrl
        };

        const url = `http://localhost:5055/addProduct`;

        console.log(productData)
        fetch(url, {
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(productData)
        })
    };

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'b969458f9d9b3b1c54b078766e1b886d');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-group row">
                    <label for="productname" class="col-md-4 col-form-label">Product Name</label>
                    <div class="col-md-8">
                        <input {...register("productName")} type="text" name="productName" class="form-control" id="productname" required/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="addPrice" class="col-md-4 col-form-label">Product Price</label>
                    <div class="col-md-8">
                        <input {...register("productPrice")} type="text" name="productPrice" class="form-control" id="addPrice" required/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="addWeight" class="col-md-4 col-form-label">Product Weight</label>
                    <div class="col-md-8">
                        <input {...register("productWeight")} type="text" name="productWeight" class="form-control" id="addWeight" required/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="addWeight" class="col-md-4 col-form-label">Upload Image</label>
                    <div class="col-md-8">
                        <input onChange={handleImageUpload} type="file" name="productImage" id="addImage" required/>
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-md-12">
                    <input type="submit" value="Add Product"/>
                    </div>
                </div>
            </form>   
        </div>
    );
};

export default AddProduct;