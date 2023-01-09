import {Component} from 'react';

// this.props es un objeto en el scope del componente
// que contiene todas las props generales y las creadas

// mediate el state del error decidimos si mostrar children o el primer error
// mediante el prop.render decidimos si mostrar un mensaje u otro
export class FinalErrorBoundary extends Component {
  state = {hasError: false, error: null};

  componentDidCatch(error) {
    this.setState({hasError: true, error});
  }

  render() {
    const {hasError, error} = this.state;
    const {children} = this.props;

    // si hay error pero no mandamos nada en render
    if (hasError && !this.props.render) {
      return (
        <div>
          <p>Oops! ha ocurrido un error inesperado</p>
          {error.toString()}
        </div>
      );
    }

    // si hay error y mandamos algo en render
    if (hasError && this.props.render) {
      return this.props.render(error);
    }

    return children;
  }
}