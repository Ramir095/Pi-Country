import React from 'react'
import { Nav } from '../components'
import styles from './BackgroundLayout.module.css'

export const BackgroundLayout = ({ children }) => {
  console.log("children", children.type);
  console.log("children", typeof children.type);
  return (
    <div className={ styles.background }>
      <div className={ styles.content }>
        <Nav view={ children.type  } />
        { children }
      </div>
    </div>
  )
}
