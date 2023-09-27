import React from 'react';
import { createActivity } from '../../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { BackgroundLayout } from '../../layout';
import { useForm } from '../../hooks/useForm';
import styles from './CreateCountry.module.css'
import { useNavigate } from 'react-router-dom';

export const CreateActivity = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const navigate = useNavigate();
  const { formState, handleChange, handleSelect, onResetForm } = useForm({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createActivity(formState));
    alert("Creado con exito");
    onResetForm();
    navigate('/home');
  };

  return (
    <BackgroundLayout>
      <div className={ styles.formContainer }>
        <form className={ `${styles.form} animate__animated animate__zoomIn` } onSubmit={(e) => handleSubmit(e)}>
          <h1>Complete the form</h1>
          <div className={ styles.label } >
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              name="name"
              value={formState.name}
              type="text"
              placeholder="Mountain Bike"
              onChange={handleChange}
              className={ styles.input }
            />
          </div>
          <div className={ styles.label }>
            <label htmlFor="difficulty">Difficulty: </label>
            <input
              id="difficulty"
              type="number"
              value={formState.difficulty}
              name="difficulty"
              placeholder="level"
              min="1"
              max="5"
              onChange={handleChange}
              className={ styles.input }

            />
          </div>
          <div className={ styles.label }>
            <label htmlFor="duration">Duration: </label>
            <input
              id="duration"
              type="number"
              value={formState.duration}
              name="duration"
              placeholder="hours"
              min="1"
              max="10"
              step="any"
              onChange={handleChange}
              className={ styles.input }
            />
          </div>
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
          <button className={ styles.buttonCreate } type="submit">Create Activity</button>
        </form>
      </div>
    </BackgroundLayout>
  );
};