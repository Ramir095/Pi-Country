import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css'

export const Card = ({id, name, flag, continent}) => {
  //console.log("Activities", activities);
  return (
    <div className={styles.container}>
      <Link to={`countryDetail/${id}`}>
          <img className={styles.infoContainer} src={flag} alt={`Flag of ${name}`} />
        <div className={styles.description}>
          <p>{name}</p>
          <p>Continent: {continent}</p>
        </div>  
      </Link>
    </div>
  )
};