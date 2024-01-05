import React from "react";
import styles from './Paginado.module.css';
import arrowLeft from '../../assets/arrow-fat-left.svg';
import arrowRight from '../../assets/arrow-fat-right.svg';

export const Paginado = ({ countriesPerPage, countries, paginado, prevPage, nextPage }) => {
  const pageNumbers = [];
  for (let i = 0; i <= ((countries + 1) / countriesPerPage); i++) {
    pageNumbers.push(i + 1);
  }
  return (
    <div className={ styles.container }>
      <button
        onClick={prevPage}
        className={ styles.buttons }
      >
        <img width={30} src={ arrowLeft } alt='flecha para volver a la pagina anterior' />
      </button>
      <div>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <button 
              onClick={() => paginado(number)}
              key={number}
              className={ styles.numbers }
              > {number}
            </button>
          ))}
      </div>
      <button
        onClick={nextPage}
        className={ styles.buttons }
      >
        <img width={30} src={ arrowRight } alt='flecha para volver a la pagina siguiente' />
      </button>
    </div>
  );
};