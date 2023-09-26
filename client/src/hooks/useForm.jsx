import { useState } from 'react';

export const useForm = (initialState = {}) => {
  
  const [formState, setFormState] = useState(initialState);

  const handleChange = ({ target }) => {
    const { name, value } = target;
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
      country: [...formState.country, e.target.value],
    });
  };

  return {
    ...formState, //  =>  se puede mandar todas las props directamente haciendo esto
    formState,
    handleChange,
    setFormState,
    onResetForm,
    handleSelect
  }
}