import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export const useCounter = (initial: number, max: number) => {

  const [counter, setCounter] = useState(initial)

  // use ref no hace un renderizado extra
  // const counterElement = useRef(null)
  const counterElement = useRef<HTMLHeadingElement>(null)
  const tl = useRef(gsap.timeline())

  const handleClick = () => {
      setCounter( prev => Math.min(prev + 1, max) );
  }
  
  // funciona igual que el useEffect
  // pero se asegura que el primer renderizado este completado
  useLayoutEffect(()=>{
    if (!counterElement.current) return;
    tl.current
      .to(counterElement.current, { y: -10, duration: 0.2, ease: "expo.in" })
      .to(counterElement.current, { y: 0, duration: .5, ease: "expo.inOut" })
      .pause()
  },[])

  useEffect(() => {
      //effect
      if(counter < max) return;
      tl.current.play(0);
      // es problema reinicializar cada useEffect, por esto usamos un ref
      //const tl = gsap.timeline();

      

      // cleanup: funcion ejecutada cuando el componente es destruido
  }, [counter])
  return {
    counter,
    counterElement,
    handleClick
  }
}