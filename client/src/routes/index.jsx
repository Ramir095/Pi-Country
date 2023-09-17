import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, CreateActivity, CountryDetail } from '../Screens'

export const RoutesAll = () => {
  return (
    <>
      <Switch>
        <Route path='/home' component={ Home } />
        <Route path='/createActivity' component={ CreateActivity } />
        <Route path='/countryDetail/:id' render={ ({match}) => <CountryDetail  match={match} /> } />
      </Switch>
    </>
  )
};