import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PrivateRoute, PublicRouter } from './';
import { CountryDetailScreen, CreateActivityScreen, Home, LoginScreen } from '../screens';

export const RoutesAll = () => {
  
  return (
    <>
      <Routes>
        <Route path='/home' element={ <Home /> } />
        <Route path='/countryDetail/:id' element={ <CountryDetailScreen /> } />
        <Route path='/sign-in' element={
          <PublicRouter>
            <LoginScreen />
          </PublicRouter>
        }/>
        <Route path='/createActivity' element={
          <PrivateRoute>
            <CreateActivityScreen />
          </PrivateRoute>
        } />
      </Routes>
    </>
  )
};