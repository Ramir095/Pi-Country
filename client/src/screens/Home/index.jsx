import React from "react";
import { Nav, Cards, Loading, Paginado } from '../../components'
import styles from './Home.module.css';
import { useCountries } from "../../hooks/useCountries";

export const Home = () => {
  
  const { isLoading, handleClick, handleFilterByContinent, handleSort, handleSortByPopulation, currentCountries, countries, paginado } = useCountries()

  if (!isLoading) {
    return <Loading />;
  }
  return (
    <div className={styles.background}>
      <div className={styles.conteiner}>
        <Nav handleClick={handleClick}/>

        <div>
          <div className={styles.continentSelector} >
              <select onChange={handleFilterByContinent}>
                <option value="All">Order by continent</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="South America">South America</option>
                <option value="North America">North America</option>
                <option value="Oceania">Oceania</option>
              </select>
              <select name="" id="">
                <option value="All">Order by activity</option>
              </select>
              <select onChange={e => handleSort(e)}>
                <option value="All">Order by alphabetically</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
              </select>
              <select onChange={e => handleSortByPopulation(e)}>
                <option value="All">Order by population</option>
                <option value="Asc">Ascendent</option>
                <option value="Desc">Descendent</option>
              </select>
          </div>

          <div className={styles.conteiner}>
            <Cards currentCountries={currentCountries} />
          </div>
          <div className={styles.paginado}>
            <Paginado
              countriesPerPage={10}
              countries={countries.length}
              paginado={paginado}
            />
          </div>
        </div>
      </div>
    </div>
  );
};