import React from 'react';
import { useHistory } from 'react-router-dom';
import { getAllActivities, createActivity } from '../../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import { BackgroundLayout } from '../../layout';
import { useForm } from '../../hooks/useForm';
import styles from './CreateCountry.module.css'

export const CreateActivity = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const history = useHistory();
  const { formState, setFormState, handleChange, onResetForm } = useForm({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: [],
  });

  const handleSelect = (e) => {
    setFormState({
      ...formState,
      country: [...formState.country, e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createActivity(formState));
    alert("Creado con exito");
    onResetForm();
    history.push("/home");
  };

  return (
    <BackgroundLayout>
        <form className={ styles.formContainer } onSubmit={(e) => handleSubmit(e)}>
          <div >
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              name="name"
              value={formState.name}
              type="text"
              placeholder="Mountain Bike"
              onChange={handleChange}
            />
          </div>
          <div>
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
            />
          </div>
          <div>
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
            />
          </div>
          <div>
            <label htmlFor="season">Season: </label>
            <select
              name="season"
              id="season"
              value={formState.season}
              onChange={handleChange}
            >
              <option value="summer">Summer</option>
              <option value="autumn">Autumn</option>
              <option value="winter">Winter</option>
              <option value="spring">Spring</option>
            </select>
          </div>

          <div>
            <select onChange={handleSelect}>
              {countries.map((c) => (
                <option key={c.id} value={c.name}>{c.name}</option>
              ))}
            </select>
          </div>
          <ul><li>{formState.country.map(el => el + ' ,')}</li></ul>
          <button type="submit">Create Activity</button>
        </form>
    </BackgroundLayout>
  );
};