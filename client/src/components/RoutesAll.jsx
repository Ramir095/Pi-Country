import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home/Home'
import CreateCountry from './CreateCountry/CreateCountry'
import CountryDetail from './CountryDetail/CountryDetail'

function RoutesAll() {
  return (
    <>
      <Switch>
        <Route path='/home' component={ Home } />
        <Route path='/createCountry' component={ CreateCountry } />
        <Route path='/countryDetail/:id' render={ ({match}) => <CountryDetail  match={match} /> } />
      </Switch>
    </>
  )
}

export default RoutesAll