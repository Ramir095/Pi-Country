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
  console.log('aca informacion de country', country);
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

                  <section className={styles.data}>
                    <h1 className={ styles.itemOne}>{ country.name }</h1>
                    <p className={styles.title}>Name:
                      <span className={ styles.span }>{ country.name }</span>
                    </p>
                    <p className={styles.title}>Continent:
                      <span className={ styles.span }>{country.continent}</span>
                    </p>
                    <p className={styles.title}>Capital:
                      <span className={ styles.span }>{country.capital}</span>
                    </p>
                    <p className={styles.title}>
                      Subregion:
                      <span className={ styles.span }>{country.subregion ? country.subregion : country.continent}</span>
                    </p>
                    <p className={styles.title}> Area:
                      <span className={ styles.span }>{ country.area }</span></p>
                    <p className={styles.title}>Population:
                      <span className={ styles.span }>{country.population}</span>
                    </p>
                    <div className={ styles.itemLast }>
                        <p>Activities: </p>
                        {country.Activities?.length > 0 ? (
                          country.Activities?.map((a) => (
                            <ul className={ styles.itemLi } key={a.id}>
                              <li>name: {a.name}</li>
                              <li>difficulty: {a.difficulty}</li>
                              <li>duration: {a.duration}</li>
                              <li>season: {a.season}</li>
                            </ul>
                          ))
                        ) : (
                          <h1 style={{ paddingTop: '5px', color: 'white' }}>{"Does not have activities"}</h1>
                        )}
                    </div>
                  </section>
              </>)
            : <Loading />
          }
      </div>
    </BackgroundLayout>
  );
};
