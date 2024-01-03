import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountry, logout } from '../../redux/actions';
import styles from './SearchBar.module.css';
import search from '../../assets/search.svg';
import rama from '../../assets/rama-dev.png';
import userImage from '../../assets/user.svg';

export const SearchBar = () => {

  const dispatch = useDispatch();
  const [ country, setCountry ] = useState('');
  let user =  useSelector(state => state.user);

  if(!user.name) {
    user = JSON.parse(localStorage.getItem('user')) ?? {}
  }
  
  const handleSearch = (e) =>{
    e.preventDefault();
    dispatch(getCountry(country));
    setCountry('');
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className={ styles.searchConten }>

      {
        user.name
        ? (
            <div className={ `${ user.name ? styles.sectionLogin : styles.sectionLoginOut }` }>
              <img width={ 25 } src={ userImage } alt='imagen de usuario logiado' />
              <p style={{ textAlign: 'center' }}>{ user.name }</p>
            </div>
          )
        : <img width={ 41 } className={ styles.logo } src={ rama } alt='Logotipo del creador de la pagina: RamaDev' />
      }

      <form onSubmit={handleSearch} className={ styles.form }>
          <input
              type='text'
              placeholder='Search country...'
              value={ country }
              onChange={(e) => setCountry(e.target.value)}
              className={ styles.search }
          />
          <img src={ search } alt='search' className={ styles.magnifyingGlass } />
          <button className={ styles.button } type='submit'>Search</button>
      </form>

      <section className={ styles.sectionRight }>
        {
          user.name
          ? (
              <div className={ styles.buttonsContainer }>
                <Link
                  className={ styles.buttonSign }
                  to='/createActivity'
                >
                  Create Activity
                </Link>
                <button 
                  className={ styles.buttonOut }
                  onClick={ handleLogout }
                >
                  Sign out
                </button>
              </div>
            )
          : (<Link className={ styles.buttonSign } to='/sign-in'>
              Sign in
            </Link>)
        }
      </section>

    </div>
  )
};