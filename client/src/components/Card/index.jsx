import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css'

export const Card = ({id, name, flag, continent}) => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <p>{ name }</p>
        <p>{ continent }</p>
      </div>
      <div className={styles.infoContainer}>
        <img className={styles.img} src={ flag } alt={`Flag of ${ name }`} />
      </div>
      <Link className={styles.button} to={`countryDetail/${ id }`}>More</Link>
    </div>
  )
};