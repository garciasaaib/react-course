import { useEffect, useState } from "react"

export const useFetch = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null
  })
  const getFetch = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const data = response.json()
    console.log(data)
  }
  useEffect(() => {
    getFetch()
  
    return () => {
    }
  }, [])
  

  return {
    ...state
  }
}
