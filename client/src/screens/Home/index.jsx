import React from "react";
import { Cards, Paginado, Filters, SearchBar } from '../../components'
import styles from './Home.module.css';
import { useCountries } from "../../hooks/useCountries";
import { CardSkeleton } from "../../components/CardSkeleton";

export const Home = () => {
  
  const { isLoading, handleFilterByContinent, handleSort, handleSortByPopulation, currentCountries, countries, paginado } = useCountries()
  return (
    <div className={styles.background}>
      <div className={styles.conteiner}>
        <SearchBar />

        <div>
          <Filters handleFilterByContinent={ handleFilterByContinent } handleSort={ handleSort } handleSortByPopulation={ handleSortByPopulation } />

          {
            isLoading
            ? (
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
            : <CardSkeleton />
          }
        </div>
      </div>
    </div>
  );
};