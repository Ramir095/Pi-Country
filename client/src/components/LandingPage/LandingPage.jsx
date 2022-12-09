import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css' ;

function LandingPage() {
  return (
    <div className={styles.app}>
      <div className={styles.background}>
        <div className={styles.text}>
            <h1>Welcome to 
              <p>CONTRY APP</p>
            </h1>
            <p>Join me to get to know the countries</p>
            <Link className={styles.link} to='/home' >Start</Link>
        </div>
      </div>
    </div>
  )
}

export default LandingPage