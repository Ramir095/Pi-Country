import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LandingPage.module.css' ;

export const LandingPage = () => {
  return (
    <div className={styles.app}>
      <div className={styles.background}>
        <div className={styles.text}>
            <h1 style={{ fontSize: '3rem' }}>Welcome to CONTRY APP</h1>
            <p style={{ fontSize: '1.5rem' }}>Come with me to learn about the activities that each country offers us</p>
            <Link className={styles.link} to='/home' >Start</Link>
        </div>
      </div>
    </div>
  )
};