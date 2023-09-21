import React from 'react'
import { Nav } from '../components'
import styles from './BackgroundLayout.module.css'

export const BackgroundLayout = ({ children }) => {
  return (
    <div className={ styles.background }>
      <div className={ styles.content }>
        <Nav />
        { children }
      </div>
    </div>
  )
}
