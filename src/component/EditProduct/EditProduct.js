import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const EditProduct = () => {
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
                        <tr>
                            <td>A</td>
                            <td>V</td>
                            <td>D</td>
                            <td style={{cursor:"pointer"}}><DeleteIcon/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EditProduct;