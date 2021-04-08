import React, { useState } from 'react';
import './Admin.css';
import AddBoxIcon from '@material-ui/icons/AddBox';
import EditIcon from '@material-ui/icons/Edit';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddProduct from '../AddProduct/AddProduct';
import EditProduct from '../EditProduct/EditProduct';

const Admin = () => {
    const [addEdit, setAddEdit] = useState(true)
    return (
        <div className="wraper">
            <div className="sidebar">
                <ul>
                    <h2>Daily Mart</h2>
                    <li><DashboardIcon /> Manage Product</li>
                    <li onClick={()=>setAddEdit(true)}><AddBoxIcon/> Add Product</li>
                    <li onClick={()=>setAddEdit(false)}><EditIcon /> Edit Product</li>
                </ul>
            </div>
            <div className="adminContent">
            {
                addEdit ? <AddProduct></AddProduct> : <EditProduct></EditProduct>
            }
            </div>
        </div>
    );
};

export default Admin;