import { useUsuarios } from '../hooks/useUsuarios';
import { Char } from '../interfaces/reqRes';


export const Usuarios = () => {
  const { characters, nextPage, prevPage } = useUsuarios()

  const renderItem = (item: Char) => {
    const {id, name, image, species} = item
    return (
      <tr key={id}>
        <td><img style={{ width: 20, borderRadius: 100}} src={image} alt={name} /></td>
        <td>{name}</td>
        <td>{species}</td>
      </tr>
      )
  }
  return (
    <>
      <h3>Usuarios</h3>
      <button onClick={prevPage} className='btn btn-primary'>Prev</button>
      <button onClick={nextPage} className='btn btn-primary'>Next</button>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Especies</th>
          </tr>
        </thead>
        <tbody>
          {characters.map(renderItem)}
        </tbody>
      </table>
    </>
  )
}
