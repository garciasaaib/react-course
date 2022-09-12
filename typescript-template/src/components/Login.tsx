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

// authReducer debe ser tipo de initialState
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                ...state,
                validating: false,
                token: null,
                name: '',
                username: '',
            }

        default:
            return state
    }
}


export const Login = () => {
    const [{ validating, token, name }, dispatch] = useReducer(authReducer, initialState)


    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500);
    }, [])

    if (validating) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">Validando...</div>
            </>
        )
    }
    return (
        <>
            <h3>Login</h3>

            {
                (token)
                    ? <div className="alert alert-success">Autenticado como {name}</div>
                    : <div className="alert alert-danger">No Autenticado</div>
            }

            {
                (!token)
                    ? <button className='btn btn-primary'>Login</button>
                    : <button className='btn btn-danger'>Logout</button>
            }
        </>
    )
}
