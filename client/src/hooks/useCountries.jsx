import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, filterByContinent, orderByName, OrderByPopulation } from '../redux/actions/index';

export const useCountries = () => {

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

  return {
    isLoading,
    countries,
    paginado,
    currentCountries,
    handleClick,
    handleFilterByContinent,
    handleSort,
    handleSortByPopulation
  }
}
