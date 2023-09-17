import React from "react";

export const Paginado = ({ countriesPerPage, countries, paginado }) => {
  const pageNumbers = [];
  //console.log("page", pageNumbers);
  // aca le quite el Math.slice
  for (let i = 0; i <= ((countries + 1) / countriesPerPage); i++) {
    //Math.ceil redondea hacia arriba el numero
    pageNumbers.push(i + 1);
  }
  return (
    <div>
      <div>
        {pageNumbers &&
          pageNumbers.map((number) => (
              <button 
                onClick={() => paginado(number)}
                key={number}
                > {number}
              </button>
          ))}
      </div>
    </div>
  );
};