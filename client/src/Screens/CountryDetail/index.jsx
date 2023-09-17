import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountryDetail } from "../../redux/actions";
import { Loading } from "../../components/Loading";
import { Nav } from "../../components/Nav";
import styles from "./CountryDetail.module.css";

export const CountryDetail = ({ match }) => {
  //console.log(match);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryDetail(match.params.id));
  }, [dispatch, match.params.id]);

  let country = useSelector((state) => state.countryDetail);
  console.log(country);
  let isLoading = useSelector((state) => state.loaded);
  //console.log(isLoading);

  if (!isLoading) {
    return <Loading />;
  }

  return (
    <div className={styles.generalContainer}>
      <div className={styles.nav}>
        <Nav />
      </div>

      <div className={styles.conteinter}>
        <div className={styles.card}>
          
          <div>
            <div className={styles.flag}>
              <img src={country.flag} alt={`Flag of ${country.name}`} />
            </div>
            <div className={styles.title}>
              <p>{country.name}</p>
            </div>
          </div>

          <div className={styles.data}>
            <p>Continent: {country.continent}</p>
            <p>Capital: {country.capital}</p>
            <p>
              Subregion:{" "}
              {country.subregion ? country.subregion : country.continent}
            </p>
            <p>Area: {country.area}</p>
            <p>Population: {country.population}</p>
          </div>
        </div>

        <br />

        <div className={styles.activities}>
          <p>Activities: </p>
          {country.Activities?.length > 0 ? (
            country.Activities?.map((a) => (
              <ul key={a.id}>
                <li>name: {a.name}</li>
                <li>difficulty: {a.difficulty}</li>
                <li>duration: {a.duration}</li>
                <li>season: {a.season}</li>
                <br />
              </ul>
            ))
          ) : (
            <h1>{"No tiene actividades"}</h1>
          )}
        </div>
      </div>
    </div>
  );
};
