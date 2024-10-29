import { useState } from "react"

/**
 export function useFrom<T>(initialState:T) {
 * <T>: tipo dato generico, lo que resiva como parametro sera su tipo
 * initialState:T: ese sera el tipo de sus parametros
 * @returns 
 */

export const useForm = <T extends Object>(initState: T) => {
  const [formulario, setFormulario] = useState(initState)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormulario({
      ...formulario,
      [name]: value
    })
  }
  return {
    formulario,
    handleChange
  }
}
