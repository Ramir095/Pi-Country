import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountryDetail } from "../../redux/actions";
import { Loading } from "../../components/Loading";
import styles from "./CountryDetail.module.css";
import { BackgroundLayout } from "../../layout";

export const CountryDetail = ({ match }) => {
  //console.log(match);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryDetail(match.params.id));
  }, [dispatch, match.params.id]);

  let country = useSelector((state) => state.countryDetail);
  // console.log('aca informacion de country', country);
  let isLoading = useSelector((state) => state.loaded);

  return (
    
    <BackgroundLayout>
      <div className={ styles.conteinter } >
          {
            isLoading
            ? (<>
                  <div>
                    <div>
                      <img src={country.flag} alt={`Flag of ${country.name}`} />
                    </div>
                  </div>

                  <div className={styles.data}>
                    <div className={styles.title}>
                      <p>Name:</p>
                      <p>{ country.name }</p>
                    </div>
                    <p className={styles.title}>Continent: {country.continent}</p>
                    <p className={styles.title}>Capital: {country.capital}</p>
                    <p className={styles.title}>
                      Subregion:{" "}
                      {country.subregion ? country.subregion : country.continent}
                    </p>
                    <p className={styles.title}> Area: {country.area}</p>
                    <p className={styles.title}>Population: {country.population}</p>
                  </div>
              </>)
            : <Loading />
          }

        {/* <br /> */}

        {/* <div>
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
        </div> */}
      </div>
    </BackgroundLayout>
  );
};
