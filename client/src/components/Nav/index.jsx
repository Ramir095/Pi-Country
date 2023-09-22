import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

export const Nav = ({ handleClick }) => {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.home}>
          <Link to='/home'> Home </Link>
        </div>
        <div className={styles.home}>
          <Link to='/createActivity'> Create Activity </Link>
          {/* <button onClick={e => handleClick(e)}>Reload</button> */}
        </div>
      </div>
    </>
  );
};