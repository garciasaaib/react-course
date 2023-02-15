import { useState } from 'react';

function callAll(...fns) {
  return function (...args) {
    fns.forEach(fn => fn && fn(...args));
  };
}

// hook que contiene state and handlers para el form
export const useControlledForm = initialState => {
  const [formValues, setFormValues] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = _handleSubmit => event => {
    event.preventDefault();

    _handleSubmit(formValues);
  };


  // helper for many function props
  const getInputProps = (props = {}) => ({
    onChange: callAll(props.onChange, handleChange),
  });

  // object setter props
  const getStateAndHelpers = () => ({
    formValues,
    handleSubmit,
    getInputProps,
  });

  // states and helpers del hook
  return {
    handleSubmit,
    ...getStateAndHelpers(),
  };
};
