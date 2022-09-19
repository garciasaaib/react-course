import { useEffect, useReducer } from 'react'

// AuthState es la estructura de la data que se estará manejando
interface AuthState {
  validating: boolean;
  token: string | null;
  username: string;
  name: string;
}

const initialState: AuthState = {
  validating: true,
  token: null,
  username: '',
  name: ''
}

// es menos facil expandir un action
type AuthAction =
  | { type: 'logout' }
  | { type: 'login', payload: { username: string, name: string } }

// type LoginActionPayload

// authReducer debe ser tipo de initialState
export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        ...state,
        validating: false,
        token: null,
        name: '',
        username: '',
      }
    case 'login':
      const { name, username } = action.payload
      return {
        ...state,
        validating: false,
        token: 'adfadsf',
        name,
        username,
      }
    default:
      return state
  }
}
export const useAuth = () => {
  const [{ validating, token, name, username }, dispatch] = useReducer(authReducer, initialState)


  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' })
    }, 1500);
  }, [])


  const login = () => {
    dispatch({ type: 'login', payload: { name: "Adrian", username: 'adranuz' } })
  }
  const logout = () => {
    dispatch({ type: 'logout' })
  }

  return {
    login, logout,
    authData: {
      name,
      token,
      username,
      validating
    }
  }
}
