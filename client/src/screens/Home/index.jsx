import React from "react";
import { Cards, Loading, Paginado, Filters, SearchBar } from '../../components'
import styles from './Home.module.css';
import { useCountries } from "../../hooks/useCountries";

export const Home = () => {
  
  const { isLoading, handleFilterByContinent, handleSort, handleSortByPopulation, currentCountries, countries, paginado } = useCountries()

  return (
    <div className={styles.background}>
      <div className={styles.conteiner}>
        <SearchBar />

        <div>
          <Filters handleFilterByContinent={ handleFilterByContinent } handleSort={ handleSort } handleSortByPopulation={ handleSortByPopulation } />

          {
            !isLoading
            ? <Loading />
            : (
                <>
                  <div className={styles.conteinerCards}>
                    <Cards currentCountries={currentCountries} />
                  </div>
                  <div className={styles.paginado}>
                    <Paginado
                      countriesPerPage={10}
                      countries={countries.length}
                      paginado={paginado}
                    />
                  </div>
                </>
              )
          }
        </div>
      </div>
    </div>
  );
};