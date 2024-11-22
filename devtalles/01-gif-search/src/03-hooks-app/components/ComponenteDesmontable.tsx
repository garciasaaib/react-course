import { useEffect, useState } from "react"

export const ComponenteDesmontable = () => {
  const [coords, setCoords] = useState({x:0, y:0})
  // reglas de montaje y desmontaje
  useEffect(() => {
    console.log('Message Mounted')
    return () => {
      console.log('Message Unmounted')
    }
  }, [])

  // efecto encadenado por el movimiento del mouse
  useEffect(() => {
    // creamos la funcion
    const onMouseMove = ({x, y}: MouseEvent) => {
      const coords = {x,y}
      setCoords(coords)
    }

    // agregamos esta funcion por referencia cuando se monta
    window.addEventListener('mousemove', onMouseMove)

    // quitamos la funcion del evento por referencia
    return () => {
      window.removeEventListener('mousemove',onMouseMove)
    }
  },[])
  return (
    <>
      <h3>Usuario ya existe</h3>
      <p>x: {coords.x}</p>
      <p>y: {coords.y}</p>
    </>
  )
}
