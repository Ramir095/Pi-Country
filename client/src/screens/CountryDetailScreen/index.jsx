import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountryDetail } from "../../redux/actions";
import { Loading } from "../../components/Loading";
import styles from "./CountryDetailScreen.module.css";
import { BackgroundLayout } from "../../layout";
import { useParams } from "react-router-dom";

export const CountryDetailScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getCountryDetail(id));
  }, [dispatch, id]);

  let country = useSelector((state) => state.countryDetail);
  let isLoading = useSelector((state) => state.loaded);

  return (
    
    <BackgroundLayout>
      <div className={ `${styles.conteinter} animate__animated animate__zoomIn` } >
          {
            isLoading
            ? (<>
                  <div className={styles.flag}>
                    <img src={country.flag} alt={`Flag of ${country.name}`} />
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
                              <li className={styles.dateItemLi}>name: <p style={{color: "white"}}>{a.name}</p></li>
                              <li className={styles.dateItemLi}>difficulty: <p style={{color: "white"}}>{`level ${a.difficulty}`}</p></li>
                              <li className={styles.dateItemLi}>duration: <p style={{color: "white"}}>{`${a.duration} hours`}</p></li>
                              <li className={styles.dateItemLi}>season: <p style={{color: "white"}}>{a.season}</p></li>
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
