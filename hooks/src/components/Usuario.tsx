import { useState } from 'react'

interface UserInterface {
  uid: number
  username: string
}
export const Usuario = () => {
  const [usuario, setUsuario] = useState<UserInterface>()
  const login = () => {
    setUsuario({
      uid: 1,
      username: 'jose'
    })
  }
  return (
    <div>
      <h3>Usuario: useState</h3>
      <button onClick={login}>Login</button>

<pre>{!usuario ? "No hay usuario" : JSON.stringify(usuario)}</pre>
    </div>
  )
}
