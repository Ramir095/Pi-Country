import { useState } from 'react';

export const useForm = (initialState = {}) => {
  
  const [formState, setFormState] = useState(initialState);
  const [validations, setValidations] = useState({
    name: "",
    difficulty: "",
    duration: "",
    country: "",
  });

  const validateName = (value) => {
    const newValue = value.trim()
    if(!/^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(newValue)){
      return "Only name with more than 3 characters, no numbers and no special signs"
    }
  };

  const validateDifficulty = (value) => {
    const newValue = value.trim()
    if(!/^[1-5]$/.test(newValue)){
      return "Only number from 1 to 5"
    }
  };

  const validateDuration = (value) => {
    const newValue = value.trim()
    if(!/^(10|[1-9])$/.test(newValue)){
      return "Only number from 1 to 10"
    }
  };

  const validateCountry = (value) => {
    if(value.length <= 0){
      return "Add a country"
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    let isValid = "";
    if (name === 'name') {
      isValid = validateName(value);
    } else if (name === 'difficulty') {
      isValid = validateDifficulty(value);
    } else if (name === 'duration') {
      isValid = validateDuration(value);
    } else if (name === 'season') {
      isValid = validateCountry(value);
    }

    setValidations({
      ...validations,
      [name]: isValid
    });

    setFormState({
      ...formState,
      [ name ] : value
    })
  }

  const onResetForm = () => {
    setFormState(initialState)
  };

  const handleSelect = (e) => {
    setFormState({
      ...formState,
      // country: [...formState.country, e.target.value],
      country: [e.target.value],
    });
  };

  return {
    ...formState, //  =>  se puede mandar todas las props directamente haciendo esto
    formState,
    handleChange,
    setFormState,
    onResetForm,
    handleSelect,
    validations
  }
}