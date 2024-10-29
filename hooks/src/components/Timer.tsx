import { useEffect, useRef, useState } from "react"

type TimerProps = {
  milisegundos: number
}
export const Timer = ({milisegundos}: TimerProps) => {
  const [segs, setSegs] = useState(0)

  /**
   * Se planea mantener la referencia del intervalo para que
   * solo exista 1 interval en este componente
   * es el manejo de Timers en React
   *
   * useRef: es un hook que nos permite mantener la referencia mutable
   * es decir que siempre es el mismo espacio en memoria
   */
  const ref = useRef<ReturnType<typeof setInterval>>()


  useEffect(() => {
    // Si existe un interval, limpialo
    ref.current && clearInterval(ref.current)

    // Si se crearea otro interval, sobreescribiria el actual
    ref.current = setInterval(() => setSegs(s => s + 1), milisegundos)

  }, [milisegundos])
  return (
    <div>Timer: <small>{segs}</small></div>
  )
}
