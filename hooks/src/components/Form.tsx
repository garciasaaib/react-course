import { useForm } from '../hooks/useForm'
interface FormDataType {
  email: string;
  name: string;
}
export const Form = () => {
  const { formulario, handleChange } = useForm<FormDataType>({
    email: '',
    name: ''
  })

  return (
    <div>
      <form autoComplete='off' className='grid *:w-100'>
        <div className=''>
          <label htmlFor="">Email</label>
          <input type="text" name='email' value={formulario.email} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="">Nombre</label>
          <input type="text" name='name' value={formulario.name} onChange={handleChange}/>
        </div>
      </form>
      <pre>{JSON.stringify(formulario)}</pre>
    </div>
  )
}
