import {Component} from 'react';

// funcion helper que ejecuta todas las funciones mandadas
function callAll(...fns) {
  return function (...args) {
    fns.forEach(fn => fn && fn(...args));
  };
}

// componente que contiene solo las funcionalidades

/**
 * el scope de este componente contiene las funciones handleChange, handleSubmit como funciones controladoras del form
 * tambien las agrupa en getStateAndhelpers para mandarlas al FormComponent as props
 * @param {*} FormComponent componente form maquetado
 * @param {*} initialState espacios del form a controlar
 * @returns FormComponent componente, con un monton de funcionnes as props
 */
export const withControlledForm = (FormComponent, initialState = {}) =>
  class WithFormMethodsHOC extends Component {
    constructor(props) {
      super(props);

      this.state = {
        formValues: {...initialState},
      };
    }

    handleChange = e => {
      const {name, value} = e.target;
      const {formValues} = this.state;

      formValues[name] = value;
      this.setState({formValues});
    };

    handleSubmit = _handleSubmit => e => {
      e.preventDefault();
      const {formValues} = this.state;

      _handleSubmit(formValues);
    };

    // fuiona como un helper para agregar funcionnalidades a un espacio del objeto, que pasara a ser props del form
    getInputProps = (props = {}) => ({
      onChange: callAll(props.onChange, this.handleChange),
    });

    // crea un objeto que pasara a ser atributos del form
    getStateAndHelpers = () => ({
      formValues: this.state.formValues,
      handleSubmit: this.handleSubmit,
      getInputProps: this.getInputProps,
    });

    render() {
      return (
        <FormComponent
          {...this.props}
          handleSubmit={this.handleSubmit}
          {...this.getStateAndHelpers()}
        />
      );
    }
  };