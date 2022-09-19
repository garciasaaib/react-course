import {useAuth} from '../hooks/useAuth'

export const Login = () => {
    const {login, logout, authData} = useAuth()
    const {name, token, validating} = authData
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
                    ? <button onClick={login} className='btn btn-primary'>Login</button>
                    : <button onClick={logout} className='btn btn-danger'>Logout</button>
            }
        </>
    )
}
