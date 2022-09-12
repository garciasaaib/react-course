import { useState } from "react"

export const useCounter = (inicial: number = 0) => {
    const [contador, setContador] = useState<number>(inicial)

    const acumular = (numero: number): void => {
        setContador(contador + numero)
    }

    return {
        contador, acumular
    }
}
