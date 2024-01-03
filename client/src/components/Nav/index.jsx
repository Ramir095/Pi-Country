import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

export const Nav = ({ view }) => {
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.home}>
          <Link className={ styles.buttonBack } to='/home'> Back </Link>
        </div>
        {
          view === "div" && (
            <div className={styles.home}>
              <Link className={ styles.buttonSign } to='/createActivity'> Create Activity </Link>
            </div>
          ) 
        }

      </div>
    </>
  );
};