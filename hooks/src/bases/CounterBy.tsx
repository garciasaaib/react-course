import { useState } from 'react'

interface Props {
    initialValue?: number;
}

interface CounterState {
    counter: number;
    clicks: number;
}


export const CounterBy = ({ initialValue = 5 }: Props) => {

    const [ { counter, clicks }, setCounterState ] = useState<CounterState>({
        counter: initialValue,
        clicks: 0,
    })

    const handleClick = ( value: number ) => {
        setCounterState( ({ clicks, counter }) => ({
            counter: counter + value,
            clicks: clicks + 1
        }));
    }

    return (
        <>
            <h3>CounterBy: { counter }</h3>
            <h3>Clicks: { clicks }</h3>

            <button onClick={ () => handleClick(1) }>+1</button>
            <button onClick={ () => handleClick(5) }>+5</button>
        </>
    )
}
