import React from 'react';
import './searchfield.style.css';
const SearchField=({onInputChange})=>{
    return(
        <input className="searchField" placeholder="Search Monsters" type="search" onChange={onInputChange}/>
    )
};
export default SearchField;