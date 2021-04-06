import React from 'react';
import './Search.css'
const Search = () => {
    return (
        <div className="container">
            <div className="mx-auto search-area">
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control search-field mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </div>
    );
};

export default Search;