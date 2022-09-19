import { reqResApi } from '../api/reqRes'
import { useEffect, useRef, useState } from 'react';
import { ReqResList, Char } from '../interfaces/reqRes';

export const useUsuarios = () => {
  const [characters, setCharacters] = useState<Char[]>([])

  const paginaRef = useRef(1)

  useEffect(() => {
    cargarUsuarios()
  }, [])

  const cargarUsuarios = async () => {
    try {
      const list = await reqResApi.get<ReqResList>('/character', {
        params: {
          page: paginaRef.current
        }
      })
      setCharacters(list.data.results)
    } catch (error) {
      paginaRef.current--
      alert('No hay siguiente pagina')
    }
  }
  const nextPage = () => {
    paginaRef.current++
    cargarUsuarios()
  }
  const prevPage = () => {
    if(paginaRef.current >1) {
      paginaRef.current--
      cargarUsuarios()
    } else alert('No hay pagina previa')
  }
  return {
    characters, nextPage, prevPage
  }
}
