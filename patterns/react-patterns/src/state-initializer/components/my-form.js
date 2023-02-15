import {useControlledForm} from '../hooks/useControlledForm';

// componente que retorna un formulario
// el formulario usa el cutom hook useControlledForm, que inicializa los inputs
export const MyForm = () => {
  const {formValues, handleChange, handleSubmit, resetForm} = useControlledForm(
    {
      name: '',
    },
  );

  // mediante esta es la funcion que ejecuta la funcion handleSubmit del form
  const showData = values => {
    alert(JSON.stringify(values));
    // mediante esta funcion limpiamos los valores del form
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit(showData)}>
      <input name="name" value={formValues.name} onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
};