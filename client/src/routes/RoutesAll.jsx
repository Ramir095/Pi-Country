import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PrivateRoute, PublicRouter } from './';
import { CountryDetail, CreateActivity, Home, LoginScreen } from '../screens';

export const RoutesAll = () => {
  
  return (
    <>
      <Routes>
        <Route path='/home' element={ <Home /> } />
        <Route path='/countryDetail/:id' element={ <CountryDetail/> } />
        <Route path='/sign-in' element={
          <PublicRouter>
            <LoginScreen />
          </PublicRouter>
        }/>
        <Route path='/createActivity' element={
          <PrivateRoute>
            <CreateActivity />
          </PrivateRoute>
        } />
      </Routes>
    </>
  )
};