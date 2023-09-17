import React from 'react'
import { Link } from 'react-router-dom'
import { SearchBar } from '../SearchBar'
import styles from './Nav.module.css'

export const Nav = ({handleClick}) => {
  // console.log(handleClick);
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.home}>
          <Link to='/Home'> Home </Link>
        </div>
        <div>
          <SearchBar className={styles.search} />
        </div>
        <div className={styles.home}>
          <Link to='/createActivity'> Create Activity </Link>
          <button onClick={e => handleClick(e)}>Reload</button>
        </div>
      </div>
    </>
    // <div className={styles.nav}>
    //   <div >
    //     <Link to='/Home'> Home </Link>
    //   </div>
    //   <div className={styles.search}>
    //     <SearchBar />
    //   <div /> 
    //   <div>
    //       <Link to='/createCountry'> Create Activity </Link>
    //       {/* //<Link > Sobre mí</Link> */}
    //   </div>
    // </div>
    // </div>
  )
}

export default Nav;