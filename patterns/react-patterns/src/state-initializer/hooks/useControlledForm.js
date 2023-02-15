import {useState} from 'react';

// igualmente de no mandar un valor inicial, se setea un objeto vacio
export const useControlledForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);

  const handleChange = ({target}) => {
    const {name, value} = target;
    setFormValues({...initialState, [name]: value});
  };

  const handleSubmit = cb => e => {
    e.preventDefault();
    cb(formValues);
  };

  const resetForm = () => {
    setFormValues(initialState);
  };

  return {
    formValues,
    handleChange,
    handleSubmit,
    resetForm,
  };
};