import React from "react";
import styles from './Paginado.module.css';
import arrowLeft from '../../assets/arrow-fat-left.svg';
import arrowRight from '../../assets/arrow-fat-right.svg';

export const Paginado = ({ countriesPerPage, countries, paginado }) => {
  const pageNumbers = [];
  // aca le quite el Math.slice
  for (let i = 0; i <= ((countries + 1) / countriesPerPage); i++) {
    //Math.ceil redondea hacia arriba el numero
    pageNumbers.push(i + 1);
  }
  return (
    <div className={ styles.container }>
      <button className={ styles.buttons }>
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
      <button className={ styles.buttons }>
        <img width={30} src={ arrowRight } alt='flecha para volver a la pagina siguiente' />
      </button>
    </div>
  );
};