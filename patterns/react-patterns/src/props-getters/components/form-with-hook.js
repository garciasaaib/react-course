import PropTypes from 'prop-types';

import { useControlledForm } from '../hooks/useControlledForm';


/**
 * @param {} onSubmit es la funcion que maneja el submit, en este caso la obtenemos como parametro desde el padre
 * @returns form manejado
 */
export const FormWithHook = ({ onSubmit }) => {
  // inicializamos el useControlledForm mandandole los campos que va a tener
  // y obtenemos las funciones que utilizaremos para controlar el form
  const {
    formValues, // state de los campos
    getInputProps, // objeto de propiedades para desestructurar en inputs
    handleSubmit // metodo para manejar el submit del form
  } = useControlledForm({
    name: '',
    jobTitle: '',
  });


  /** handleSubmit es un handler que ejecutara la funcion que le mandes como parametro */
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p>Name</p>
        <input
          type="text"
          name="name"
          value={formValues.name}
          // getInputProps contiene ya algunos parametros,
          // en este caso, agregamos una funcion en el campo onChange, que despues obtendremos como parametro
          {...getInputProps({
            onChange: () => console.log('updated'),
          })}
        />
      </div>
      <div>
        <p>Job Title</p>
        <input
          type="text"
          name="jobTitle"
          value={formValues.jobTitle}
          {...getInputProps()}
        />
      </div>
      <button style={{ margin: '8px 0' }} type="submit">
        Submit
      </button>
    </form>
  );
};

FormWithHook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};