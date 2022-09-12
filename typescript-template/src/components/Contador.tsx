import React, { useState } from 'react'
export const Contador = () => {
    const [contador, setContador] = useState<number>(0)

    const acumular = (numero: number): void => {
        setContador(contador + numero)
    }

    return (
        <>
            <h3>Contador: <small>{contador}</small></h3>
            <button onClick={() => acumular(1)} className='btn btn-primary'> + 1 </button>
            &nbsp;
            <button onClick={() => acumular(- 1)} className='btn btn-primary'> - 1 </button>
        </>
    )
}
