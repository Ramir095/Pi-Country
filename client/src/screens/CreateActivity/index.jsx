import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAllActivities, createActivity } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { BackgroundLayout } from "../../layout";

export const CreateActivity = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const history = useHistory();
  // const activities = useSelector(state => state.activities);
  // console.log(activities);
  // ¿ Dónde voy a guardar los datos que me mande el usuario ?
  const [input, setInput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: [],
  });
  // Quiero guardar lo que el usuario escribe en mi estado input
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      country: [...input.country, e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(createActivity(input));
    alert("Creado con exito");
    setInput({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      country: [],
    });
    history.push("/home");
  };

  // useEffect(() => {
  //   dispatch(getAllActivities());
  // }, [dispatch]);

  return (
    <BackgroundLayout>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            name="name"
            value={input.name}
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
            value={input.difficulty}
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
            value={input.duration}
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
            value={input.season}
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
        <ul><li>{input.country.map(el => el + ' ,')}</li></ul>
        <button type="submit">Create Activity</button>
      </form>
    </BackgroundLayout>
  );
};