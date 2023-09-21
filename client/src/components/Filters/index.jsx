import React from 'react';
import styles from './Filters.module.css'

export const Filters = ({ handleFilterByContinent, handleSort, handleSortByPopulation }) => {
  return (
    <div className={ styles.continentSelector } >
      <select className={ styles.options } onChange={handleFilterByContinent}>
        <option value="All">Order by continent</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="South America">South America</option>
        <option value="North America">North America</option>
        <option value="Oceania">Oceania</option>
      </select>
      <select className={ styles.options }>
        <option value="All">Order by activity</option>
      </select>
      <select className={ styles.options } onChange={e => handleSort(e)}>
        <option value="All">Order by alphabetically</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
      <select className={ styles.options } onChange={e => handleSortByPopulation(e)}>
        <option value="All">Order by population</option>
        <option value="Asc">Ascendent</option>
        <option value="Desc">Descendent</option>
      </select>
  </div>
  )
}
