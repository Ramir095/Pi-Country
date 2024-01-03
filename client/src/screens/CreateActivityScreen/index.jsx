/* eslint-disable no-mixed-operators */
import React, { useState } from 'react';
import { createActivity } from '../../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { BackgroundLayout } from '../../layout';
import { useForm } from '../../hooks/useForm';
import styles from './CreateActivityScreen.module.css'
import { useNavigate } from 'react-router-dom';

export const CreateActivityScreen = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const countries = useSelector((state) => state.countries);
  const navigate = useNavigate();
  const { formState, handleChange, handleSelect, onResetForm, validations } = useForm({
    name: "",
    difficulty: "",
    duration: "",
    season: "summer",
    country: ["French Southern and Antarctic Lands"],
  });
  const handleNextStep = () => {
    setStep(valuePrev => valuePrev + 1)
  }

  const handlePreviusStep = () => {
    setStep(valuePrev => valuePrev - 1)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createActivity(formState));
    alert("Creado con exito");
    onResetForm();
    navigate('/home');
  };

  return (
    <BackgroundLayout>
      <form className={styles.formContainer} onSubmit={(e) => handleSubmit(e)}>
        <h1>Complete the form</h1>
        <div className={styles.form}>
          {
            step === 1 &&
            <div className={ styles.label } >
              <label htmlFor="name">Name: </label>
              <input
                id="name"
                name="name"
                value={formState.name}
                autoComplete='off'
                type="text"
                placeholder="Mountain Bike"
                onChange={handleChange}
                className={ styles.input }
              />
              <p className={styles.errorMessage}>{validations.name && validations.name}</p>
              {
                !formState.name || !validations.name &&
                <button
                  onClick={handleNextStep}
                  className={styles.buttonStep}
                >
                  Next
                </button>
              }
            </div>
          }
          {
            step === 2 && 
            <div className={ styles.label }>
              <label htmlFor="difficulty">Difficulty: </label>
              <input
                id="difficulty"
                type="text"
                value={formState.difficulty}
                autoComplete='off'
                name="difficulty"
                placeholder="level"
                onChange={handleChange}
                className={ styles.input }

              />
              <p className={styles.errorMessage}>{validations.difficulty && validations.difficulty}</p>
              <section className={styles.sectionButtons}>
                <button
                  onClick={handlePreviusStep}
                  className={styles.buttonStep}
                >
                  Back
                </button>
                {
                  !formState.difficulty || !validations.difficulty &&
                  <button
                    onClick={handleNextStep}
                    className={styles.buttonStep}
                  >
                    Next
                  </button>
                }
              </section>
            </div>
          }
          {
            step === 3 &&
            <div className={ styles.label }>
              <label htmlFor="duration">Duration: </label>
              <input
                id="duration"
                type="text"
                value={formState.duration}
                autoComplete='off'
                name="duration"
                placeholder="hours"
                step="any"
                onChange={handleChange}
                className={ styles.input }
              />
              <p className={styles.errorMessage}>{validations.duration && validations.duration}</p>
              <section className={styles.sectionButtons}>
                <button
                  onClick={handlePreviusStep}
                  className={styles.buttonStep}
                >
                  Back
                </button>
                {
                  !formState.duration || !validations.duration &&
                  <button
                    onClick={handleNextStep}
                    className={styles.buttonStep}
                  >
                    Next
                  </button>
                }
              </section>
            </div>
          }
          {
            step === 4 &&
            <>
              <section className={ styles.selectContainer }>
                <div>
                  <label htmlFor="season">Season: </label>
                  <select
                    name="season"
                    id="season"
                    value={formState.season}
                    onChange={handleChange}
                    className={ styles.select }
                  >
                    <option value="summer">Summer</option>
                    <option value="autumn">Autumn</option>
                    <option value="winter">Winter</option>
                    <option value="spring">Spring</option>
                  </select>
                </div>
                <p className={styles.errorMessage}>{validations.country && validations.country}</p>
                <div className={ styles.addActivity }>
                  <div>
                    <label htmlFor='country'>Add activity to:</label>
                    <select className={ styles.select } name='country' onChange={handleSelect}>
                      {countries.map((c) => (
                        <option key={c.id} value={c.name}>{c.name}</option>
                      ))}
                    </select>
                  </div>
                  <ul><li style={{ color: '#66D8F2' }}>{ formState.country.map(el => el + ', ') }</li></ul>
                </div>
              </section>
              

              <section className={styles.sectionButtons}>
                <button
                  onClick={handlePreviusStep}
                  className={styles.buttonStep}
                >
                  Back
                </button>
                <button 
                  className={ styles.buttonCreate }
                  type="submit">Create Activity
                </button>
              </section>
            </>
          }
        </div>
      </form>
    </BackgroundLayout>
  );
};

