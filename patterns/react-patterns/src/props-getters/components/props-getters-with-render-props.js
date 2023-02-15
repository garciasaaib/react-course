import PropTypes from 'prop-types';
import {useState} from 'react';

// form que maneja los render props para mantener cambios en el form
// los render props serian initialState, children
export const FormWithRenderProps = ({initialState, children}) => {
  // estado del formuario inicializado con  initial state
  const [formValues, setFormValues] = useState({...initialState});

  // handle input change
  const handleChange = ({target}) => {
    const {name, value} = target;
    setFormValues({...formValues, [name]: value});
  };

  // handle submit form, que prevenga re-render y ejecute _handleSubmit
  const handleSubmit = _handleSubmit => event => {
    event.preventDefault();
    _handleSubmit(formValues);
  };

  // todas las funciones y variables se agrupan en getStateAndHelpers
  const getStateAndHelpers = () => ({
    formValues,
    handleChange,
    handleSubmit,
  });

  // se retorna un children con props
  return children(getStateAndHelpers());
};

FormWithRenderProps.propTypes = {
  children: PropTypes.func.isRequired,
  initialState: PropTypes.object.isRequired,
};