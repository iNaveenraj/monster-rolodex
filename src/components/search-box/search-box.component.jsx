import React from 'react';
import './search-box.component.css';

export const SearchBox = ({placeholder, handleChanges}) =>(
         <input type = "search" 
                className = "search"
                placeholder = {placeholder} 
                onChange = { handleChanges }/>
);