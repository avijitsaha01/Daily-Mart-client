import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
                <a className="navbar-brand" href="/">Daily <span className="nav-style">Mart</span></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link to="/"><a className="nav-link" href="/">Home</a></Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/orders"><a className="nav-link" href="/">Orders</a></Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/admin"> <a className="nav-link" href="/">Admin</a></Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Deals</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;