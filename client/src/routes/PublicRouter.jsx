import React from 'react'
import { Navigate } from 'react-router-dom'

export const PublicRouter = ({ children }) => {

  const logged = JSON.parse(localStorage.getItem('logged')) ?? false
   
  return (
    (logged)
    ? <Navigate to='/home' />
    : children
  )
}
