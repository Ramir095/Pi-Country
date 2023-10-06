import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {

  const logged = JSON.parse(localStorage.getItem('logged')) ?? false

  return (
    (logged)
    ? children
    : <Navigate to='/sign-in' />
  )
}
