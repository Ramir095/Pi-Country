import React from 'react'
import Card from '../Card/Card'
import styles from './Cards.module.css'

function Cards({currentCountries}) {
  //console.log("current", currentCountries[0].Activities);
  return (
    <div className={styles.conteiner}>
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
}

export default Cards