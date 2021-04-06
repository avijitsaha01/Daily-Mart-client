import React from 'react';
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
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Orders</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Admin</a>
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