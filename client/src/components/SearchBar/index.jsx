import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountry } from '../../redux/actions';
import search from '../../assets/search.svg'
import styles from './SearchBar.module.css'

export const SearchBar = () => {

  const dispatch = useDispatch()
  const [ country, setCountry ] = useState("");

  const handleSearch = (e) =>{
    e.preventDefault();
    dispatch(getCountry(country))
  };

  return (
    <form onSubmit={handleSearch} className={ styles.form }>
        {/* <div className={ styles.container }> */}
          <input
              type="text"
              placeholder='Search country...'
              onChange={(e) => setCountry(e.target.value)}
              className={ styles.search }
          />
          <img src={ search } alt='search' className={ styles.magnifyingGlass } />
        {/* </div> */}
         <button className={ styles.button } type='submit'>Search</button>
    </form>
  )
};