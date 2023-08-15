import React from 'react';
import axios from 'axios';
import './searchBar.css';

function SearchBar({ setSearch, search }) {
  return (
    <div className='searchBar'>
      <input
        type='text'
        name='searchTerm'
        placeholder='Search'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      
        <i className='searchIcon fa-solid fa-magnifying-glass'></i>
      
    </div>
  );
}

export default SearchBar;

