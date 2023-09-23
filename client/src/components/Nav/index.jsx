import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

export const Nav = ({ handleClick }) => {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.home}>
          <Link className={ styles.buttonSign } to='/home'> Home </Link>
        </div>
        <div className={styles.home}>
          <Link className={ styles.buttonSign } to='/createActivity'> Create Activity </Link>
          {/* <button onClick={e => handleClick(e)}>Reload</button> */}
        </div>
      </div>
    </>
  );
};