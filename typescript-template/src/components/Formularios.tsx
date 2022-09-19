import { useForm } from '../hooks/useForm';

export const Formularios = () => {
  const { form, onChange}= useForm({
    email: 'adrian@gmail.com',
    password: '12344356'
  })

  return (
    <>
      <h3>Formularios</h3>

      <input onChange={({target}) => onChange(target.value, 'email')} value={form.email} type="text" className="form-control" placeholder="Email" />
      <input onChange={({target}) => onChange(target.value, 'password')} value={form.password} type="text" className="form-control" placeholder="Password" />
      <button className='btn btn-primary'>Submit</button>
      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
    </>
  )
}
