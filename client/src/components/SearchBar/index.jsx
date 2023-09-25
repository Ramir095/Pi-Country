import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountry } from '../../redux/actions';
import search from '../../assets/search.svg';
import styles from './SearchBar.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import rama from '../../assets/rama-dev.png';

export const SearchBar = () => {

  const dispatch = useDispatch()
  const [ country, setCountry ] = useState("");

  const handleSearch = (e) =>{
    e.preventDefault();
    dispatch(getCountry(country))
  };

  return (
    <div className={ styles.searchConten }>
      <img width={55} className={ styles.logo } src={ rama } alt='Logotipo del creador de la pagina: RamaDev' />
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
      <Link className={ styles.buttonSign } to='/sign-in'>Sign in</Link>
    </div>
  )
};