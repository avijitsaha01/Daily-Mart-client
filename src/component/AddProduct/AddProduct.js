import { TextField } from '@material-ui/core';
import React from 'react';

const AddProduct = () => {
    return (
        <div>
            <form>
                <div class="form-group row">
                    <label for="productname" class="col-md-4 col-form-label">Product Name</label>
                    <div class="col-md-8">
                        <input type="text" name="productName" class="form-control" id="productname" required/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="addPrice" class="col-md-4 col-form-label">Product Price</label>
                    <div class="col-md-8">
                        <input type="text" name="productPrice" class="form-control" id="addPrice" required/>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="addWeight" class="col-md-4 col-form-label">Product Weight</label>
                    <div class="col-md-8">
                        <input type="text" name="productWeight" class="form-control" id="addWeight" required/>
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-md-12">
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </div>
                </div>
            </form>


            
        </div>
    );
};

export default AddProduct;