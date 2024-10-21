import React from 'react'

const createRows = () => {
  return (
    <tr>
      <td>
        <button className='btn btn-primary'>+1</button>
      </td>
      <td>
        <input type="text" className='form-control' />
      </td>
      <td>
        <h3>0</h3>
      </td>
      <td>
        <button className='btn btn-danger'>Borrar</button>
      </td>
    </tr>
  )
}

export const BandList = () => {
  return (
    <>
      <h3>Band List</h3>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>#</th>
            <th>Band Name</th>
            <th>Votes</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {createRows()}
        </tbody>
      </table>
    </>
  )
}
