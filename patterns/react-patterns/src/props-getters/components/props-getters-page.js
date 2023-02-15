import React from 'react';

import { FormWithRenderProps } from './props-getters-with-render-props';
import { FinalFormWithRenderProps } from '../renderProps/final-with-render-props';
import { FormWithHoc } from './form-with-hoc';
import { FormWithHook } from './form-with-hook';

// nuevo requerimiento
const logChange = () => {
  console.log('changed!');
};

export const PropsGettersPage = () => {
  const onSubmit = values => alert(JSON.stringify(values));

  // nuevo requerimiento
  const _handleChange = handleChange => e => {
    alert('change');
    handleChange(e);
  };

  // el formulario maquetado se manda como hijo como children al componente padre
  // que contiene las variables de estado y sus handlers
  return (
    <>
      <h2>Ejemplo sin Props Getters</h2>
      <FormWithRenderProps initialState={{ name: '', jobTitle: '' }}>
        {({ formValues, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>Name</p>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={_handleChange(handleChange)}
              />
            </div>
            <div>
              <p>Job Title</p>
              <input
                type="text"
                name="jobTitle"
                value={formValues.jobTitle}
                onChange={handleChange}
              />
            </div>
            <button style={{ margin: '8px 0' }} type="submit">
              Submit
            </button>
          </form>
        )}
      </FormWithRenderProps>

      <hr />

      <h2>Ejemplo con Props Getters y Render Props</h2>

      {/* pasamos de recibir handlechange como funcion
      a recibir como atributos todo lo que contenga getInputProps */}
      <FinalFormWithRenderProps initialState={{ name: '', jobTitle: '' }}>
        {({ formValues, getInputProps, handleSubmit }) => ( // aqui
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <p>Name</p>
              <input
                type="text"
                name="name"
                value={formValues.name}
                // aqui estamos agregando a este helper de atriutos, esta funcionalidad onChange
                // de manera que obtendriamos onChange={logChange}
                {...getInputProps({ onChange: logChange })}
              />
            </div>
            <div>
              <p>Job Title</p>
              <input
                type="text"
                name="jobTitle"
                value={formValues.jobTitle}
                {...getInputProps({ onChange: logChange })}
              />
            </div>
            <button style={{ margin: '8px 0' }} type="submit">
              Submit
            </button>
          </form>
        )}
      </FinalFormWithRenderProps>

      <hr />

      {/* Form al que le mandas solo la funcion on submit */}
      <h2>Ejemplo con Props Getters y HOC</h2>
      <FormWithHoc onSubmit={onSubmit} />

      <hr />

      <h2>Ejemplo con Props Getters y Custom Hook</h2>
      <FormWithHook onSubmit={onSubmit} />
    </>
  );
};
