import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountry } from '../../redux/actions';

export const SearchBar = () => {

  const dispatch = useDispatch()
  const [ country, setCountry ] = useState("");

  const handleSearch = (e) =>{
    e.preventDefault();
    dispatch(getCountry(country))
  };

  return (
    <form onSubmit={handleSearch}>
        <input
            type="text"
            placeholder='Search country...'
            onChange={(e) => setCountry(e.target.value)}
         />
         <button type='submit'>Search</button>
    </form>
  )
};