import React from 'react'
import { Card } from '../Card'
import styles from './Cards.module.css'

export const Cards = ({currentCountries}) => {
  return (
    <div className={`${ styles.conteiner } animate__animated animate__fadeIn`}>
      {
        currentCountries && currentCountries.map(c => ( 
          <Card
            key={c.id}
            id={c.id}
            name={c.name}
            flag={c.flag}
            continent={c.continent}
          />
        ))
      }
    </div>
  )
};