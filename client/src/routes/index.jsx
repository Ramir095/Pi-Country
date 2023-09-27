import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, CreateActivity, CountryDetail, LoginScreen} from '../screens'

export const RoutesAll = () => {
  return (
    <>
      <Routes>
        <Route path='/home' element={ <Home /> } />
        <Route path='/createActivity' element={ <CreateActivity /> } />
        <Route path='/countryDetail/:id' element={ <CountryDetail/> } />
        <Route path='/sign-in' element={ <LoginScreen /> } />
      </Routes>
    </>
  )
};