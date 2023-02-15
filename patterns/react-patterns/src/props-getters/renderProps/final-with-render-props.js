import PropTypes from 'prop-types';
import {useState} from 'react';

/**
 * this funtion is a helper that runs all the functions sended as arguments
 * @param  {...any} fns functions as arguments
 * @returns when is called, all the functions sended as arguments will be executed
 */
function callAll(...fns) {
  return function (...args) {
    fns.forEach(fn => fn && fn(...args));
  };
}

export const FinalFormWithRenderProps = ({initialState, children}) => {
  const [formValues, setFormValues] = useState({...initialState});

  const handleChange = ({target}) => {
    const {name, value} = target;

    setFormValues({...formValues, [name]: value});
  };

  const handleSubmit = _handleSubmit => event => {
    event.preventDefault();

    _handleSubmit(formValues);
  };

  // va a retornar todos los props que yo crea necesitar pasar a los inputs
  // este objeto se agregara mas tarde en el children como atributos del input
  // mediante call all ejecuta cada una de las funciones mandadas como parametro
  const getInputProps = (props = {}) => ({
    onChange: callAll(props.onChange, handleChange),
    //... aqui podrian ir mas atributos de los inputs
  });

  const getStateAndHelpers = () => ({
    formValues,
    handleSubmit,
    getInputProps, // quitamos handleChage para agregar el conglomerado de getInputProps
  });


  // mediante este return, se toma lo que se mando por children
  // seteando como parametro lo que se contiene en getStateAndHelpers
  return children(getStateAndHelpers());
};

FinalFormWithRenderProps.propTypes = {
  children: PropTypes.func.isRequired,
  initialState: PropTypes.object.isRequired,
};