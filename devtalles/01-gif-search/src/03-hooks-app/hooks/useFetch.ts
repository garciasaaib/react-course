import { useEffect, useState } from "react"
interface ErrorInterface {
  code: number;
  message: string;
}
interface UseFetchInterface<T> {
  data: T | null;
  isLoading: boolean;
  hasError: boolean;
  error: ErrorInterface | null;
}

export const useFetch = <T>(url: string) => {
  const [localCache, setLocalCache]= useState<{ [key: string]: T }>({})
  const [state, setState] = useState<UseFetchInterface<T>>({
    data: null,
    isLoading: true,
    hasError: false,
    error: null
  })
  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    })
  }
  const getFetch = async () => {
    // revisa en cache si existe la url
    // si existe usa el value de ese url
    if(localCache[url]) {
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      })
      return;
    }

    // si no existe en cache ...
    // inicia el loading
    setLoadingState()
    // hace la peticion
    const res = await fetch(url)
    // si da error, muestra el error en el state
    if (!res.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: res.status,
          message: res.statusText
        }
      })
      return;
    }

    // si no da error obtiene la data y pone la info en el state
    // y despues lo guarda en cache con la url como key
    const data = await res.json()
    setState({
      data,
      isLoading: false,
      hasError: false,
      error: null,
    })
    setLocalCache({...localCache, [url]: data})
  }

  useEffect(() => {
    getFetch()
  }, [url])

  return {
    ...state
  }
}
