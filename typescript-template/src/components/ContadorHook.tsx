import { useCounter } from '../hooks/useCounter'
export const ContadorHook = () => {
    const {contador, acumular} = useCounter(10)

    return (
        <>
            <h3>Contador con hook: <small>{contador}</small></h3>
            <button onClick={() => acumular(1)} className='btn btn-primary'> + 1 </button>
            &nbsp;
            <button onClick={() => acumular(- 1)} className='btn btn-primary'> - 1 </button>
        </>
    )
}
