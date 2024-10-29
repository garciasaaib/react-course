import { useState } from "react";

interface Props {
    initialValue?: number
}

export const Counter = ({ initialValue = 0 }: Props) => {

    const [counter, setCounter] = useState(initialValue)

    const handleClick = () => {
        setCounter( prev => prev + 1 );
    }

    return (
        <>
            <h3>Counter: { counter }</h3>   

            <button onClick={ handleClick }>
                +1
            </button>
        </>
    )
}
