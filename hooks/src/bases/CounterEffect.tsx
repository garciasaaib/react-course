import { useCounter } from "../hooks/useCounter";
export const CounterEffect = () => {
    const {counter, counterElement, handleClick} = useCounter(5, 10)

    return (
        <>
            <h3 ref={counterElement}>Counter: { counter }</h3>

            <button onClick={ handleClick }>
                +1
            </button>
        </>
    )
}
