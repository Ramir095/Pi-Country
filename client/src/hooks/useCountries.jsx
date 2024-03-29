/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries, filterByContinent, orderByName, OrderByPopulation } from '../redux/actions/index';

export const useCountries = () => {

  const dispatch = useDispatch();
  let countries = useSelector((state) => state.countries);
  let isLoading = useSelector((state) => state.loaded);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ orden, setOrden ] = useState('');
  const [ ordenByPopulation, setOrdenByPopulation ] = useState('');

  let currentCountries
  if(currentPage === 1) {
    currentCountries = countries.slice(0, 9)
  } else {     
    currentCountries = countries.slice(9 + (currentPage - 2) * 10, 19 + (currentPage - 2) * 10)
  }

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber)
  };

  const nextPage = () => {
    if (currentPage >= 26) return;
    setCurrentPage(prev => prev + 1)
  }
  const prevPage = () => {
    if (currentPage <= 1) return;
    setCurrentPage(prev => prev - 1)
  }

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

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
    prevPage,
    nextPage,
    currentCountries,
    handleClick,
    handleFilterByContinent,
    handleSort,
    handleSortByPopulation
  }
}
