import React from "react";
import styles from './Paginado.module.css'

export const Paginado = ({ countriesPerPage, countries, paginado }) => {
  const pageNumbers = [];
  //console.log("page", pageNumbers);
  // aca le quite el Math.slice
  for (let i = 0; i <= ((countries + 1) / countriesPerPage); i++) {
    //Math.ceil redondea hacia arriba el numero
    pageNumbers.push(i + 1);
  }
  return (
    <div className={ styles.container }>
      <button className={ styles.buttons }>previous</button>
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
      <button className={ styles.buttons }>next</button>
    </div>
  );
};