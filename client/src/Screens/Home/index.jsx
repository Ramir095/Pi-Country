import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, filterByContinent, orderByName, OrderByPopulation } from "../../redux/actions/index";
import { Nav, Cards, Loading, Paginado } from '../../components'
import styles from './Home.module.css';

export const Home = () => {
  const dispatch = useDispatch();
  let countries = useSelector((state) => state.countries);
  //let activities = useSelector((state) => state.activities)
  let isLoading = useSelector((state) => state.loaded);
  // Por que ejecuta el getallcontries por cada country
  // setea la primera pagina/ pagina actual
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ orden, setOrden ] = useState('');
  const [ ordenByPopulation, setOrdenByPopulation ] = useState('');

  // cuantos personajes tengo por pagina
  //const [countriesPerPage, setCountriesPerPage] = useState(9);
  //const indexOfLastCountries = currentPage * countriesPerPage; // indice del ultimo personaje en la pagina, osea 10
  //const indexOfFirstCharacter = indexOfLastCountries - countriesPerPage; // indice del primer personaje osea 0
  // const currentCountries = countries.slice(
  //   indexOfFirstCharacter,
  //   indexOfLastCountries
  // ); // personajes que voy a tener en cada pagina // slice corta el arreglo en los parametros indicados
  let currentCountries
  if(currentPage === 1) {
    currentCountries = countries.slice(0, 9)
  } else {                        //   9,      19       
    currentCountries = countries.slice(9 + (currentPage - 2) * 10, 19 + (currentPage - 2) * 10)
  }

  const paginado = (pageNumber) => { setCurrentPage(pageNumber) }; // esta funcion me ayudara a renderizar

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]); // el segundo parametro (osea el arreglo) es de lo que depende el "componentDidMount" osea el useEffect. Ejecutate siempre y cuando suceda el dispatch(getAllcountries())

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getAllCountries());
  };

  const handleFilterByContinent = (e) => {
    dispatch(filterByContinent(e.target.value))
  }

  const handleSort = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setCurrentPage(1);
    // setea ordenado
    setOrden(`Ordenando ${e.target.value}`)
  }

  const handleSortByPopulation = (e) => {
    e.preventDefault();
    dispatch(OrderByPopulation(e.target.value));
    setCurrentPage(1);
    setOrdenByPopulation(`Ordenando ${e.target.value}`)
  }

  if (!isLoading) {
    return <Loading />;
  }
  return (
    <div className={styles.background}>
      
      <div className={styles.header}>
        <Nav handleClick={handleClick}/>
      </div>

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
  );
};